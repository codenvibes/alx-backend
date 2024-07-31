const express = require('express');
const redis = require('redis');
const kue = require('kue');
const { promisify } = require('util');

// Create an express application
const app = express();
const port = 1245;

// Create a Redis client and promisify the get/set methods
const redisClient = redis.createClient();
const getAsync = promisify(redisClient.get).bind(redisClient);
const setAsync = promisify(redisClient.set).bind(redisClient);

// Create a Kue queue
const queue = kue.createQueue();

// Initialize the reservationEnabled boolean
let reservationEnabled = true;

/**
 * Sets the number of available seats in Redis.
 * @param {number} number - The number of seats to set.
 */
async function reserveSeat(number) {
  await setAsync('available_seats', number);
}

/**
 * Retrieves the current number of available seats from Redis.
 * @returns {Promise<number>} - A promise that resolves to the number of available seats.
 */
async function getCurrentAvailableSeats() {
  return parseInt(await getAsync('available_seats'), 10);
}

// Initialize the number of available seats
(async () => {
  await reserveSeat(50);
})();

/**
 * Route handler for GET /available_seats.
 * Returns the current number of available seats as JSON.
 * @param {express.Request} req - The request object.
 * @param {express.Response} res - The response object.
 */
app.get('/available_seats', async (req, res) => {
  const seats = await getCurrentAvailableSeats();
  res.json({ numberOfAvailableSeats: seats.toString() });
});

/**
 * Route handler for GET /reserve_seat.
 * Creates a reservation job in the queue if reservations are enabled.
 * Returns a status message indicating if the reservation was processed or blocked.
 * @param {express.Request} req - The request object.
 * @param {express.Response} res - The response object.
 */
app.get('/reserve_seat', async (req, res) => {
  if (!reservationEnabled) {
    return res.json({ status: 'Reservation are blocked' });
  }

  const job = queue.create('reserve_seat').save((err) => {
    if (err) {
      return res.json({ status: 'Reservation failed' });
    }
    res.json({ status: 'Reservation in process' });
  });

  job.on('complete', (result) => {
    console.log(`Seat reservation job ${job.id} completed`);
  }).on('failed', (err) => {
    console.log(`Seat reservation job ${job.id} failed: ${err.message}`);
  });
});

/**
 * Route handler for GET /process.
 * Processes the queue for reservation jobs and updates the number of available seats.
 * Returns a status message indicating the queue is being processed.
 * @param {express.Request} req - The request object.
 * @param {express.Response} res - The response object.
 */
app.get('/process', async (req, res) => {
  res.json({ status: 'Queue processing' });

  queue.process('reserve_seat', async (job, done) => {
    try {
      const availableSeats = await getCurrentAvailableSeats();
      if (availableSeats <= 0) {
        reservationEnabled = false;
        return done(new Error('Not enough seats available'));
      }
      
      await reserveSeat(availableSeats - 1);
      done();
    } catch (err) {
      done(err);
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
