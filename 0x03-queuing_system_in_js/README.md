<h1 align="center"><b>0X03. QUEUING SYSTEM IN JS</b></h1>
<div align="center"><code>Back-end</code> <code>JavaScript</code> <code>ES6</code> <code>Redis</code> <code>NodeJS</code> <code>ExpressJS</code> <code>Kue</code></div>

<br>
<div align="center">
<img width="60%" src="https://github.com/codenvibes/alx-backend/blob/master/0x03-queuing_system_in_js/images/1486e02a78cdf7b4557c.png">
</div>

<!-- <br>
<hr>
<h3><a href=>Notes</a></h3>
<hr> -->


<!--==================================================-->
<br>

## Resources
<details>
<summary><b><a href="https://redis.io/docs/latest/integrate/">Redis quick start</a></b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href="https://redis.io/docs/latest/develop/connect/cli/">Redis client interface</a></b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href="https://github.com/redis/node-redis">Redis client for Node JS</a></b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href="https://github.com/Automattic/kue">Kue</a></b> <em>deprecated but still use in the industry</em></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>



<!--==================================================-->
<br>

## Learning Objectives
<details>
<summary><b><a href=" "> </a>How to run a Redis server on your machine</b></summary><br>

To run a Redis server on your machine, follow these steps. The instructions cover installation and running Redis on both Linux (Ubuntu) and Windows.

### On Linux (Ubuntu)

1. **Update your package lists:**

   ```bash
   sudo apt-get update
   ```

2. **Install Redis:**

   ```bash
   sudo apt-get install redis-server
   ```

3. **Start the Redis server:**

   ```bash
   sudo systemctl start redis-server
   ```

4. **Enable Redis to start on boot:**

   ```bash
   sudo systemctl enable redis-server
   ```

5. **Check the status of the Redis server:**

   ```bash
   sudo systemctl status redis-server
   ```

6. **Connect to the Redis server:**

   ```bash
   redis-cli
   ```

### Basic Redis Commands

Once you have the Redis server running, you can use the Redis CLI to interact with the server. Here are some basic commands:

- **Set a key-value pair:**

  ```bash
  SET mykey "Hello, Redis!"
  ```

- **Get the value of a key:**

  ```bash
  GET mykey
  ```

- **Check if a key exists:**

  ```bash
  EXISTS mykey
  ```

- **Delete a key:**

  ```bash
  DEL mykey
  ```

- **List all keys:**

  ```bash
  KEYS *
  ```

- **Flush all keys from the database:**

  ```bash
  FLUSHALL
  ```

<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href=" "> </a>How to run simple operations with the Redis client</b></summary><br>

Running simple operations with the Redis client (redis-cli) involves using basic Redis commands to set, get, and manage key-value pairs. Here are some examples to help you get started:

### Connecting to Redis

First, ensure your Redis server is running. Then, open your terminal or command prompt and connect to the Redis server using the Redis client:

```bash
redis-cli
```

### Basic Operations

1. **Set a key-value pair:**

   ```bash
   SET mykey "Hello, Redis!"
   ```

2. **Get the value of a key:**

   ```bash
   GET mykey
   ```

3. **Check if a key exists:**

   ```bash
   EXISTS mykey
   ```

4. **Delete a key:**

   ```bash
   DEL mykey
   ```

5. **Increment the value of a key (must be an integer):**

   ```bash
   INCR mycounter
   ```

6. **Decrement the value of a key (must be an integer):**

   ```bash
   DECR mycounter
   ```

7. **Append a value to a key:**

   ```bash
   APPEND mykey " How are you?"
   ```

8. **Get a substring of the value of a key:**

   ```bash
   GETRANGE mykey 0 4
   ```

9. **Set multiple keys at once:**

   ```bash
   MSET key1 "value1" key2 "value2" key3 "value3"
   ```

10. **Get the values of multiple keys at once:**

    ```bash
    MGET key1 key2 key3
    ```

### Working with Lists

1. **Push elements to the head of a list:**

   ```bash
   LPUSH mylist "first"
   LPUSH mylist "second"
   ```

2. **Push elements to the tail of a list:**

   ```bash
   RPUSH mylist "third"
   ```

3. **Get elements from a list:**

   ```bash
   LRANGE mylist 0 -1
   ```

4. **Pop an element from the head of a list:**

   ```bash
   LPOP mylist
   ```

5. **Pop an element from the tail of a list:**

   ```bash
   RPOP mylist
   ```

### Working with Hashes

1. **Set a field in a hash:**

   ```bash
   HSET myhash field1 "value1"
   ```

2. **Get the value of a field in a hash:**

   ```bash
   HGET myhash field1
   ```

3. **Set multiple fields in a hash:**

   ```bash
   HMSET myhash field2 "value2" field3 "value3"
   ```

4. **Get multiple fields from a hash:**

   ```bash
   HMGET myhash field1 field2
   ```

5. **Get all fields and values in a hash:**

   ```bash
   HGETALL myhash
   ```

### Working with Sets

1. **Add members to a set:**

   ```bash
   SADD myset "member1"
   SADD myset "member2"
   ```

2. **Get all members of a set:**

   ```bash
   SMEMBERS myset
   ```

3. **Check if a member exists in a set:**

   ```bash
   SISMEMBER myset "member1"
   ```

4. **Remove a member from a set:**

   ```bash
   SREM myset "member1"
   ```

### Working with Sorted Sets

1. **Add members with scores to a sorted set:**

   ```bash
   ZADD myzset 1 "member1"
   ZADD myzset 2 "member2"
   ```

2. **Get all members of a sorted set by score:**

   ```bash
   ZRANGE myzset 0 -1 WITHSCORES
   ```

3. **Get the score of a member in a sorted set:**

   ```bash
   ZSCORE myzset "member1"
   ```

4. **Remove a member from a sorted set:**

   ```bash
   ZREM myzset "member1"
   ```

### Transaction Operations

1. **Start a transaction:**

   ```bash
   MULTI
   ```

2. **Queue multiple commands:**

   ```bash
   SET key1 "value1"
   SET key2 "value2"
   ```

3. **Execute the transaction:**

   ```bash
   EXEC
   ```

These examples cover the basic operations you can perform with Redis using the Redis client. You can find more commands and detailed documentation on the [official Redis documentation page](https://redis.io/commands).

<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href=" "> </a>How to use a Redis client with Node JS for basic operations</b></summary><br>

To use Redis with Node.js, you need to install the `redis` package and then use it to perform basic operations. Below are the steps and examples to get you started:

### Step 1: Install Redis and Node.js

Ensure that you have Redis and Node.js installed on your machine. If not, follow the installation instructions provided in the previous messages.

### Step 2: Install the `redis` package

You can install the `redis` package using npm:

```bash
npm install redis
```

### Step 3: Create a Node.js Script

Create a JavaScript file (e.g., `app.js`) and use the following code to perform basic Redis operations:

```javascript
const redis = require('redis');

// Create a Redis client
const client = redis.createClient();

// Handle connection errors
client.on('error', (err) => {
  console.error('Error connecting to Redis', err);
});

// Perform basic operations
client.on('connect', () => {
  console.log('Connected to Redis');

  // Set a key-value pair
  client.set('mykey', 'Hello, Redis!', (err, reply) => {
    if (err) throw err;
    console.log(reply); // Output: OK

    // Get the value of the key
    client.get('mykey', (err, reply) => {
      if (err) throw err;
      console.log(reply); // Output: Hello, Redis!

      // Check if the key exists
      client.exists('mykey', (err, reply) => {
        if (err) throw err;
        console.log(reply); // Output: 1 (exists) or 0 (does not exist)

        // Delete the key
        client.del('mykey', (err, reply) => {
          if (err) throw err;
          console.log(reply); // Output: 1 (deleted) or 0 (does not exist)

          // Close the connection
          client.quit();
        });
      });
    });
  });
});
```

### Step 4: Run the Script

Run the script using Node.js:

```bash
node app.js
```

### Additional Operations

Here are some additional Redis operations you can perform using the Node.js Redis client:

1. **Increment a value:**

   ```javascript
   client.incr('mycounter', (err, reply) => {
     if (err) throw err;
     console.log(reply); // Output: incremented value
   });
   ```

2. **Push elements to a list:**

   ```javascript
   client.lpush('mylist', 'first', (err, reply) => {
     if (err) throw err;
     console.log(reply); // Output: new length of the list
   });

   client.lpush('mylist', 'second', (err, reply) => {
     if (err) throw err;
     console.log(reply); // Output: new length of the list
   });
   ```

3. **Get elements from a list:**

   ```javascript
   client.lrange('mylist', 0, -1, (err, reply) => {
     if (err) throw err;
     console.log(reply); // Output: list of elements
   });
   ```

4. **Add members to a set:**

   ```javascript
   client.sadd('myset', 'member1', (err, reply) => {
     if (err) throw err;
     console.log(reply); // Output: 1 (if new member added)
   });

   client.sadd('myset', 'member2', (err, reply) => {
     if (err) throw err;
     console.log(reply); // Output: 1 (if new member added)
   });
   ```

5. **Get members of a set:**

   ```javascript
   client.smembers('myset', (err, reply) => {
     if (err) throw err;
     console.log(reply); // Output: set of members
   });
   ```

6. **Add members with scores to a sorted set:**

   ```javascript
   client.zadd('myzset', 1, 'member1', (err, reply) => {
     if (err) throw err;
     console.log(reply); // Output: 1 (if new member added)
   });

   client.zadd('myzset', 2, 'member2', (err, reply) => {
     if (err) throw err;
     console.log(reply); // Output: 1 (if new member added)
   });
   ```

7. **Get members of a sorted set by score:**

   ```javascript
   client.zrange('myzset', 0, -1, 'WITHSCORES', (err, reply) => {
     if (err) throw err;
     console.log(reply); // Output: sorted set of members with scores
   });
   ```

These examples should help you get started with using Redis in your Node.js applications. If you have any specific requirements or encounter any issues, feel free to ask for further assistance!

<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href=" "> </a>How to store hash values in Redis</b></summary><br>

Storing hash values in Redis is useful when you need to manage objects or data structures with multiple fields. Redis hashes are a perfect data type for storing a collection of key-value pairs. Here's how to store and manage hash values in Redis using the Redis client for Node.js:

### Step 1: Install Redis and Node.js

Ensure you have Redis and Node.js installed on your machine.

### Step 2: Install the `redis` package

Install the Redis package using npm:

```bash
npm install redis
```

### Step 3: Create a Node.js Script

Create a JavaScript file (e.g., `hash_example.js`) and use the following code to perform hash operations:

```javascript
const redis = require('redis');

// Create a Redis client
const client = redis.createClient();

// Handle connection errors
client.on('error', (err) => {
  console.error('Error connecting to Redis', err);
});

// Perform hash operations
client.on('connect', () => {
  console.log('Connected to Redis');

  // Set fields in a hash
  client.hset('user:1000', 'name', 'John Doe', 'email', 'john.doe@example.com', 'age', '30', (err, reply) => {
    if (err) throw err;
    console.log(reply); // Output: 3 (number of fields that were added)

    // Get a specific field from the hash
    client.hget('user:1000', 'name', (err, reply) => {
      if (err) throw err;
      console.log(reply); // Output: John Doe

      // Get all fields and values from the hash
      client.hgetall('user:1000', (err, reply) => {
        if (err) throw err;
        console.log(reply); // Output: { name: 'John Doe', email: 'john.doe@example.com', age: '30' }

        // Increment a numeric field in the hash
        client.hincrby('user:1000', 'age', 1, (err, reply) => {
          if (err) throw err;
          console.log(reply); // Output: 31 (new value of the 'age' field)

          // Delete a specific field from the hash
          client.hdel('user:1000', 'email', (err, reply) => {
            if (err) throw err;
            console.log(reply); // Output: 1 (number of fields that were removed)

            // Check if a field exists in the hash
            client.hexists('user:1000', 'email', (err, reply) => {
              if (err) throw err;
              console.log(reply); // Output: 0 (field does not exist)

              // Close the connection
              client.quit();
            });
          });
        });
      });
    });
  });
});
```

### Step 4: Run the Script

Run the script using Node.js:

```bash
node hash_example.js
```

### Additional Hash Operations

Here are some additional hash operations you can perform using the Node.js Redis client:

1. **Set multiple fields in a hash using `hmset`:**

   ```javascript
   client.hmset('user:1001', {
     name: 'Jane Doe',
     email: 'jane.doe@example.com',
     age: '28'
   }, (err, reply) => {
     if (err) throw err;
     console.log(reply); // Output: OK
   });
   ```

2. **Get multiple fields from a hash using `hmget`:**

   ```javascript
   client.hmget('user:1001', 'name', 'email', (err, reply) => {
     if (err) throw err;
     console.log(reply); // Output: [ 'Jane Doe', 'jane.doe@example.com' ]
   });
   ```

3. **Get the number of fields in a hash using `hlen`:**

   ```javascript
   client.hlen('user:1001', (err, reply) => {
     if (err) throw err;
     console.log(reply); // Output: 3 (number of fields in the hash)
   });
   ```

4. **Get all field names in a hash using `hkeys`:**

   ```javascript
   client.hkeys('user:1001', (err, reply) => {
     if (err) throw err;
     console.log(reply); // Output: [ 'name', 'email', 'age' ]
   });
   ```

5. **Get all values in a hash using `hvals`:**

   ```javascript
   client.hvals('user:1001', (err, reply) => {
     if (err) throw err;
     console.log(reply); // Output: [ 'Jane Doe', 'jane.doe@example.com', '28' ]
   });
   ```

These examples demonstrate how to perform various hash operations in Redis using the Node.js Redis client. If you have any specific requirements or encounter any issues, feel free to ask for further assistance!

<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href=" "> </a>How to deal with async operations with Redis</b></summary><br>

Dealing with asynchronous operations in Node.js, including those involving Redis, requires using either callbacks, promises, or async/await. The `redis` client library supports both callbacks and promises. Here's how you can handle asynchronous operations with Redis in a Node.js application:

### Using Callbacks

Using callbacks is the traditional way to handle asynchronous operations in Node.js. Each Redis operation accepts a callback function that is executed once the operation is complete.

```javascript
const redis = require('redis');
const client = redis.createClient();

client.on('error', (err) => {
  console.error('Error connecting to Redis', err);
});

client.on('connect', () => {
  console.log('Connected to Redis');

  // Set a key-value pair
  client.set('mykey', 'Hello, Redis!', (err, reply) => {
    if (err) throw err;
    console.log(reply); // Output: OK

    // Get the value of the key
    client.get('mykey', (err, reply) => {
      if (err) throw err;
      console.log(reply); // Output: Hello, Redis!

      // Close the connection
      client.quit();
    });
  });
});
```

### Using Promises

The `redis` client supports promises out of the box. You can convert the client methods to return promises using `util.promisify` or by using a promise-based wrapper library like `async-redis`.

#### Using `util.promisify`

```javascript
const redis = require('redis');
const { promisify } = require('util');

const client = redis.createClient();

const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);

client.on('error', (err) => {
  console.error('Error connecting to Redis', err);
});

client.on('connect', async () => {
  console.log('Connected to Redis');

  try {
    await setAsync('mykey', 'Hello, Redis!');
    console.log('Key set');

    const value = await getAsync('mykey');
    console.log(value); // Output: Hello, Redis!

    // Close the connection
    client.quit();
  } catch (err) {
    console.error('Error:', err);
  }
});
```

#### Using `async-redis`

First, install `async-redis`:

```bash
npm install async-redis
```

Then use it in your code:

```javascript
const asyncRedis = require('async-redis');
const client = asyncRedis.createClient();

client.on('error', (err) => {
  console.error('Error connecting to Redis', err);
});

client.on('connect', async () => {
  console.log('Connected to Redis');

  try {
    await client.set('mykey', 'Hello, Redis!');
    console.log('Key set');

    const value = await client.get('mykey');
    console.log(value); // Output: Hello, Redis!

    // Close the connection
    client.quit();
  } catch (err) {
    console.error('Error:', err);
  }
});
```

### Using Async/Await

Async/await provides a cleaner and more readable way to work with asynchronous operations in modern JavaScript.

```javascript
const redis = require('redis');
const { promisify } = require('util');

const client = redis.createClient();

const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);

client.on('error', (err) => {
  console.error('Error connecting to Redis', err);
});

const run = async () => {
  try {
    await setAsync('mykey', 'Hello, Redis!');
    console.log('Key set');

    const value = await getAsync('mykey');
    console.log(value); // Output: Hello, Redis!

    // Close the connection
    client.quit();
  } catch (err) {
    console.error('Error:', err);
  }
};

client.on('connect', () => {
  console.log('Connected to Redis');
  run();
});
```

By using async/await, you can handle Redis operations in a more synchronous-looking manner, which often makes the code easier to read and maintain.

<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href=" "> </a>How to use Kue as a queue system</b></summary><br>

Kue is a priority job queue for Node.js backed by Redis. It provides a simple way to manage job queues with support for retries, job events, and job lifecycle management. Here's how to use Kue as a queue system:

### Step 1: Install Kue and Redis

First, you need to install Kue and Redis. Ensure Redis is installed and running on your machine. Then, install Kue using npm:

```bash
npm install kue
```

### Step 2: Create a Job Queue

Create a JavaScript file (e.g., `queue.js`) and set up Kue to create and process jobs.

```javascript
const kue = require('kue');
const queue = kue.createQueue();

// Create a job
const job = queue.create('email', {
  title: 'Welcome email for new user',
  to: 'user@example.com',
  template: 'welcome-email'
}).save((err) => {
  if (!err) console.log(`Job saved with id: ${job.id}`);
});

// Process jobs
queue.process('email', (job, done) => {
  sendEmail(job.data, done);
});

// Function to simulate sending an email
function sendEmail(data, done) {
  console.log(`Sending email to: ${data.to}`);
  console.log(`Using template: ${data.template}`);
  // Simulate async email sending with a timeout
  setTimeout(() => {
    console.log('Email sent!');
    done();
  }, 3000);
}
```

### Step 3: Run the Script

Run the script using Node.js:

```bash
node queue.js
```

### Step 4: Handling Job Events

Kue provides various events to monitor job lifecycle. You can handle these events to add more control and logging.

```javascript
const kue = require('kue');
const queue = kue.createQueue();

// Create a job
const job = queue.create('email', {
  title: 'Welcome email for new user',
  to: 'user@example.com',
  template: 'welcome-email'
}).save((err) => {
  if (!err) console.log(`Job saved with id: ${job.id}`);
});

// Process jobs
queue.process('email', (job, done) => {
  sendEmail(job.data, done);
});

// Function to simulate sending an email
function sendEmail(data, done) {
  console.log(`Sending email to: ${data.to}`);
  console.log(`Using template: ${data.template}`);
  // Simulate async email sending with a timeout
  setTimeout(() => {
    console.log('Email sent!');
    done();
  }, 3000);
}

// Job events
job.on('complete', () => {
  console.log('Job completed');
}).on('failed', (err) => {
  console.log('Job failed');
}).on('progress', (progress, data) => {
  console.log(`\r  job #${job.id} ${progress}% complete with data `, data);
});
```

### Step 5: Adding Job Retry Logic

You can configure jobs to retry on failure.

```javascript
const kue = require('kue');
const queue = kue.createQueue();

// Create a job
const job = queue.create('email', {
  title: 'Welcome email for new user',
  to: 'user@example.com',
  template: 'welcome-email'
})
.attempts(3) // Retry up to 3 times
.backoff({type: 'exponential'}) // Exponential backoff
.save((err) => {
  if (!err) console.log(`Job saved with id: ${job.id}`);
});

// Process jobs
queue.process('email', (job, done) => {
  sendEmail(job.data, done);
});

// Function to simulate sending an email
function sendEmail(data, done) {
  console.log(`Sending email to: ${data.to}`);
  console.log(`Using template: ${data.template}`);
  // Simulate async email sending with a timeout
  setTimeout(() => {
    console.log('Email sent!');
    done();
  }, 3000);
}

// Job events
job.on('complete', () => {
  console.log('Job completed');
}).on('failed', (err) => {
  console.log('Job failed');
}).on('progress', (progress, data) => {
  console.log(`\r  job #${job.id} ${progress}% complete with data `, data);
});
```

### Step 6: Monitoring Jobs with Kue UI

Kue also provides a built-in UI to monitor job queues. Install the Kue UI package:

```bash
npm install kue-ui
```

Then, set up the Kue UI in your script:

```javascript
const kue = require('kue');
const kueUi = require('kue-ui');
const express = require('express');
const app = express();

kueUi.setup({
  apiURL: '/api', // IMPORTANT: specify the api url
  baseURL: '/kue', // IMPORTANT: specify the base url
  updateInterval: 5000 // Optional: Fetches new data every 5000 ms
});

app.use('/api', kue.app);
app.use('/kue', kueUi.app);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

const queue = kue.createQueue();

queue.process('email', (job, done) => {
  sendEmail(job.data, done);
});

function sendEmail(data, done) {
  console.log(`Sending email to: ${data.to}`);
  console.log(`Using template: ${data.template}`);
  setTimeout(() => {
    console.log('Email sent!');
    done();
  }, 3000);
}

const job = queue.create('email', {
  title: 'Welcome email for new user',
  to: 'user@example.com',
  template: 'welcome-email'
}).save((err) => {
  if (!err) console.log(`Job saved with id: ${job.id}`);
});
```

Now, you can monitor your jobs by navigating to `http://localhost:3000/kue`.

These steps should help you get started with using Kue as a queue system in your Node.js application. If you need further assistance or have specific requirements, feel free to ask!

<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href=" "> </a>How to build a basic Express app interacting with a Redis server</b></summary><br>

Building a basic Express app that interacts with a Redis server involves setting up the Express framework, connecting to Redis, and performing basic operations such as setting and getting values. Here’s a step-by-step guide:

### Step 1: Install Dependencies

First, you need to install Express and Redis packages. Make sure Redis is installed and running on your machine.

```bash
npm install express redis
```

### Step 2: Set Up the Express Server

Create a JavaScript file (e.g., `app.js`) and set up the basic structure of an Express server.

```javascript
const express = require('express');
const redis = require('redis');

const app = express();
const port = 3000;

// Create a Redis client
const client = redis.createClient();

client.on('error', (err) => {
  console.error('Error connecting to Redis:', err);
});

client.on('connect', () => {
  console.log('Connected to Redis');
});

// Middleware to parse JSON bodies
app.use(express.json());

// Set a key-value pair in Redis
app.post('/set', (req, res) => {
  const { key, value } = req.body;

  client.set(key, value, (err, reply) => {
    if (err) {
      return res.status(500).send('Error setting value');
    }
    res.send(`Value set: ${reply}`);
  });
});

// Get a value by key from Redis
app.get('/get/:key', (req, res) => {
  const { key } = req.params;

  client.get(key, (err, reply) => {
    if (err) {
      return res.status(500).send('Error getting value');
    }
    if (reply === null) {
      return res.status(404).send('Key not found');
    }
    res.send(`Value: ${reply}`);
  });
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
```

### Step 3: Running the Express App

Run your Express app using Node.js:

```bash
node app.js
```

### Step 4: Test the API

You can use tools like Postman or curl to test the API endpoints.

#### Setting a Key-Value Pair

Use a POST request to set a value:

```bash
curl -X POST -H "Content-Type: application/json" -d '{"key":"myKey","value":"myValue"}' http://localhost:3000/set
```

#### Getting a Value by Key

Use a GET request to retrieve the value:

```bash
curl http://localhost:3000/get/myKey
```

### Additional Functionality

You can extend your Express app to include more Redis operations such as deleting keys, setting expiration times, or handling hashes.

#### Deleting a Key

```javascript
// Delete a key
app.delete('/delete/:key', (req, res) => {
  const { key } = req.params;

  client.del(key, (err, reply) => {
    if (err) {
      return res.status(500).send('Error deleting key');
    }
    if (reply === 0) {
      return res.status(404).send('Key not found');
    }
    res.send(`Key deleted: ${key}`);
  });
});
```

#### Setting an Expiration Time for a Key

```javascript
// Set a key with an expiration time
app.post('/setex', (req, res) => {
  const { key, value, seconds } = req.body;

  client.setex(key, seconds, value, (err, reply) => {
    if (err) {
      return res.status(500).send('Error setting value with expiration');
    }
    res.send(`Value set with expiration: ${reply}`);
  });
});
```

#### Handling Hashes

```javascript
// Set fields in a hash
app.post('/hashset', (req, res) => {
  const { key, field, value } = req.body;

  client.hset(key, field, value, (err, reply) => {
    if (err) {
      return res.status(500).send('Error setting hash value');
    }
    res.send(`Hash value set: ${reply}`);
  });
});

// Get a field from a hash
app.get('/hashget/:key/:field', (req, res) => {
  const { key, field } = req.params;

  client.hget(key, field, (err, reply) => {
    if (err) {
      return res.status(500).send('Error getting hash value');
    }
    if (reply === null) {
      return res.status(404).send('Field not found');
    }
    res.send(`Hash value: ${reply}`);
  });
});
```

### Complete Example

Here is the complete example with additional functionalities included:

```javascript
const express = require('express');
const redis = require('redis');

const app = express();
const port = 3000;

const client = redis.createClient();

client.on('error', (err) => {
  console.error('Error connecting to Redis:', err);
});

client.on('connect', () => {
  console.log('Connected to Redis');
});

app.use(express.json());

app.post('/set', (req, res) => {
  const { key, value } = req.body;

  client.set(key, value, (err, reply) => {
    if (err) {
      return res.status(500).send('Error setting value');
    }
    res.send(`Value set: ${reply}`);
  });
});

app.get('/get/:key', (req, res) => {
  const { key } = req.params;

  client.get(key, (err, reply) => {
    if (err) {
      return res.status(500).send('Error getting value');
    }
    if (reply === null) {
      return res.status(404).send('Key not found');
    }
    res.send(`Value: ${reply}`);
  });
});

app.delete('/delete/:key', (req, res) => {
  const { key } = req.params;

  client.del(key, (err, reply) => {
    if (err) {
      return res.status(500).send('Error deleting key');
    }
    if (reply === 0) {
      return res.status(404).send('Key not found');
    }
    res.send(`Key deleted: ${key}`);
  });
});

app.post('/setex', (req, res) => {
  const { key, value, seconds } = req.body;

  client.setex(key, seconds, value, (err, reply) => {
    if (err) {
      return res.status(500).send('Error setting value with expiration');
    }
    res.send(`Value set with expiration: ${reply}`);
  });
});

app.post('/hashset', (req, res) => {
  const { key, field, value } = req.body;

  client.hset(key, field, value, (err, reply) => {
    if (err) {
      return res.status(500).send('Error setting hash value');
    }
    res.send(`Hash value set: ${reply}`);
  });
});

app.get('/hashget/:key/:field', (req, res) => {
  const { key, field } = req.params;

  client.hget(key, field, (err, reply) => {
    if (err) {
      return res.status(500).send('Error getting hash value');
    }
    if (reply === null) {
      return res.status(404).send('Field not found');
    }
    res.send(`Hash value: ${reply}`);
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
```

This should give you a good starting point for building an Express app that interacts with a Redis server. If you have any further questions or need additional features, feel free to ask!

<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href=" "> </a>How to the build a basic Express app interacting with a Redis server and queue</b></summary><br>

Building a basic Express app that interacts with both a Redis server and a job queue system can be done using Kue for job queue management. Here's a step-by-step guide to set up an Express app with Redis and Kue:

### Step 1: Install Dependencies

First, install the required packages using npm:

```bash
npm install express redis kue
```

### Step 2: Set Up the Express Server with Redis and Kue

Create a JavaScript file (e.g., `app.js`) and set up the basic structure of an Express server, connecting to Redis and Kue.

```javascript
const express = require('express');
const redis = require('redis');
const kue = require('kue');

const app = express();
const port = 3000;

// Create a Redis client
const client = redis.createClient();

client.on('error', (err) => {
  console.error('Error connecting to Redis:', err);
});

client.on('connect', () => {
  console.log('Connected to Redis');
});

// Create a Kue job queue
const queue = kue.createQueue();

queue.on('error', (err) => {
  console.error('Error with the Kue queue:', err);
});

// Middleware to parse JSON bodies
app.use(express.json());

// Set a key-value pair in Redis
app.post('/set', (req, res) => {
  const { key, value } = req.body;

  client.set(key, value, (err, reply) => {
    if (err) {
      return res.status(500).send('Error setting value');
    }
    res.send(`Value set: ${reply}`);
  });
});

// Get a value by key from Redis
app.get('/get/:key', (req, res) => {
  const { key } = req.params;

  client.get(key, (err, reply) => {
    if (err) {
      return res.status(500).send('Error getting value');
    }
    if (reply === null) {
      return res.status(404).send('Key not found');
    }
    res.send(`Value: ${reply}`);
  });
});

// Create a job in the queue
app.post('/job', (req, res) => {
  const { type, data } = req.body;

  const job = queue.create(type, data)
    .save((err) => {
      if (!err) console.log(`Job saved with id: ${job.id}`);
      res.send(`Job created with id: ${job.id}`);
    });

  job.on('complete', () => {
    console.log(`Job ${job.id} completed`);
  }).on('failed', (err) => {
    console.log(`Job ${job.id} failed: ${err}`);
  }).on('progress', (progress) => {
    console.log(`Job ${job.id} ${progress}% complete`);
  });
});

// Process jobs from the queue
queue.process('email', (job, done) => {
  sendEmail(job.data, done);
});

// Function to simulate sending an email
function sendEmail(data, done) {
  console.log(`Sending email to: ${data.to}`);
  console.log(`Using template: ${data.template}`);
  // Simulate async email sending with a timeout
  setTimeout(() => {
    console.log('Email sent!');
    done();
  }, 3000);
}

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
```

### Step 3: Running the Express App

Run your Express app using Node.js:

```bash
node app.js
```

### Step 4: Test the API

You can use tools like Postman or curl to test the API endpoints.

#### Setting a Key-Value Pair in Redis

Use a POST request to set a value:

```bash
curl -X POST -H "Content-Type: application/json" -d '{"key":"myKey","value":"myValue"}' http://localhost:3000/set
```

#### Getting a Value by Key from Redis

Use a GET request to retrieve the value:

```bash
curl http://localhost:3000/get/myKey
```

#### Creating a Job in the Queue

Use a POST request to create a job:

```bash
curl -X POST -H "Content-Type: application/json" -d '{"type":"email","data":{"to":"user@example.com","template":"welcome-email"}}' http://localhost:3000/job
```

### Step 5: Monitoring Jobs with Kue UI (Optional)

Kue provides a built-in UI to monitor job queues. Install the Kue UI package:

```bash
npm install kue-ui
```

Set up the Kue UI in your script:

```javascript
const kueUi = require('kue-ui');
const express = require('express');
const app = express();
const kue = require('kue');

kueUi.setup({
  apiURL: '/api', // IMPORTANT: specify the api url
  baseURL: '/kue', // IMPORTANT: specify the base url
  updateInterval: 5000 // Optional: Fetches new data every 5000 ms
});

app.use('/api', kue.app);
app.use('/kue', kueUi.app);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

const queue = kue.createQueue();

// Other code remains the same
```

Now, you can monitor your jobs by navigating to `http://localhost:3000/kue`.

This should give you a good starting point for building an Express app that interacts with a Redis server and manages job queues with Kue. If you need further assistance or have specific requirements, feel free to ask!

<br><p align="center">※※※※※※※※※※※※</p><br>
</details>



<!--==================================================-->
<br>

## Requirements
- All of your code will be compiled/interpreted on Ubuntu 18.04, Node 12.x, and Redis 5.0.7
- All of your files should end with a new line
- A <code>README.md</code> file, at the root of the folder of the project, is mandatory
- Your code should use the <code>js</code> extension

<!--==================================================-->
<br>

## Required Files for the Project
<h3><code>package.json</code></h3>

<details>
<summary>
Click to show/hide file contents</summary>
<pre><code>
{
    "name": "queuing_system_in_js",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "lint": "./node_modules/.bin/eslint",
      "check-lint": "lint [0-9]*.js",
      "test": "./node_modules/.bin/mocha --require @babel/register --exit",
      "dev": "nodemon --exec babel-node --presets @babel/preset-env"
    },
    "author": "",
    "license": "ISC",
    "dependencies": {
      "chai-http": "^4.3.0",
      "express": "^4.17.1",
      "kue": "^0.11.6",
      "redis": "^2.8.0"
    },
    "devDependencies": {
      "@babel/cli": "^7.8.0",
      "@babel/core": "^7.8.0",
      "@babel/node": "^7.8.0",
      "@babel/preset-env": "^7.8.2",
      "@babel/register": "^7.8.0",
      "eslint": "^6.4.0",
      "eslint-config-airbnb-base": "^14.0.0",
      "eslint-plugin-import": "^2.18.2",
      "eslint-plugin-jest": "^22.17.0",
      "nodemon": "^2.0.2",
      "chai": "^4.2.0",
      "mocha": "^6.2.2",
      "request": "^2.88.0",
      "sinon": "^7.5.0"
    }
  }
</code>
</pre>
</details>

<h3><code>.babelrc</code></h3>

<details>
<summary>
Click to show/hide file contents
</summary>
<pre><code> 
{
  "presets": [
    "@babel/preset-env"
  ]
}
</code>
</pre>
</details>

<h3>and…</h3>

Don’t forget to run <code>$ npm install</code> when you have the <code>package.json</code>


<!--==================================================-->
<br>

## Tasks
<details>
<summary>

### 0. Install a redis instance
`mandatory`

File: [README.md](), [dump.rdb]()
</summary>

<p>Download, extract, and compile the latest stable Redis version (higher than 5.0.7 - <a href="https://redis.io/downloads/" target="_blank" title="https://redis.io/downloads/">https://redis.io/downloads/</a>):</p>

<pre><code>$ wget http://download.redis.io/releases/redis-6.0.10.tar.gz
$ tar xzf redis-6.0.10.tar.gz
$ cd redis-6.0.10
$ make
</code></pre>

<ul>
<li>Start Redis in the background with <code>src/redis-server</code></li>
</ul>

<pre><code>$ src/redis-server &amp;
</code></pre>

<ul>
<li>Make sure that the server is working with a ping <code>src/redis-cli ping</code></li>
</ul>

<pre><code>PONG
</code></pre>

<ul>
<li>Using the Redis client again, set the value <code>School</code> for the key <code>Holberton</code></li>
</ul>

<pre><code>127.0.0.1:[Port]&gt; set Holberton School
OK
127.0.0.1:[Port]&gt; get Holberton
"School"
</code></pre>

<ul>
<li><a href="https://github.com/codenvibes/alx-backend/blob/master/0x03-queuing_system_in_js/notes/How%20to%20kill%20the%20Redis%20server%20using%20its%20PID.md">Kill the server with the process id of the redis-server (hint: use <code>ps</code> and <code>grep</code>)</a></li>
</ul>

<pre><code>$ kill [PID_OF_Redis_Server]
</code></pre>


<p><a href="https://github.com/codenvibes/alx-backend/blob/master/0x03-queuing_system_in_js/notes/How%20to%20find%20the%20redis%20dump.rdb%20file%20on%20linux.md">Copy the <code>dump.rdb</code></a> from the <code>redis-5.0.7</code> directory into the root of the Queuing project.</p>


<p>Requirements:</p>

<ul>
<li>Running <code>get Holberton</code> in the client, should return <code>School</code></li>
</ul>


</details>

<details>
<summary>

### 1. Node Redis Client
`mandatory`

File: [0-redis_client.js]()
</summary>

<p>Install <a href="https://github.com/redis/node-redis" target="_blank" title="node_redis">node_redis</a> using npm</p>

<p>Using Babel and ES6, write a script named <code>0-redis_client.js</code>. It should connect to the Redis server running on your machine:</p>

<ul>
<li>It should log to the console the message <code>Redis client connected to the server</code> when the connection to Redis works correctly</li>
<li>It should log to the console the message <code>Redis client not connected to the server: ERROR_MESSAGE</code> when the connection to Redis does not work</li>
</ul>

<p><strong>Requirements:</strong></p>

<ul>
<li>To import the library, you need to use the keyword <code>import</code></li>
</ul>

<pre><code>bob@dylan:~$ ps ax | grep redis-server
 2070 pts/1    S+     0:00 grep --color=auto redis-server
bob@dylan:~$ 
bob@dylan:~$ npm run dev 0-redis_client.js 

&gt; queuing_system_in_js@1.0.0 dev /root
&gt; nodemon --exec babel-node --presets @babel/preset-env "0-redis_client.js"

[nodemon] 2.0.4
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `babel-node --presets @babel/preset-env 0-redis_client.js`
Redis client not connected to the server: Error: Redis connection to 127.0.0.1:6379 failed - connect ECONNREFUSED 127.0.0.1:6379
Redis client not connected to the server: Error: Redis connection to 127.0.0.1:6379 failed - connect ECONNREFUSED 127.0.0.1:6379
Redis client not connected to the server: Error: Redis connection to 127.0.0.1:6379 failed - connect ECONNREFUSED 127.0.0.1:6379
^C
bob@dylan:~$ 
bob@dylan:~$ ./src/redis-server &gt; /dev/null 2&gt;&amp;1 &amp;
[1] 2073
bob@dylan:~$ ps ax | grep redis-server
 2073 pts/0    Sl     0:00 ./src/redis-server *:6379
 2078 pts/1    S+     0:00 grep --color=auto redis-server
bob@dylan:~$
bob@dylan:~$ npm run dev 0-redis_client.js 

&gt; queuing_system_in_js@1.0.0 dev /root
&gt; nodemon --exec babel-node --presets @babel/preset-env "0-redis_client.js"

[nodemon] 2.0.4
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `babel-node --presets @babel/preset-env 0-redis_client.js`
Redis client connected to the server
^C
bob@dylan:~$
</code></pre>


</details>

<details>
<summary>

### 2. Node Redis client and basic operations
`mandatory`

File: [1-redis_op.js]()
</summary>

<p>In a file <code>1-redis_op.js</code>, copy the code you previously wrote (<code>0-redis_client.js</code>). </p>

<p>Add two functions:</p>

<ul>
<li><code>setNewSchool</code>:

<ul>
<li>It accepts two arguments <code>schoolName</code>, and <code>value</code>. </li>
<li>It should set in Redis the value for the key <code>schoolName</code></li>
<li>It should display a confirmation message using <code>redis.print</code></li>
</ul></li>
<li><code>displaySchoolValue</code>:

<ul>
<li>It accepts one argument <code>schoolName</code>. </li>
<li>It should log to the console the value for the key passed as argument</li>
</ul></li>
</ul>

<p>At the end of the file, call:</p>

<ul>
<li><code>displaySchoolValue('Holberton');</code></li>
<li><code>setNewSchool('HolbertonSanFrancisco', '100');</code></li>
<li><code>displaySchoolValue('HolbertonSanFrancisco');</code></li>
</ul>

<p><strong>Requirements:</strong></p>

<ul>
<li>Use callbacks for any of the operation, we will look at async operations later</li>
</ul>

<pre><code>bob@dylan:~$ npm run dev 1-redis_op.js 

&gt; queuing_system_in_js@1.0.0 dev /root
&gt; nodemon --exec babel-node --presets @babel/preset-env "1-redis_op.js"

[nodemon] 2.0.4
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `babel-node --presets @babel/preset-env 1-redis_op.js`
Redis client connected to the server
School
Reply: OK
100
^C

bob@dylan:~$
</code></pre>


</details>

<details>
<summary>

### 3. Node Redis client and async operations
`mandatory`

File: [2-redis_op_async.js]()
</summary>

<p>In a file <code>2-redis_op_async.js</code>, let’s copy the code from the previous exercise (<code>1-redis_op.js</code>)</p>

<p>Using <code>promisify</code>, modify the function <code>displaySchoolValue</code> to use ES6 <code>async / await</code></p>

<p>Same result as <code>1-redis_op.js</code></p>

<pre><code>bob@dylan:~$ npm run dev 2-redis_op_async.js

&gt; queuing_system_in_js@1.0.0 dev /root
&gt; nodemon --exec babel-node --presets @babel/preset-env "2-redis_op_async.js"

[nodemon] 2.0.4
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `babel-node --presets @babel/preset-env 2-redis_op_async.js`
Redis client connected to the server
School
Reply: OK
100
^C

bob@dylan:~$
</code></pre>


</details>

<details>
<summary>

### 4. Node Redis client and advanced operations
`mandatory`

File: [4-redis_advanced_op.js]()
</summary>

<p>In a file named <code>4-redis_advanced_op.js</code>, let’s use the client to store a hash value</p>

### Create Hash:

<p>Using <code>hset</code>, let’s store the following:</p>

<ul>
<li>The key of the hash should be <code>HolbertonSchools</code></li>
<li>It should have a value for:

<ul>
<li><code>Portland=50</code></li>
<li><code>Seattle=80</code></li>
<li><code>New York=20</code></li>
<li><code>Bogota=20</code></li>
<li><code>Cali=40</code></li>
<li><code>Paris=2</code></li>
</ul></li>
<li>Make sure you use <code>redis.print</code> for each <code>hset</code></li>
</ul>

### Display Hash:

<p>Using <code>hgetall</code>, display the object stored in Redis. It should return the following:</p>

<p><strong>Requirements:</strong></p>

<ul>
<li>Use callbacks for any of the operation, we will look at async operations later</li>
</ul>

<pre><code>bob@dylan:~$ npm run dev 4-redis_advanced_op.js 

&gt; queuing_system_in_js@1.0.0 dev /root
&gt; nodemon --exec babel-node --presets @babel/preset-env "4-redis_advanced_op.js"

[nodemon] 2.0.4
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `babel-node --presets @babel/preset-env 4-redis_advanced_op.js`
Redis client connected to the server
Reply: 1
Reply: 1
Reply: 1
Reply: 1
Reply: 1
Reply: 1
{
  Portland: '50',
  Seattle: '80',
  'New York': '20',
  Bogota: '20',
  Cali: '40',
  Paris: '2'
}
^C
bob@dylan:~$
</code></pre>


</details>

<details>
<summary>

### 5. Node Redis client publisher and subscriber
`mandatory`

File: [5-subscriber.js](), [5-publisher.js]()
</summary>

<p>In a file named <code>5-subscriber.js</code>, create a redis client:</p>

<ul>
<li>On connect, it should log the message <code>Redis client connected to the server</code></li>
<li>On error, it should log the message <code>Redis client not connected to the server: ERROR MESSAGE</code></li>
<li>It should subscribe to the channel <code>holberton school channel</code></li>
<li>When it receives message on the channel <code>holberton school channel</code>, it should log the message to the console</li>
<li>When the message is <code>KILL_SERVER</code>, it should unsubscribe and quit</li>
</ul>

<p>In a file named <code>5-publisher.js</code>, create a redis client:</p>

<ul>
<li>On connect, it should log the message <code>Redis client connected to the server</code></li>
<li>On error, it should log the message <code>Redis client not connected to the server: ERROR MESSAGE</code></li>
<li>Write a function named <code>publishMessage</code>:

<ul>
<li>It will take two arguments: <code>message</code> (string), and <code>time</code> (integer - in ms)</li>
<li>After <code>time</code> millisecond:

<ul>
<li>The function should log to the console <code>About to send MESSAGE</code></li>
<li>The function should publish to the channel <code>holberton school channel</code>, the message passed in argument after the time passed in arguments</li>
</ul></li>
</ul></li>
<li>At the end of the file, call:</li>
</ul>

<pre><code>publishMessage("Holberton Student #1 starts course", 100);
publishMessage("Holberton Student #2 starts course", 200);
publishMessage("KILL_SERVER", 300);
publishMessage("Holberton Student #3 starts course", 400);
</code></pre>

<p><strong>Requirements:</strong></p>

<ul>
<li>You only need one Redis server to execute the program</li>
<li>You will need to have two node processes to run each script at the same time</li>
</ul>

<p><strong>Terminal 1:</strong></p>

<pre><code>bob@dylan:~$ npm run dev 5-subscriber.js 

&gt; queuing_system_in_js@1.0.0 dev /root
&gt; nodemon --exec babel-node --presets @babel/preset-env "5-subscriber.js"

[nodemon] 2.0.4
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `babel-node --presets @babel/preset-env 5-subscriber.js`
Redis client connected to the server
</code></pre>

<p><strong>Terminal 2:</strong></p>

<pre><code>bob@dylan:~$ npm run dev 5-publisher.js 

&gt; queuing_system_in_js@1.0.0 dev /root
&gt; nodemon --exec babel-node --presets @babel/preset-env "5-publisher.js"

[nodemon] 2.0.4
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `babel-node --presets @babel/preset-env 5-publisher.js`
Redis client connected to the server
About to send Holberton Student #1 starts course
About to send Holberton Student #2 starts course
About to send KILL_SERVER
About to send Holberton Student #3 starts course
^C
bob@dylan:~$ 
</code></pre>

<p><strong>And in the same time in Terminal 1:</strong></p>

<pre><code>Redis client connected to the server
Holberton Student #1 starts course
Holberton Student #2 starts course
KILL_SERVER
[nodemon] clean exit - waiting for changes before restart
^C
bob@dylan:~$ 
</code></pre>

<p>Now you have a basic Redis-based queuing system where you have a process to generate job and a second one to process it. These 2 processes can be in 2 different servers, which we also call “background workers”.</p>


</details>

<details>
<summary>

### 6. Create the Job creator
`mandatory`

File: [6-job_creator.js]()
</summary>

<p>In a file named <code>6-job_creator.js</code>:</p>

<ul>
<li>Create a queue with <code>Kue</code></li>
<li>Create an object containing the Job data with the following format:</li>
</ul>

<pre><code>{
  phoneNumber: string,
  message: string,
}
</code></pre>

<ul>
<li>Create a queue named <code>push_notification_code</code>, and create a job with the object created before</li>
<li>When the job is created without error, log to the console <code>Notification job created: JOB ID</code></li>
<li>When the job is completed, log to the console <code>Notification job completed</code></li>
<li>When the job is failing, log to the console <code>Notification job failed</code></li>
</ul>

<pre><code>bob@dylan:~$ npm run dev 6-job_creator.js 

&gt; queuing_system_in_js@1.0.0 dev /root
&gt; nodemon --exec babel-node --presets @babel/preset-env "6-job_creator.js"

[nodemon] 2.0.4
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `babel-node --presets @babel/preset-env 6-job_creator.js`
Notification job created: 1

</code></pre>

<p>Nothing else will happen - to process the job, go to the next task!</p>

<p>If you execute multiple time this file, you will see the <code>JOB ID</code> increasing - it means you are storing new job to process…</p>


</details>

<details>
<summary>

### 7. Create the Job processor
`mandatory`

File: [6-job_processor.js]()
</summary>

<p>In a file named <code>6-job_processor.js</code>:</p>

<ul>
<li>Create a queue with <code>Kue</code></li>
<li>Create a function named <code>sendNotification</code>:

<ul>
<li>It will take two arguments <code>phoneNumber</code> and <code>message</code></li>
<li>It will log to the console <code>Sending notification to PHONE_NUMBER, with message: MESSAGE</code></li>
</ul></li>
<li>Write the queue process that will listen to new jobs on <code>push_notification_code</code>:

<ul>
<li>Every new job should call the <code>sendNotification</code> function with the phone number and the message contained within the job data</li>
</ul></li>
</ul>

<p><strong>Requirements:</strong></p>

<ul>
<li>You only need one Redis server to execute the program</li>
<li>You will need to have two node processes to run each script at the same time</li>
<li>You muse use <code>Kue</code> to set up the queue</li>
</ul>

<p><strong>Terminal 2:</strong></p>

<pre><code>bob@dylan:~$ npm run dev 6-job_processor.js 

&gt; queuing_system_in_js@1.0.0 dev /root
&gt; nodemon --exec babel-node --presets @babel/preset-env "6-job_processor.js"

[nodemon] 2.0.4
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `babel-node --presets @babel/preset-env 6-job_processor.js`
Sending notification to 4153518780, with message: This is the code to verify your account

</code></pre>

<p><strong>Terminal 1:</strong> let’s queue a new job!</p>

<pre><code>bob@dylan:~$ npm run dev 6-job_creator.js 

&gt; queuing_system_in_js@1.0.0 dev /root
&gt; nodemon --exec babel-node --presets @babel/preset-env "6-job_creator.js"

[nodemon] 2.0.4
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `babel-node --presets @babel/preset-env 6-job_creator.js`
Notification job created: 2

</code></pre>

<p><strong>And in the same time in Terminal 2:</strong></p>

<pre><code>Sending notification to 4153518780, with message: This is the code to verify your account
</code></pre>

<p>BOOM! same as <code>5-subscriber.js</code> and <code>5-publisher.js</code> but with a module to manage jobs.</p>


</details>

<details>
<summary>

### 8. Track progress and errors with Kue: Create the Job creator
`mandatory`

File: [7-job_creator.js]()
</summary>

<p>In a file named <code>7-job_creator.js</code>:</p>

<p>Create an array <code>jobs</code> with the following data inside:</p>

<pre><code>const jobs = [
  {
    phoneNumber: '4153518780',
    message: 'This is the code 1234 to verify your account'
  },
  {
    phoneNumber: '4153518781',
    message: 'This is the code 4562 to verify your account'
  },
  {
    phoneNumber: '4153518743',
    message: 'This is the code 4321 to verify your account'
  },
  {
    phoneNumber: '4153538781',
    message: 'This is the code 4562 to verify your account'
  },
  {
    phoneNumber: '4153118782',
    message: 'This is the code 4321 to verify your account'
  },
  {
    phoneNumber: '4153718781',
    message: 'This is the code 4562 to verify your account'
  },
  {
    phoneNumber: '4159518782',
    message: 'This is the code 4321 to verify your account'
  },
  {
    phoneNumber: '4158718781',
    message: 'This is the code 4562 to verify your account'
  },
  {
    phoneNumber: '4153818782',
    message: 'This is the code 4321 to verify your account'
  },
  {
    phoneNumber: '4154318781',
    message: 'This is the code 4562 to verify your account'
  },
  {
    phoneNumber: '4151218782',
    message: 'This is the code 4321 to verify your account'
  }
];
</code></pre>

<p>After this array created:</p>

<ul>
<li>Create a queue with <code>Kue</code></li>
<li>Write a loop that will go through the array <code>jobs</code> and for each object:

<ul>
<li>Create a new job to the queue <code>push_notification_code_2</code> with the current object</li>
<li>If there is no error, log to the console <code>Notification job created: JOB_ID</code></li>
<li>On the job completion, log to the console <code>Notification job JOB_ID completed</code></li>
<li>On the job failure, log to the console <code>Notification job JOB_ID failed: ERROR</code></li>
<li>On the job progress, log to the console <code>Notification job JOB_ID PERCENTAGE% complete</code></li>
</ul></li>
</ul>

<p><strong>Terminal 1</strong>:</p>

<pre><code>bob@dylan:~$ npm run dev 7-job_creator.js 

&gt; queuing_system_in_js@1.0.0 dev /root
&gt; nodemon --exec babel-node --presets @babel/preset-env "7-job_creator.js"

[nodemon] 2.0.4
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `babel-node --presets @babel/preset-env 7-job_creator.js`
Notification job created: 39
Notification job created: 40
Notification job created: 41
Notification job created: 42
Notification job created: 43
Notification job created: 44
Notification job created: 45
Notification job created: 46
Notification job created: 47
Notification job created: 48
Notification job created: 49

</code></pre>


</details>

<details>
<summary>

### 9. Track progress and errors with Kue: Create the Job processor
`mandatory`

File: [7-job_processor.js]()
</summary>

<p>In a file named <code>7-job_processor.js</code>:</p>

<p>Create an array that will contain the blacklisted phone numbers. Add in it <code>4153518780</code> and <code>4153518781</code> - these 2 numbers will be blacklisted by our jobs processor.</p>

<p>Create a function <code>sendNotification</code> that takes 4 arguments: <code>phoneNumber</code>, <code>message</code>, <code>job</code>, and <code>done</code>:</p>

<ul>
<li>When the function is called, track the progress of the <code>job</code> of <code>0</code> out of <code>100</code></li>
<li>If <code>phoneNumber</code> is included in the “blacklisted array”, fail the job with an <code>Error</code> object and the message: <code>Phone number PHONE_NUMBER is blacklisted</code></li>
<li>Otherwise: 

<ul>
<li>Track the progress to 50%</li>
<li>Log to the console <code>Sending notification to PHONE_NUMBER, with message: MESSAGE</code></li>
</ul></li>
</ul>

<p>Create a queue with <code>Kue</code> that will proceed job of the queue <code>push_notification_code_2</code> with two jobs at a time.</p>

<p><strong>Requirements:</strong></p>

<ul>
<li>You only need one Redis server to execute the program</li>
<li>You will need to have two node processes to run each script at the same time</li>
<li>You muse use <code>Kue</code> to set up the queue</li>
<li>Executing the jobs list should log to the console the following:</li>
</ul>

<p><strong>Terminal 2:</strong></p>

<pre><code>bob@dylan:~$ npm run dev 7-job_processor.js 

&gt; queuing_system_in_js@1.0.0 dev /root
&gt; nodemon --exec babel-node --presets @babel/preset-env "7-job_processor.js"

[nodemon] 2.0.4
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `babel-node --presets @babel/preset-env 7-job_processor.js`
Sending notification to 4153518743, with message: This is the code 4321 to verify your account
Sending notification to 4153538781, with message: This is the code 4562 to verify your account
Sending notification to 4153118782, with message: This is the code 4321 to verify your account
Sending notification to 4153718781, with message: This is the code 4562 to verify your account
Sending notification to 4159518782, with message: This is the code 4321 to verify your account
Sending notification to 4158718781, with message: This is the code 4562 to verify your account
Sending notification to 4153818782, with message: This is the code 4321 to verify your account
Sending notification to 4154318781, with message: This is the code 4562 to verify your account
Sending notification to 4151218782, with message: This is the code 4321 to verify your account

</code></pre>

<p><strong>And in the same time in terminal 1:</strong></p>

<pre><code>...
Notification job #39 0% complete
Notification job #40 0% complete
Notification job #39 failed: Phone number 4153518780 is blacklisted
Notification job #40 failed: Phone number 4153518781 is blacklisted
Notification job #41 0% complete
Notification job #41 50% complete
Notification job #42 0% complete
Notification job #42 50% complete
Notification job #41 completed
Notification job #42 completed
Notification job #43 0% complete
Notification job #43 50% complete
Notification job #44 0% complete
Notification job #44 50% complete
Notification job #43 completed
Notification job #44 completed
Notification job #45 0% complete
Notification job #45 50% complete
Notification job #46 0% complete
Notification job #46 50% complete
Notification job #45 completed
Notification job #46 completed
Notification job #47 0% complete
Notification job #47 50% complete
Notification job #48 0% complete
Notification job #48 50% complete
Notification job #47 completed
Notification job #48 completed
Notification job #49 0% complete
Notification job #49 50% complete
Notification job #49 completed
</code></pre>


</details>

<details>
<summary>

### 10. Writing the job creation function
`mandatory`

File: [8-job.js]()
</summary>

<p>In a file named <code>8-job.js</code>, create a function named <code>createPushNotificationsJobs</code>:</p>

<ul>
<li>It takes into argument <code>jobs</code> (array of objects), and <code>queue</code> (<code>Kue</code> queue)</li>
<li>If <code>jobs</code> is not an array, it should throw an <code>Error</code> with message: <code>Jobs is not an array</code></li>
<li>For each job in <code>jobs</code>, create a job in the queue <code>push_notification_code_3</code></li>
<li>When a job is created, it should log to the console <code>Notification job created: JOB_ID</code></li>
<li>When a job is complete, it should log to the console <code>Notification job JOB_ID completed</code></li>
<li>When a job is failed, it should log to the console <code>Notification job JOB_ID failed: ERROR</code></li>
<li>When a job is making progress, it should log to the console <code>Notification job JOB_ID PERCENT% complete</code></li>
</ul>

<pre><code>bob@dylan:~$ cat 8-job-main.js 
import kue from 'kue';

import createPushNotificationsJobs from './8-job.js';

const queue = kue.createQueue();

const list = [
    {
        phoneNumber: '4153518780',
    message: 'This is the code 1234 to verify your account'
    }
];
createPushNotificationsJobs(list, queue);

bob@dylan:~$
bob@dylan:~$ npm run dev 8-job-main.js 

&gt; queuing_system_in_js@1.0.0 dev /root
&gt; nodemon --exec babel-node --presets @babel/preset-env "8-job-main.js"

[nodemon] 2.0.4
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `babel-node --presets @babel/preset-env 8-job-main.js`
Notification job created: 51

</code></pre>


</details>

<details>
<summary>

### 11. Writing the test for job creation
`mandatory`

File: [8-job.test.js]()
</summary>

<p>Now that you created a job creator, let’s add tests:</p>

<ul>
<li>Import the function <code>createPushNotificationsJobs</code></li>
<li>Create a queue with <code>Kue</code></li>
<li>Write a test suite for the <code>createPushNotificationsJobs</code> function:

<ul>
<li>Use <code>queue.testMode</code> to validate which jobs are inside the queue</li>
<li>etc.</li>
</ul></li>
</ul>

<p><strong>Requirements:</strong></p>

<ul>
<li>Make sure to enter the test mode without processing the jobs before executing the tests</li>
<li>Make sure to clear the queue and exit the test mode after executing the tests</li>
</ul>

<pre><code>bob@dylan:~$ npm test 8-job.test.js 

&gt; queuing_system_in_js@1.0.0 test /root
&gt; mocha --require @babel/register --exit "8-job.test.js"



  createPushNotificationsJobs
    ✓ display a error message if jobs is not an array
Notification job created: 1
Notification job created: 2
    ✓ create two new jobs to the queue
...

  123 passing (417ms)

</code></pre>


</details>

<details>
<summary>

### 12. In stock?
`mandatory`

File: [9-stock.js]()
</summary>

### Data

<p>Create an array <code>listProducts</code> containing the list of the following products:</p>

<ul>
<li>Id: 1, name: <code>Suitcase 250</code>, price: 50, stock: 4</li>
<li>Id: 2, name: <code>Suitcase 450</code>, price: 100, stock: 10</li>
<li>Id: 3, name: <code>Suitcase 650</code>, price: 350, stock: 2</li>
<li>Id: 4, name: <code>Suitcase 1050</code>, price: 550, stock: 5</li>
</ul>

### Data access

<p>Create a function named <code>getItemById</code>:</p>

<ul>
<li>It will take <code>id</code> as argument</li>
<li>It will return the item from <code>listProducts</code> with the same id</li>
</ul>

### Server

<p>Create an <code>express</code> server listening on the port 1245. (You will start it via: <code>npm run dev 9-stock.js</code>)</p>

### Products

<p>Create the route <code>GET /list_products</code> that will return the list of every available product with the following JSON format:</p>

<pre><code>bob@dylan:~$ curl localhost:1245/list_products ; echo ""
[{"itemId":1,"itemName":"Suitcase 250","price":50,"initialAvailableQuantity":4},{"itemId":2,"itemName":"Suitcase 450","price":100,"initialAvailableQuantity":10},{"itemId":3,"itemName":"Suitcase 650","price":350,"initialAvailableQuantity":2},{"itemId":4,"itemName":"Suitcase 1050","price":550,"initialAvailableQuantity":5}]
bob@dylan:~$ 
</code></pre>

### In stock in Redis

<p>Create a client to connect to the Redis server:</p>

<ul>
<li>Write a function <code>reserveStockById</code> that will take <code>itemId</code> and <code>stock</code> as arguments:

<ul>
<li>It will set in Redis the stock for the key <code>item.ITEM_ID</code></li>
</ul></li>
<li>Write an async function <code>getCurrentReservedStockById</code>, that will take <code>itemId</code> as an argument: 

<ul>
<li>It will return the reserved stock for a specific item</li>
</ul></li>
</ul>

### Product detail

<p>Create the route <code>GET /list_products/:itemId</code>, that will return the current product and the current available stock (by using <code>getCurrentReservedStockById</code>) with the following JSON format:</p>

<pre><code>bob@dylan:~$ curl localhost:1245/list_products/1 ; echo ""
{"itemId":1,"itemName":"Suitcase 250","price":50,"initialAvailableQuantity":4,"currentQuantity":4}
bob@dylan:~$ 
</code></pre>

<p>If the item does not exist, it should return:</p>

<pre><code>bob@dylan:~$ curl localhost:1245/list_products/12 ; echo ""
{"status":"Product not found"}
bob@dylan:~$ 
</code></pre>

### Reserve a product

<p>Create the route <code>GET /reserve_product/:itemId</code>:</p>

<ul>
<li>If the item does not exist, it should return:</li>
</ul>

<pre><code>bob@dylan:~$ curl localhost:1245/reserve_product/12 ; echo ""
{"status":"Product not found"}
bob@dylan:~$ 
</code></pre>

<ul>
<li>If the item exists, it should check that there is at least one stock available. If not it should return:</li>
</ul>

<pre><code>bob@dylan:~$ curl localhost:1245/reserve_product/1 ; echo ""
{"status":"Not enough stock available","itemId":1}
bob@dylan:~$ 
</code></pre>

<ul>
<li>If there is enough stock available, it should reserve one item (by using <code>reserveStockById</code>), and return:</li>
</ul>

<pre><code>bob@dylan:~$ curl localhost:1245/reserve_product/1 ; echo ""
{"status":"Reservation confirmed","itemId":1}
bob@dylan:~$ 
</code></pre>

<p><strong>Requirements:</strong></p>

<ul>
<li>Make sure to use <code>promisify</code> with Redis</li>
<li>Make sure to use the <code>await</code>/<code>async</code> keyword to get the value from Redis</li>
<li>Make sure the format returned by the web application is always JSON and not text</li>
</ul>

</details>

<details>
<summary>

### 13. Can I have a seat?
`#advanced`

File: [100-seat.js]()
</summary>

### Redis

<p>Create a Redic client:</p>

<ul>
<li>Create a function <code>reserveSeat</code>, that will take into argument <code>number</code>, and set the key <code>available_seats</code> with the number</li>
<li>Create a function <code>getCurrentAvailableSeats</code>, it will return the current number of available seats (by using <code>promisify</code> for Redis)</li>
<li>When launching the application, set the number of available to 50</li>
<li>Initialize the boolean <code>reservationEnabled</code> to <code>true</code> - it will be turn to <code>false</code> when no seat will be available</li>
</ul>

### `Kue` queue

<p>Create a <code>Kue</code> queue</p>

### Server

<p>Create an express server listening on the port 1245. (You will start it via: <code>npm run dev 100-seat.js</code>)</p>

<p>Add the route <code>GET /available_seats</code> that returns the number of seat available:</p>

<pre><code>bob@dylan:~$ curl localhost:1245/available_seats ; echo ""
{"numberOfAvailableSeats":"50"}
bob@dylan:~$ 
</code></pre>

<p>Add the route <code>GET /reserve_seat</code> that:</p>

<ul>
<li>Returns <code>{ "status": "Reservation are blocked" }</code> if <code>reservationEnabled</code> is <code>false</code></li>
<li>Creates and queues a job in the queue <code>reserve_seat</code>:

<ul>
<li>Save the job and return:

<ul>
<li><code>{ "status": "Reservation in process" }</code> if no error</li>
<li>Otherwise: <code>{ "status": "Reservation failed" }</code></li>
</ul></li>
<li>When the job is completed, print in the console: <code>Seat reservation job JOB_ID completed</code></li>
<li>When the job failed, print in the console: <code>Seat reservation job JOB_ID failed: ERROR_MESSAGE</code></li>
</ul></li>
</ul>

<pre><code>bob@dylan:~$ curl localhost:1245/reserve_seat ; echo ""
{"status":"Reservation in process"}
bob@dylan:~$ 
</code></pre>

<p>Add the route <code>GET /process</code> that:</p>

<ul>
<li>Returns <code>{ "status": "Queue processing" }</code> just after:</li>
<li>Process the queue <code>reserve_seat</code> (async):

<ul>
<li>Decrease the number of seat available by using <code>getCurrentAvailableSeats</code> and <code>reserveSeat</code></li>
<li>If the new number of available seats is equal to 0, set <code>reservationEnabled</code> to false</li>
<li>If the new number of available seats is more or equal than 0, the job is successful</li>
<li>Otherwise, fail the job with an <code>Error</code> with the message <code>Not enough seats available</code></li>
</ul></li>
</ul>

<pre><code>bob@dylan:~$ curl localhost:1245/process ; echo ""
{"status":"Queue processing"}
bob@dylan:~$ 
bob@dylan:~$ curl localhost:1245/available_seats ; echo ""
{"numberOfAvailableSeats":"49"}
bob@dylan:~$ 
</code></pre>

<p>and in the server terminal:</p>

<pre><code>Seat reservation job 52 completed
</code></pre>

<p>and you can reserve all seats:</p>

<pre><code>bob@dylan:~$ for n in {1..50}; do curl localhost:1245/reserve_seat ; echo ""; done
{"status":"Reservation in process"}
{"status":"Reservation in process"}
...
{"status":"Reservation in process"}
{"status":"Reservation in process"}
{"status":"Reservation in process"}
{"status":"Reservation are blocked"}
{"status":"Reservation are blocked"}
{"status":"Reservation are blocked"}
bob@dylan:~$ 
</code></pre>

<p><strong>Requirements:</strong></p>

<ul>
<li>Make sure to use <code>promisify</code> with Redis</li>
<li>Make sure to use the <code>await</code>/<code>async</code> keyword to get the value from Redis</li>
<li>Make sure the format returned by the web application is always JSON and not text</li>
<li>Make sure that only the allowed amount of seats can be reserved</li>
<li>Make sure that the main route is displaying the right number of seats</li>
</ul>


</details>

