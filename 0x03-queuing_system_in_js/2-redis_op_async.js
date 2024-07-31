import { createClient, RedisClientType } from 'redis';
import { promisify } from 'util';

/**
 * Creates a Redis client instance.
 * @type {RedisClientType}
 */
const client = createClient();

/**
 * Event listener for handling errors during the connection to the Redis server.
 * Logs an error message when the client is not connected.
 * @param {Error} err - The error object.
 */
client.on('error', err => {
  console.log('Redis client not connected to the server:', err.toString());
});

/**
 * Sets a new key-value pair in the Redis store.
 * @param {string} schoolName - The key name.
 * @param {string} value - The value to set.
 */
const setNewSchool = (schoolName, value) => {
  client.SET(schoolName, value, (err) => {
    if (err) {
      console.log('Error setting value:', err.toString());
    }
  });
};

/**
 * Retrieves and displays the value of a given key from the Redis store.
 * @param {string} schoolName - The key name.
 * @returns {Promise<void>} - A promise that resolves when the value is displayed.
 */
const displaySchoolValue = async (schoolName) => {
  try {
    const getAsync = promisify(client.GET).bind(client);
    const value = await getAsync(schoolName);
    console.log(value);
  } catch (err) {
    console.log('Error retrieving value:', err.toString());
  }
};

/**
 * Main function to execute Redis operations.
 * Sets and displays Redis key-value pairs.
 * @returns {Promise<void>} - A promise that resolves when all operations are complete.
 */
async function main() {
  await displaySchoolValue('Holberton');
  setNewSchool('HolbertonSanFrancisco', '100');
  await displaySchoolValue('HolbertonSanFrancisco');
}

/**
 * Event listener for when the Redis client is connected to the server.
 * Executes the main function after establishing the connection.
 */
client.on('connect', async () => {
  console.log('Redis client connected to the server');
  await main();
});
