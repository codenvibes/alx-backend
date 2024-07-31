import { createClient } from "redis";

/**
 * Redis client instance
 * @type {import("redis").RedisClientType}
 */
const client = createClient();

/**
 * Event handler for Redis client connection
 */
client.on('connect', () => {
    console.log('Redis client connected to the server');
});

/**
 * Event handler for Redis client error
 * @param {Error} error - The error encountered
 */
client.on('error', (error) => {
    console.log('Redis client not connected to the server:', error);
});

/**
 * Publishes a message to a Redis channel after a specified delay
 * @param {string} message - The message to be published
 * @param {number} time - The delay in milliseconds before publishing the message
 */
const publishMessage = (message, time) => {
    setTimeout(() => {
        console.log('About to send', message);
        client.publish('holberton school channel', message);
    }, time);
};

// Publishing messages with different delays
publishMessage("Holberton Student #1 starts course", 100);
publishMessage("Holberton Student #2 starts course", 200);
publishMessage("KILL_SERVER", 300);
publishMessage("Holberton Student #3 starts course", 400);