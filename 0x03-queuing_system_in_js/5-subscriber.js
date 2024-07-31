import { createClient } from 'redis';

/**
 * Redis client instance.
 * @type {RedisClient}
 */
const client = createClient();

/**
 * Event handler for successful connection to Redis server.
 * Logs a message when the client successfully connects.
 */
client.on('connect', () => {
  console.log('Redis client connected to the server');
});

/**
 * Event handler for errors encountered by the Redis client.
 * Logs an error message if the client fails to connect.
 * @param {Error} error - The error encountered.
 */
client.on('error', (error) => {
  console.log('Redis client not connected to the server:', error);
});

// Channel to which the client will subscribe.
const channel = 'holberton school channel';

/**
 * Subscribes the Redis client to the specified channel.
 */
client.subscribe(channel);

/**
 * Event handler for messages received from the Redis server.
 * Logs the message to the console. If the message is 'KILL_SERVER',
 * unsubscribes from the channel and quits the client.
 * @param {Error|null} _err - The error, if any, received with the message.
 * @param {string} message - The message received from the channel.
 */
client.on('message', (_err, message) => {
  console.log(message);
  if (message === 'KILL_SERVER') {
    client.unsubscribe();
    client.quit();
  }
});
