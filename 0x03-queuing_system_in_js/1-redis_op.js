import { createClient } from 'redis';

/**
 * Creates a Redis client instance.
 * @type {import('redis').RedisClientType}
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
 * Event listener for successful connection to the Redis server.
 * Logs a success message when the client is connected.
 */
client.on('connect', () => {
  console.log('Redis client connected to the server');
});

/**
 * Sets a new key-value pair in the Redis store.
 * @param {string} schoolName - The key name.
 * @param {string} value - The value to set.
 */
const setNewSchool = (schoolName, value) => {
  client.SET(schoolName, value, print);
};

/**
 * Displays the value of a key from the Redis store.
 * @param {string} schoolName - The key name.
 */
const displaySchoolValue = (schoolName) => {
  client.GET(schoolName, (_err, reply) => {
    console.log(reply);
  });
};

// Display the value of 'Holberton' key
displaySchoolValue('Holberton');

// Set a new key-value pair 'HolbertonSanFrancisco' with value '100'
setNewSchool('HolbertonSanFrancisco', '100');

// Display the value of 'HolbertonSanFrancisco' key
displaySchoolValue('HolbertonSanFrancisco');
