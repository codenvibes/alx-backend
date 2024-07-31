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

client.on('connect', () => {
  console.log('Redis client connected to the server');
});
