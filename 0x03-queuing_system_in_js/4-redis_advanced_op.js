const redis = require('redis');

/**
 * Create a Redis client instance.
 * @type {redis.RedisClient}
 */
const client = redis.createClient();

/**
 * Key for the Redis hash where values will be stored.
 * @constant {string}
 */
const hashKey = 'HolbertonSchools';

/**
 * Object containing city names and their corresponding values.
 * @type {Object.<string, number>}
 */
const hashValues = {
  portland: 50,
  Seattle: 80,
  'New York': 20,
  Bogota: 20,
  Cali: 40,
  Paris: 2
};

/**
 * Set multiple key-value pairs in the Redis hash.
 * @param {Object.<string, number>} values - The key-value pairs to set in Redis.
 */
Object.entries(hashValues).forEach(([field, value]) => {
  client.hset(hashKey, field, value, (error, reply) => {
    if (error) {
      console.log(`Error setting value for ${field}:`, error);
    } else {
      console.log(`Value set for ${field}:`, reply);
    }
  });
});

/**
 * Retrieve and log all hash values from Redis.
 * @param {Error|null} error - The error, if any, that occurred during retrieval.
 * @param {Object.<string, string>} result - The retrieved hash values.
 */
client.hgetall(hashKey, (error, result) => {
  if (error) {
    console.error('Error retrieving hash values:', error);
  } else {
    console.log('Hash values in Redis:', result);
    Object.entries(result).forEach(([field, value]) => {
      console.log(`${field}: ${value}`);
    });
  }
  client.quit();
});
