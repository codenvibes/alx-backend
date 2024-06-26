<h1 align="center"><b>0X01. CACHING</b></h1>
<div align="center"><code>Back-end</code></div>

<!-- <br>
<hr>
<h3><a href=>Notes</a></h3>
<hr> -->


<!--==================================================-->
<br>

## Background Context
In this project, you learn different caching algorithms. 


<!--==================================================-->
<br>

## Resources
<details>
<summary><b><a href="https://en.wikipedia.org/wiki/Cache_replacement_policies#First_In_First_Out_%28FIFO%29">Cache replacement policies - FIFO</a></b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href="https://en.wikipedia.org/wiki/Cache_replacement_policies#Last_In_First_Out_%28LIFO%29">Cache replacement policies - LIFO</a></b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href="https://en.wikipedia.org/wiki/Cache_replacement_policies#Least_Recently_Used_%28LRU%29">Cache replacement policies - LRU</a></b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href="https://en.wikipedia.org/wiki/Cache_replacement_policies#Most_Recently_Used_%28MRU%29Q">Cache replacement policies - MRU</a></b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href="en.wikipedia.org/wiki/Cache_replacement_policies#Least-Frequently_Used_%28LFU%29">Cache replacement policies - LFU</a></b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>



<!--==================================================-->
<br>

## Learning Objectives
<h3>General</h3>

<details>
<summary><b><a href=" "> </a>What a caching system is</b></summary><br>

A caching system is a mechanism for temporarily storing copies of data to reduce the time and resources required to retrieve it. The primary purpose of caching is to improve performance and efficiency by reducing latency and the load on a primary data source, such as a database or an external API.

### Example Scenario: Web Application

Consider a web application that serves dynamic content from a database. Without caching, each user request would require a query to the database, leading to high latency and significant load on the database server. By implementing a caching system, the application can store the results of common queries in memory. When a user makes a request, the application first checks the cache:

1. **Cache Hit**: If the requested data is found in the cache, it is returned immediately, resulting in faster response times and reduced load on the database.
2. **Cache Miss**: If the data is not in the cache, the application queries the database, returns the data to the user, and stores a copy in the cache for future requests.

### How a Caching System Works

1. **Cache Storage**: A cache is typically stored in fast-access memory (RAM) or on a fast-access disk. This allows for quick retrieval of data.
2. **Cache Keys**: Data is stored in the cache using a key-value pair system. The key is a unique identifier for the data, and the value is the actual data being cached.
3. **Cache Population**: Data can be added to the cache in several ways:
   - **Read-Through**: Data is fetched from the primary source and placed in the cache on the first request.
   - **Write-Through**: Data is written to both the cache and the primary data source simultaneously.
   - **Lazy Loading**: Data is only added to the cache when it is requested and not found in the cache.
4. **Cache Expiration**: Cached data is usually set to expire after a certain period to ensure that stale data is not served. This can be managed using time-to-live (TTL) settings.
5. **Cache Eviction**: When the cache reaches its storage limit, some data needs to be removed. Eviction policies determine which data is removed, such as Least Recently Used (LRU), First In First Out (FIFO), or Least Frequently Used (LFU).

### Benefits of a Caching System

1. **Improved Performance**: By storing frequently accessed data in a fast-access location, a cache reduces the time it takes to retrieve data.
2. **Reduced Load on Primary Data Source**: Caching reduces the number of requests to the primary data source, which can prevent it from becoming a bottleneck.
3. **Cost Efficiency**: For applications that rely on external services or databases, caching can reduce costs associated with data access and transfer.
4. **Scalability**: Caching can help applications scale more efficiently by handling increased loads without proportionally increasing the load on the primary data source.

### Types of Caches

1. **Memory Cache**: Stores data in RAM for fast access. Examples include Redis and Memcached.
2. **Disk Cache**: Stores data on disk when RAM is insufficient. Examples include local browser caches and disk-based caching solutions.
3. **Distributed Cache**: A cache that spans multiple servers, allowing for scalable and highly available caching. Examples include AWS ElastiCache and Apache Ignite.
4. **Application Cache**: Specific to individual applications, such as in-memory caches within a web server or client-side caches in a browser.

### Common Use Cases

- **Web Browsers**: Caching web pages, images, and scripts to reduce load times.
- **Web Applications**: Caching database query results to reduce database load.
- **Content Delivery Networks (CDNs)**: Caching static assets like images, videos, and stylesheets at edge locations to reduce latency.
- **APIs**: Caching API responses to improve response times and reduce load on the API servers.

By using caching effectively, systems can deliver faster response times, handle higher loads, and operate more cost-effectively.

<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href=" "> </a>What FIFO means </b></summary><br>

FIFO stands for "First In, First Out." It is a method of organizing and manipulating data relative to time and prioritization. In the context of data structures, queue management, and caching systems, FIFO operates on the principle that the first element added (the "first in") will be the first one to be removed (the "first out").

### Key Concepts of FIFO

1. **Order of Operations**: Elements are processed in the exact order they were added. This is similar to a line of people waiting for service, where the person who arrives first is served first.
2. **Use in Data Structures**: FIFO is a fundamental principle behind queue data structures. In a queue, elements are enqueued at the back and dequeued from the front.
3. **Cache Eviction Policy**: In caching systems, a FIFO eviction policy means that when the cache is full and needs to make room for new data, it removes the oldest data (the first one that was added) to free up space.

### Applications of FIFO

1. **Queue Data Structure**:
   - **Enqueue Operation**: Adding an element to the back of the queue.
   - **Dequeue Operation**: Removing an element from the front of the queue.
   - Example: Handling tasks in a print queue where the first document sent to the printer is printed first.

2. **Scheduling and Task Management**:
   - Used in operating systems for task scheduling where the first task that arrives is executed first.
   - Example: Round-robin scheduling in CPU task management.

3. **Network Buffers**:
   - Managing data packets in network routers where packets are processed in the order they arrive.
   - Example: Buffering video streaming where data packets are played in the order they are received to ensure smooth playback.

4. **Cache Eviction**:
   - In a caching system, when new data needs to be added but the cache is full, the oldest data (first added) is evicted to make room.
   - Example: Simple caching mechanisms where the cache does not prioritize frequently accessed data but rather maintains a straightforward order of entry.

### Example of FIFO in Python

Here’s a simple example of how FIFO can be implemented using a queue in Python:

```python
from collections import deque

# Create a FIFO queue
fifo_queue = deque()

# Enqueue elements
fifo_queue.append('first')
fifo_queue.append('second')
fifo_queue.append('third')

# Dequeue elements
print(fifo_queue.popleft())  # Outputs: 'first'
print(fifo_queue.popleft())  # Outputs: 'second'
print(fifo_queue.popleft())  # Outputs: 'third'
```

In this example, elements are added to the back of the queue and removed from the front, maintaining the FIFO order.

### Benefits of FIFO

1. **Predictability**: Ensures that operations are handled in a predictable manner.
2. **Fairness**: Each element gets processed in the order it was added, preventing starvation of older elements.
3. **Simplicity**: Easy to implement and understand, making it a practical choice for many applications.

<br><p align="center">※※※※※※※※※※※※</p><br>

A `deque` (short for "double-ended queue") is a data structure that allows insertion and removal of elements from both ends, making it more flexible than a standard queue or stack. In Python, the `deque` class is part of the `collections` module and provides an efficient way to handle such operations.

### Key Features of `deque`

1. **Double-Ended Operations**: You can append and pop elements from both ends (left and right).
2. **Efficient O(1) Operations**: Most operations, such as appending and popping from either end, are O(1) time complexity.
3. **Thread-Safe**: The `deque` implementation in Python is thread-safe for appends and pops, which means it can be used safely in multi-threaded applications without the need for additional locks.

### Common Methods

- **Appending Elements**:
  - `append(x)`: Adds `x` to the right end.
  - `appendleft(x)`: Adds `x` to the left end.
  
- **Removing Elements**:
  - `pop()`: Removes and returns an element from the right end.
  - `popleft()`: Removes and returns an element from the left end.

- **Accessing Elements**:
  - `extend(iterable)`: Extends the deque by appending elements from the iterable to the right end.
  - `extendleft(iterable)`: Extends the deque by appending elements from the iterable to the left end (note that the order of elements will be reversed).

- **Other Useful Methods**:
  - `clear()`: Removes all elements from the deque.
  - `rotate(n)`: Rotates the deque `n` steps to the right. If `n` is negative, rotates to the left.
  - `maxlen`: An optional parameter that sets a maximum size for the deque. If the deque is full and new items are added, the oldest items are removed.

### Example Usage of `deque`

```python
from collections import deque

# Create a deque
d = deque()

# Append elements to the right end
d.append('a')
d.append('b')
d.append('c')
print(d)  # Outputs: deque(['a', 'b', 'c'])

# Append elements to the left end
d.appendleft('x')
d.appendleft('y')
print(d)  # Outputs: deque(['y', 'x', 'a', 'b', 'c'])

# Pop elements from the right end
print(d.pop())  # Outputs: 'c'
print(d)  # Outputs: deque(['y', 'x', 'a', 'b'])

# Pop elements from the left end
print(d.popleft())  # Outputs: 'y'
print(d)  # Outputs: deque(['x', 'a', 'b'])

# Extend the deque with an iterable from the right end
d.extend(['d', 'e', 'f'])
print(d)  # Outputs: deque(['x', 'a', 'b', 'd', 'e', 'f'])

# Extend the deque with an iterable from the left end
d.extendleft(['u', 'v', 'w'])
print(d)  # Outputs: deque(['w', 'v', 'u', 'x', 'a', 'b', 'd', 'e', 'f'])

# Rotate the deque to the right by 3 steps
d.rotate(3)
print(d)  # Outputs: deque(['d', 'e', 'f', 'w', 'v', 'u', 'x', 'a', 'b'])

# Rotate the deque to the left by 2 steps
d.rotate(-2)
print(d)  # Outputs: deque(['f', 'w', 'v', 'u', 'x', 'a', 'b', 'd', 'e'])
```

### Use Cases

1. **Queue and Stack Implementations**: `deque` can be used to implement both queues (FIFO) and stacks (LIFO) efficiently.
2. **Sliding Window**: Useful in algorithms that require a sliding window, like moving averages or max/min calculations over a range.
3. **Buffer Management**: Ideal for scenarios requiring a fixed-size buffer, like keeping the last `n` items seen.
4. **Task Scheduling**: Can be used to manage tasks where new tasks can be added and old tasks can be completed from both ends.

<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href=" "> </a>What LIFO means</b></summary><br>

LIFO stands for "Last In, First Out." It is a method of organizing and manipulating data based on the principle that the last element added to the structure is the first one to be removed. This concept is commonly used in stacks, a fundamental data structure in computer science.

### Key Concepts of LIFO

1. **Order of Operations**: Elements are processed in reverse order of their addition. The most recently added element is the first to be removed.
2. **Use in Data Structures**: LIFO is the underlying principle of stack data structures. In a stack, elements are pushed onto the top and popped from the top.
3. **Cache Eviction Policy**: In caching systems, a LIFO eviction policy means that when the cache needs to remove data to make room for new data, the most recently added data is removed first.

### Applications of LIFO

1. **Stack Data Structure**:
   - **Push Operation**: Adds an element to the top of the stack.
   - **Pop Operation**: Removes and returns the element from the top of the stack.
   - **Peek Operation**: Returns the element at the top of the stack without removing it.
   - Example: Undo functionality in text editors where the most recent action is the first to be undone.

2. **Function Call Management**:
   - Used in managing function calls and recursion. The last function called is the first to return.
   - Example: Call stack in programming languages to keep track of function calls and local variables.

3. **Browser History**:
   - Maintaining the browsing history where the last visited page is the first one to be popped back.
   - Example: Navigating backward through browser history.

### Example of LIFO in Python using a Stack

Here's how you can implement a simple stack using a list in Python:

```python
# Create a stack
stack = []

# Push elements onto the stack
stack.append('first')
stack.append('second')
stack.append('third')

# Pop elements from the stack
print(stack.pop())  # Outputs: 'third'
print(stack.pop())  # Outputs: 'second'
print(stack.pop())  # Outputs: 'first'
```

In this example, elements are added to the end of the list (top of the stack) and removed from the end, maintaining the LIFO order.

### Benefits of LIFO

1. **Simplicity**: The LIFO principle is easy to understand and implement.
2. **Efficient Memory Use**: Stacks typically use memory efficiently because they don't require reordering of elements.
3. **Reversibility**: Allows for easy reversibility of actions, making it useful for undo mechanisms.

<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href=" "> </a>What LRU means</b></summary><br>

LRU stands for "Least Recently Used." It is a cache eviction policy that removes the least recently used items first when the cache reaches its capacity and needs to make room for new items. The idea is that items that haven't been used recently are less likely to be used in the near future, so they are the best candidates for removal.

### Key Concepts of LRU

1. **Recency of Use**: Items are tracked based on when they were last accessed or used. The least recently accessed item is the one that gets evicted first.
2. **Cache Management**: LRU is commonly used in cache management to maintain a balance between keeping frequently accessed items readily available and evicting less important items.

### How LRU Works

1. **Tracking Usage**: The cache keeps track of the order in which items are accessed. This can be done using various data structures like linked lists combined with hash maps.
2. **Updating Access Order**: Whenever an item is accessed (read or written), it is moved to the most recently used position.
3. **Eviction**: When the cache reaches its capacity, the item that is the least recently used is evicted to make room for new items.

### Example Implementation

In Python, LRU can be implemented using the `OrderedDict` from the `collections` module, which maintains the order of items based on insertion and allows reordering.

Here's a basic example of an LRU cache:

```python
from collections import OrderedDict

class LRUCache:
    def __init__(self, capacity: int):
        self.cache = OrderedDict()
        self.capacity = capacity

    def get(self, key: int) -> int:
        if key not in self.cache:
            return -1
        # Move the accessed item to the end to show that it was recently used
        self.cache.move_to_end(key)
        return self.cache[key]

    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            # Remove the old value
            del self.cache[key]
        elif len(self.cache) >= self.capacity:
            # Remove the first (least recently used) item
            self.cache.popitem(last=False)
        # Insert the item as the most recently used one
        self.cache[key] = value

# Example usage
lru_cache = LRUCache(2)
lru_cache.put(1, 1)
lru_cache.put(2, 2)
print(lru_cache.get(1))  # Outputs: 1
lru_cache.put(3, 3)      # Evicts key 2
print(lru_cache.get(2))  # Outputs: -1 (not found)
lru_cache.put(4, 4)      # Evicts key 1
print(lru_cache.get(1))  # Outputs: -1 (not found)
print(lru_cache.get(3))  # Outputs: 3
print(lru_cache.get(4))  # Outputs: 4
```

In this example, the `LRUCache` class:
- Uses an `OrderedDict` to maintain the order of elements based on their access.
- Implements the `get` method to retrieve an item and mark it as recently used.
- Implements the `put` method to add a new item, evicting the least recently used item if necessary.

### Benefits of LRU

1. **Efficient Use of Cache**: By evicting the least recently used items, LRU helps keep frequently accessed data in the cache.
2. **Improved Performance**: Reduces the likelihood of cache misses for recently accessed items, improving overall performance.
3. **Simplicity**: LRU is relatively straightforward to implement and understand compared to more complex cache eviction policies.

### Applications of LRU

1. **Web Browsers**: Caching web pages, images, and scripts so that recently accessed content is readily available.
2. **Operating Systems**: Managing the memory cache for file systems and virtual memory, ensuring that recently accessed data is kept in RAM.
3. **Databases**: Implementing LRU for query result caching to improve response times for frequently run queries.
4. **Content Delivery Networks (CDNs)**: Caching content closer to the user to reduce latency and improve load times.

<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href=" "> </a>What MRU means</b></summary><br>

MRU stands for "Most Recently Used." It is a cache eviction policy that removes the most recently used items first when the cache needs to free up space. The idea behind MRU is that the most recently accessed items are less likely to be needed again in the near future, which can be useful in specific scenarios where access patterns exhibit this behavior.

### Key Concepts of MRU

1. **Recency of Use**: Items are tracked based on their most recent access. The most recently accessed item is the one that gets evicted first.
2. **Cache Management**: MRU is used in cache management to handle situations where it is beneficial to remove items that were recently accessed.

### How MRU Works

1. **Tracking Usage**: The cache keeps track of the order in which items are accessed, with a focus on the most recent accesses.
2. **Updating Access Order**: Whenever an item is accessed (read or written), it is marked as the most recently used.
3. **Eviction**: When the cache reaches its capacity, the item that is the most recently used is evicted to make room for new items.

### Example Implementation

While MRU is less common than other caching policies like LRU, it can be implemented using similar data structures. Here's a basic example of how MRU can be implemented in Python using a combination of a list and a dictionary:

```python
class MRUCache:
    def __init__(self, capacity: int):
        self.cache = {}
        self.capacity = capacity
        self.recently_used = []

    def get(self, key: int) -> int:
        if key not in self.cache:
            return -1
        # Move the accessed item to the end to show that it was recently used
        self.recently_used.remove(key)
        self.recently_used.append(key)
        return self.cache[key]

    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            # Update the value and move the item to the end
            self.cache[key] = value
            self.recently_used.remove(key)
        elif len(self.cache) >= self.capacity:
            # Evict the most recently used item
            mru_key = self.recently_used.pop()
            del self.cache[mru_key]
        # Insert the item as the most recently used one
        self.cache[key] = value
        self.recently_used.append(key)

# Example usage
mru_cache = MRUCache(2)
mru_cache.put(1, 1)
mru_cache.put(2, 2)
print(mru_cache.get(1))  # Outputs: 1
mru_cache.put(3, 3)      # Evicts key 1 (most recently used)
print(mru_cache.get(2))  # Outputs: -1 (not found)
print(mru_cache.get(3))  # Outputs: 3
mru_cache.put(4, 4)      # Evicts key 3 (most recently used)
print(mru_cache.get(3))  # Outputs: -1 (not found)
print(mru_cache.get(4))  # Outputs: 4
```

In this example, the `MRUCache` class:
- Uses a dictionary (`cache`) to store key-value pairs.
- Uses a list (`recently_used`) to keep track of the order of accesses.
- Implements the `get` method to retrieve an item and update its access order.
- Implements the `put` method to add a new item and evict the most recently used item if necessary.

### Benefits of MRU

1. **Handling Specific Access Patterns**: MRU can be beneficial in scenarios where the most recently accessed items are less likely to be reused soon, such as in certain types of algorithms or data processing tasks.
2. **Predictable Eviction**: Provides a clear and predictable method for deciding which items to evict from the cache.

### Applications of MRU

MRU is not as commonly used as LRU or FIFO but can be useful in specific scenarios where the access pattern justifies its use:

1. **Data Processing**: In some data processing tasks, the most recently processed data may not need to be retained, making MRU a suitable eviction policy.
2. **Algorithmic Cache Management**: Certain algorithms might benefit from MRU when recent access patterns suggest that the most recently used data is less valuable.

<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href=" "> </a>What LFU means</b></summary><br>

LFU stands for "Least Frequently Used." It is a cache eviction policy that removes the least frequently accessed items first when the cache needs to free up space. The idea behind LFU is that items that have been accessed the least number of times are less likely to be needed again in the near future, making them suitable candidates for eviction.

### Key Concepts of LFU

1. **Frequency of Access**: Items are tracked based on how often they are accessed. The least frequently accessed item is the one that gets evicted first.
2. **Cache Management**: LFU is used in cache management to maintain a balance between keeping frequently accessed items readily available and evicting less important items.

### How LFU Works

1. **Tracking Access Frequency**: The cache keeps track of how many times each item has been accessed. This can be done using various data structures such as dictionaries to count accesses.
2. **Eviction**: When the cache reaches its capacity, the item with the lowest access frequency is evicted to make room for new items.

### Example Implementation

Here’s a basic example of how LFU can be implemented in Python using a combination of dictionaries to track item values and their access frequencies:

```python
from collections import defaultdict

class LFUCache:
    def __init__(self, capacity: int):
        self.capacity = capacity
        self.cache = {}  # Stores the key-value pairs
        self.freq = defaultdict(int)  # Stores the access frequency of each key
        self.least_freq = defaultdict(list)  # Stores the keys with the same frequency
        self.min_freq = 0

    def _update(self, key: int):
        # Update the frequency of the accessed key
        freq = self.freq[key]
        self.least_freq[freq].remove(key)
        if not self.least_freq[freq]:
            if self.min_freq == freq:
                self.min_freq += 1
            del self.least_freq[freq]
        self.freq[key] += 1
        self.least_freq[freq + 1].append(key)

    def get(self, key: int) -> int:
        if key not in self.cache:
            return -1
        self._update(key)
        return self.cache[key]

    def put(self, key: int, value: int) -> None:
        if self.capacity == 0:
            return
        if key in self.cache:
            self.cache[key] = value
            self._update(key)
        else:
            if len(self.cache) >= self.capacity:
                # Evict the least frequently used item
                lfu_key = self.least_freq[self.min_freq].pop(0)
                if not self.least_freq[self.min_freq]:
                    del self.least_freq[self.min_freq]
                del self.cache[lfu_key]
                del self.freq[lfu_key]
            self.cache[key] = value
            self.freq[key] = 1
            self.min_freq = 1
            self.least_freq[1].append(key)

# Example usage
lfu_cache = LFUCache(2)
lfu_cache.put(1, 1)
lfu_cache.put(2, 2)
print(lfu_cache.get(1))  # Outputs: 1
lfu_cache.put(3, 3)      # Evicts key 2 (least frequently used)
print(lfu_cache.get(2))  # Outputs: -1 (not found)
print(lfu_cache.get(3))  # Outputs: 3
lfu_cache.put(4, 4)      # Evicts key 1 (least frequently used)
print(lfu_cache.get(1))  # Outputs: -1 (not found)
print(lfu_cache.get(3))  # Outputs: 3
print(lfu_cache.get(4))  # Outputs: 4
```

In this example, the `LFUCache` class:
- Uses a dictionary (`cache`) to store key-value pairs.
- Uses a dictionary (`freq`) to track the access frequency of each key.
- Uses a dictionary (`least_freq`) to maintain lists of keys with the same frequency.
- Implements the `get` method to retrieve an item and update its access frequency.
- Implements the `put` method to add a new item and evict the least frequently used item if necessary.

### Benefits of LFU

1. **Efficient Use of Cache**: By evicting the least frequently used items, LFU helps keep frequently accessed data in the cache.
2. **Improved Performance**: Reduces the likelihood of cache misses for frequently accessed items, improving overall performance.
3. **Fairness**: Ensures that frequently accessed items remain in the cache longer, providing a fair and balanced approach to cache management.

### Applications of LFU

1. **Database Caching**: Used in databases to keep frequently queried data in memory for quick access.
2. **Content Delivery Networks (CDNs)**: Caching popular content closer to the user to reduce latency and improve load times.
3. **Operating Systems**: Managing memory cache for file systems and virtual memory, ensuring that frequently accessed data is kept in RAM.
4. **Web Browsers**: Caching web pages, images, and scripts so that frequently accessed content is readily available.

<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href=" "> </a>What the purpose of a caching system</b></summary><br>

A caching system is designed to improve the performance and efficiency of computer systems by temporarily storing copies of frequently accessed data. The primary purpose of a caching system is to reduce the time and resources required to retrieve data, thereby speeding up access and improving overall system performance. Here are some key purposes and benefits of a caching system:

### Key Purposes of a Caching System

1. **Performance Improvement**:
   - **Speed Up Data Retrieval**: Caching stores data closer to where it is needed, reducing the time it takes to access that data. This is especially important for data that is accessed frequently.
   - **Reduce Latency**: By storing copies of data in a cache, the latency involved in fetching data from a slower storage medium (like a hard drive or a remote server) is minimized.

2. **Reduce Load on Backend Systems**:
   - **Minimize Resource Usage**: Caching reduces the load on databases, servers, and other backend systems by serving data from the cache instead of querying the backend repeatedly.
   - **Scalability**: Helps systems handle more concurrent users and higher traffic volumes without requiring a proportional increase in backend resources.

3. **Improve Availability and Reliability**:
   - **Fault Tolerance**: In case of temporary backend failures or network issues, data can still be served from the cache, improving system reliability and availability.
   - **Backup for Slow or Intermittent Connections**: Caching provides a buffer for scenarios where the connection to the primary data source is slow or unreliable.

4. **Cost Efficiency**:
   - **Reduce Operational Costs**: By decreasing the load on backend systems, caching can reduce operational costs associated with data retrieval and processing.
   - **Optimize Resource Utilization**: Efficient use of caching can help optimize the utilization of system resources, leading to cost savings.

5. **User Experience**:
   - **Enhanced User Experience**: Faster data access leads to smoother and more responsive applications, improving user satisfaction and experience.
   - **Reduced Wait Times**: Users experience less waiting time for data to load, leading to a more seamless interaction with the application.

<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href=" "> </a>What limits a caching system have</b></summary><br>

Caching systems, while highly beneficial for improving performance and efficiency, come with several limitations and challenges. Understanding these limitations is crucial for designing and implementing an effective caching strategy. Here are some key limitations of caching systems:

### 1. **Cache Invalidation**
- **Staleness of Data**: Cached data can become outdated if the underlying data changes. Managing cache invalidation (the process of updating or removing outdated cache entries) is complex and crucial for maintaining data consistency.
- **Consistency Issues**: Ensuring that the cache and the underlying data source remain in sync can be challenging, especially in distributed systems.

### 2. **Limited Cache Size**
- **Storage Constraints**: Caches have limited storage capacity. When the cache is full, new data requires eviction of existing data, which can lead to the eviction of data that might soon be needed again (cache thrashing).
- **Optimal Size Determination**: Determining the optimal cache size is not always straightforward and depends on the specific workload and access patterns.

### 3. **Cache Misses**
- **Cold Start**: Initially, the cache is empty, resulting in a period of cache misses until it is populated with frequently accessed data.
- **Compulsory Misses**: These occur when data is accessed for the first time and is not yet in the cache.

### 4. **Complexity in Cache Management**
- **Implementation Complexity**: Implementing an efficient caching mechanism involves complex algorithms and data structures, such as LRU (Least Recently Used), LFU (Least Frequently Used), and others.
- **Maintenance Overhead**: Regularly updating and maintaining the cache system can add overhead and complexity to the system.

### 5. **Cache Coherence in Distributed Systems**
- **Synchronization**: In distributed systems, maintaining cache coherence (ensuring all nodes have consistent data) can be challenging and requires additional synchronization mechanisms.
- **Latency and Network Overhead**: Synchronizing caches across distributed systems can introduce latency and increase network traffic.

### 6. **Resource Overhead**
- **Memory Usage**: Caching consumes additional memory resources, which might be limited, especially in environments with constrained resources.
- **Processing Overhead**: Managing the cache (e.g., updating access frequencies, handling evictions) introduces processing overhead that can impact system performance.

### 7. **Security and Privacy Concerns**
- **Sensitive Data**: Caching sensitive data can pose security risks if the cache is not properly secured. Unauthorized access to the cache can lead to data breaches.
- **Data Exposure**: Cached data might be exposed to unauthorized users if proper access controls are not implemented.

### 8. **Scalability Issues**
- **Scaling Challenges**: As the system scales, managing the cache efficiently becomes more difficult. Ensuring the cache scales appropriately with the system's demands requires careful planning and architecture.
- **Hot Spots**: Frequently accessed cache entries can become "hot spots," leading to contention and performance bottlenecks.

### 9. **Write-Through vs. Write-Back Policies**
- **Write-Through**: Every write operation goes through to the cache and the underlying data store simultaneously. This ensures data consistency but can slow down write operations.
- **Write-Back**: Write operations are initially made to the cache and only periodically written back to the underlying data store. This improves write performance but can lead to data loss or inconsistencies if the cache fails before the data is written back.

### 10. **Load Balancing**
- **Uneven Load Distribution**: In a distributed caching system, uneven load distribution can occur, where some cache nodes handle more requests than others, leading to inefficiencies.

### Example Scenario: Web Application with Inconsistent Data

Consider a web application that caches user profile data to improve response times. If a user updates their profile, the application must ensure that the cached profile data is updated or invalidated. If the cache is not properly managed, other users might see outdated profile information, leading to a poor user experience.

### Mitigating Cache Limitations

To mitigate these limitations, consider the following strategies:
- **Implement Effective Cache Invalidation**: Use appropriate cache invalidation strategies to keep cached data up-to-date.
- **Monitor and Adjust Cache Size**: Regularly monitor cache performance and adjust the cache size and eviction policies based on access patterns.
- **Use Distributed Caching Solutions**: Employ distributed caching solutions that can scale with your application and provide mechanisms for cache coherence.
- **Secure the Cache**: Implement robust security measures to protect sensitive cached data from unauthorized access.
- **Balance Load**: Use load balancing techniques to evenly distribute requests across cache nodes.

<br><p align="center">※※※※※※※※※※※※</p><br>
</details>



<!--==================================================-->
<br>

## Requirements
<h3>Python Scripts</h3>

- All your files will be interpreted/compiled on Ubuntu 18.04 LTS using <code>python3</code> (version 3.7)
- All your files should end with a new line
- The first line of all your files should be exactly <code>#!/usr/bin/env python3</code>
- A <code>README.md</code> file, at the root of the folder of the project, is mandatory
- Your code should use the <code>pycodestyle</code> style (version 2.5)
- All your files must be executable
- The length of your files will be tested using <code>wc</code>
- All your modules should have a documentation (<code>python3 -c 'print(__import__("my_module").__doc__)'</code>)
- All your classes should have a documentation (<code>python3 -c 'print(__import__("my_module").MyClass.__doc__)'</code>)
- All your functions (inside and outside a class) should have a documentation (<code>python3 -c 'print(__import__("my_module").my_function.__doc__)'</code> and <code>python3 -c 'print(__import__("my_module").MyClass.my_function.__doc__)'</code>)
- A documentation is not a simple word, it’s a real sentence explaining what’s the purpose of the module, class or method (the length of it will be verified)

<!--==================================================-->
<br>

## More Info
<h3>Parent class <code>BaseCaching</code></h3>

All your classes must inherit from <code>BaseCaching</code> defined below:

<pre><code>$ cat base_caching.py
#!/usr/bin/python3
""" BaseCaching module
"""

class BaseCaching():
    """ BaseCaching defines:
      - constants of your caching system
      - where your data are stored (in a dictionary)
    """
    MAX_ITEMS = 4

    def __init__(self):
        """ Initiliaze
        """
        self.cache_data = {}

    def print_cache(self):
        """ Print the cache
        """
        print("Current cache:")
        for key in sorted(self.cache_data.keys()):
            print("{}: {}".format(key, self.cache_data.get(key)))

    def put(self, key, item):
        """ Add an item in the cache
        """
        raise NotImplementedError("put must be implemented in your cache class")

    def get(self, key):
        """ Get an item by key
        """
        raise NotImplementedError("get must be implemented in your cache class")
</code></pre>


<!--==================================================-->
<br>

## Tasks
<details>
<summary>

### 0. Basic dictionary
`mandatory`

File: [0-basic_cache.py]()
</summary>

<p>Create a class <code>BasicCache</code> that inherits from <code>BaseCaching</code> and is a caching system:</p>

<ul>
<li>You must use <code>self.cache_data</code> - dictionary from the parent class <code>BaseCaching</code></li>
<li>This caching system doesn’t have limit</li>
<li><code>def put(self, key, item):</code>
<ul>
<li>Must assign to the dictionary <code>self.cache_data</code> the <code>item</code> value for the key <code>key</code>.</li>
<li>If <code>key</code> or <code>item</code> is <code>None</code>, this method should not do anything.</li>
</ul></li>
<li><code>def get(self, key):</code>
<ul>
<li>Must return the value in <code>self.cache_data</code> linked to <code>key</code>.</li>
<li>If <code>key</code> is <code>None</code> or if the <code>key</code> doesn’t exist in <code>self.cache_data</code>, return <code>None</code>.</li>
</ul></li>
</ul>

<pre><code>guillaume@ubuntu:~/0x01$ cat 0-main.py
#!/usr/bin/python3
""" 0-main """
BasicCache = __import__('0-basic_cache').BasicCache

my_cache = BasicCache()
my_cache.print_cache()
my_cache.put("A", "Hello")
my_cache.put("B", "World")
my_cache.put("C", "Holberton")
my_cache.print_cache()
print(my_cache.get("A"))
print(my_cache.get("B"))
print(my_cache.get("C"))
print(my_cache.get("D"))
my_cache.print_cache()
my_cache.put("D", "School")
my_cache.put("E", "Battery")
my_cache.put("A", "Street")
my_cache.print_cache()
print(my_cache.get("A"))

guillaume@ubuntu:~/0x01$ ./0-main.py
Current cache:
Current cache:
A: Hello
B: World
C: Holberton
Hello
World
Holberton
None
Current cache:
A: Hello
B: World
C: Holberton
Current cache:
A: Street
B: World
C: Holberton
D: School
E: Battery
Street
guillaume@ubuntu:~/0x01$ 
</code></pre>


</details>

<details>
<summary>

### 1. FIFO caching
`mandatory`

File: [1-fifo_cache.py]()
</summary>

<p>Create a class <code>FIFOCache</code> that inherits from <code>BaseCaching</code> and is a caching system:</p>

<ul>
<li>You must use <code>self.cache_data</code> - dictionary from the parent class <code>BaseCaching</code></li>
<li>You can overload <code>def __init__(self):</code> but don’t forget to call the parent init: <code>super().__init__()</code></li>
<li><code>def put(self, key, item):</code>
<ul>
<li>Must assign to the dictionary <code>self.cache_data</code> the <code>item</code> value for the key <code>key</code>.</li>
<li>If <code>key</code> or <code>item</code> is <code>None</code>, this method should not do anything.</li>
<li>If the number of items in <code>self.cache_data</code> is higher that <code>BaseCaching.MAX_ITEMS</code>:

<ul>
<li>you must discard the first item put in cache (FIFO algorithm)</li>
<li>you must print <code>DISCARD:</code> with the <code>key</code> discarded and following by a new line </li>
</ul></li>
</ul></li>
<li><code>def get(self, key):</code>
<ul>
<li>Must return the value in <code>self.cache_data</code> linked to <code>key</code>.</li>
<li>If <code>key</code> is <code>None</code> or if the <code>key</code> doesn’t exist in <code>self.cache_data</code>, return <code>None</code>.</li>
</ul></li>
</ul>

<pre><code>guillaume@ubuntu:~/0x01$ cat 1-main.py
#!/usr/bin/python3
""" 1-main """
FIFOCache = __import__('1-fifo_cache').FIFOCache

my_cache = FIFOCache()
my_cache.put("A", "Hello")
my_cache.put("B", "World")
my_cache.put("C", "Holberton")
my_cache.put("D", "School")
my_cache.print_cache()
my_cache.put("E", "Battery")
my_cache.print_cache()
my_cache.put("C", "Street")
my_cache.print_cache()
my_cache.put("F", "Mission")
my_cache.print_cache()

guillaume@ubuntu:~/0x01$ ./1-main.py
Current cache:
A: Hello
B: World
C: Holberton
D: School
DISCARD: A
Current cache:
B: World
C: Holberton
D: School
E: Battery
Current cache:
B: World
C: Street
D: School
E: Battery
DISCARD: B
Current cache:
C: Street
D: School
E: Battery
F: Mission
guillaume@ubuntu:~/0x01$ 
</code></pre>


</details>

<details>
<summary>

### 2. LIFO Caching
`mandatory`

File: [2-lifo_cache.py]()
</summary>

<p>Create a class <code>LIFOCache</code> that inherits from <code>BaseCaching</code> and is a caching system:</p>

<ul>
<li>You must use <code>self.cache_data</code> - dictionary from the parent class <code>BaseCaching</code></li>
<li>You can overload <code>def __init__(self):</code> but don’t forget to call the parent init: <code>super().__init__()</code></li>
<li><code>def put(self, key, item):</code>
<ul>
<li>Must assign to the dictionary <code>self.cache_data</code> the <code>item</code> value for the key <code>key</code>.</li>
<li>If <code>key</code> or <code>item</code> is <code>None</code>, this method should not do anything.</li>
<li>If the number of items in <code>self.cache_data</code> is higher that <code>BaseCaching.MAX_ITEMS</code>:

<ul>
<li>you must discard the last item put in cache (LIFO algorithm)</li>
<li>you must print <code>DISCARD:</code> with the <code>key</code> discarded and following by a new line </li>
</ul></li>
</ul></li>
<li><code>def get(self, key):</code>
<ul>
<li>Must return the value in <code>self.cache_data</code> linked to <code>key</code>.</li>
<li>If <code>key</code> is <code>None</code> or if the <code>key</code> doesn’t exist in <code>self.cache_data</code>, return <code>None</code>.</li>
</ul></li>
</ul>

<pre><code>guillaume@ubuntu:~/0x01$ cat 2-main.py
#!/usr/bin/python3
""" 2-main """
LIFOCache = __import__('2-lifo_cache').LIFOCache

my_cache = LIFOCache()
my_cache.put("A", "Hello")
my_cache.put("B", "World")
my_cache.put("C", "Holberton")
my_cache.put("D", "School")
my_cache.print_cache()
my_cache.put("E", "Battery")
my_cache.print_cache()
my_cache.put("C", "Street")
my_cache.print_cache()
my_cache.put("F", "Mission")
my_cache.print_cache()
my_cache.put("G", "San Francisco")
my_cache.print_cache()

guillaume@ubuntu:~/0x01$ ./2-main.py
Current cache:
A: Hello
B: World
C: Holberton
D: School
DISCARD: D
Current cache:
A: Hello
B: World
C: Holberton
E: Battery
Current cache:
A: Hello
B: World
C: Street
E: Battery
DISCARD: C
Current cache:
A: Hello
B: World
E: Battery
F: Mission
DISCARD: F
Current cache:
A: Hello
B: World
E: Battery
G: San Francisco
guillaume@ubuntu:~/0x01$ 
</code></pre>


</details>

<details>
<summary>

### 3. LRU Caching
`mandatory`

File: [3-lru_cache.py]()
</summary>

<p>Create a class <code>LRUCache</code> that inherits from <code>BaseCaching</code> and is a caching system:</p>

<ul>
<li>You must use <code>self.cache_data</code> - dictionary from the parent class <code>BaseCaching</code></li>
<li>You can overload <code>def __init__(self):</code> but don’t forget to call the parent init: <code>super().__init__()</code></li>
<li><code>def put(self, key, item):</code>
<ul>
<li>Must assign to the dictionary <code>self.cache_data</code> the <code>item</code> value for the key <code>key</code>.</li>
<li>If <code>key</code> or <code>item</code> is <code>None</code>, this method should not do anything.</li>
<li>If the number of items in <code>self.cache_data</code> is higher that <code>BaseCaching.MAX_ITEMS</code>:

<ul>
<li>you must discard the least recently used item (LRU algorithm)</li>
<li>you must print <code>DISCARD:</code> with the <code>key</code> discarded and following by a new line </li>
</ul></li>
</ul></li>
<li><code>def get(self, key):</code>
<ul>
<li>Must return the value in <code>self.cache_data</code> linked to <code>key</code>.</li>
<li>If <code>key</code> is <code>None</code> or if the <code>key</code> doesn’t exist in <code>self.cache_data</code>, return <code>None</code>.</li>
</ul></li>
</ul>

<pre><code>guillaume@ubuntu:~/0x01$ cat 3-main.py
#!/usr/bin/python3
""" 3-main """
LRUCache = __import__('3-lru_cache').LRUCache

my_cache = LRUCache()
my_cache.put("A", "Hello")
my_cache.put("B", "World")
my_cache.put("C", "Holberton")
my_cache.put("D", "School")
my_cache.print_cache()
print(my_cache.get("B"))
my_cache.put("E", "Battery")
my_cache.print_cache()
my_cache.put("C", "Street")
my_cache.print_cache()
print(my_cache.get("A"))
print(my_cache.get("B"))
print(my_cache.get("C"))
my_cache.put("F", "Mission")
my_cache.print_cache()
my_cache.put("G", "San Francisco")
my_cache.print_cache()
my_cache.put("H", "H")
my_cache.print_cache()
my_cache.put("I", "I")
my_cache.print_cache()
my_cache.put("J", "J")
my_cache.print_cache()
my_cache.put("K", "K")
my_cache.print_cache()

guillaume@ubuntu:~/0x01$ ./3-main.py
Current cache:
A: Hello
B: World
C: Holberton
D: School
World
DISCARD: A
Current cache:
B: World
C: Holberton
D: School
E: Battery
Current cache:
B: World
C: Street
D: School
E: Battery
None
World
Street
DISCARD: D
Current cache:
B: World
C: Street
E: Battery
F: Mission
DISCARD: E
Current cache:
B: World
C: Street
F: Mission
G: San Francisco
DISCARD: B
Current cache:
C: Street
F: Mission
G: San Francisco
H: H
DISCARD: C
Current cache:
F: Mission
G: San Francisco
H: H
I: I
DISCARD: F
Current cache:
G: San Francisco
H: H
I: I
J: J
DISCARD: G
Current cache:
H: H
I: I
J: J
K: K
guillaume@ubuntu:~/0x01$ 
</code></pre>


</details>

<details>
<summary>

### 4. MRU Caching
`mandatory`

File: [4-mru_cache.py]()
</summary>

<p>Create a class <code>MRUCache</code> that inherits from <code>BaseCaching</code> and is a caching system:</p>

<ul>
<li>You must use <code>self.cache_data</code> - dictionary from the parent class <code>BaseCaching</code></li>
<li>You can overload <code>def __init__(self):</code> but don’t forget to call the parent init: <code>super().__init__()</code></li>
<li><code>def put(self, key, item):</code>
<ul>
<li>Must assign to the dictionary <code>self.cache_data</code> the <code>item</code> value for the key <code>key</code>.</li>
<li>If <code>key</code> or <code>item</code> is <code>None</code>, this method should not do anything.</li>
<li>If the number of items in <code>self.cache_data</code> is higher that <code>BaseCaching.MAX_ITEMS</code>:

<ul>
<li>you must discard the most recently used item (MRU algorithm)</li>
<li>you must print <code>DISCARD:</code> with the <code>key</code> discarded and following by a new line </li>
</ul></li>
</ul></li>
<li><code>def get(self, key):</code>
<ul>
<li>Must return the value in <code>self.cache_data</code> linked to <code>key</code>.</li>
<li>If <code>key</code> is <code>None</code> or if the <code>key</code> doesn’t exist in <code>self.cache_data</code>, return <code>None</code>.</li>
</ul></li>
</ul>

<pre><code>guillaume@ubuntu:~/0x01$ cat 4-main.py
#!/usr/bin/python3
""" 4-main """
MRUCache = __import__('4-mru_cache').MRUCache

my_cache = MRUCache()
my_cache.put("A", "Hello")
my_cache.put("B", "World")
my_cache.put("C", "Holberton")
my_cache.put("D", "School")
my_cache.print_cache()
print(my_cache.get("B"))
my_cache.put("E", "Battery")
my_cache.print_cache()
my_cache.put("C", "Street")
my_cache.print_cache()
print(my_cache.get("A"))
print(my_cache.get("B"))
print(my_cache.get("C"))
my_cache.put("F", "Mission")
my_cache.print_cache()
my_cache.put("G", "San Francisco")
my_cache.print_cache()
my_cache.put("H", "H")
my_cache.print_cache()
my_cache.put("I", "I")
my_cache.print_cache()
my_cache.put("J", "J")
my_cache.print_cache()
my_cache.put("K", "K")
my_cache.print_cache()

guillaume@ubuntu:~/0x01$ ./4-main.py
Current cache:
A: Hello
B: World
C: Holberton
D: School
World
DISCARD: B
Current cache:
A: Hello
C: Holberton
D: School
E: Battery
Current cache:
A: Hello
C: Street
D: School
E: Battery
Hello
None
Street
DISCARD: C
Current cache:
A: Hello
D: School
E: Battery
F: Mission
DISCARD: F
Current cache:
A: Hello
D: School
E: Battery
G: San Francisco
DISCARD: G
Current cache:
A: Hello
D: School
E: Battery
H: H
DISCARD: H
Current cache:
A: Hello
D: School
E: Battery
I: I
DISCARD: I
Current cache:
A: Hello
D: School
E: Battery
J: J
DISCARD: J
Current cache:
A: Hello
D: School
E: Battery
K: K
guillaume@ubuntu:~/0x01$ 
</code></pre>


</details>

<details>
<summary>

### 5. LFU Caching
`#advanced`

File: [100-lfu_cache.py]()
</summary>

Create a class `LFUCache` that inherits from `BaseCaching` and is a caching system:

- You must use `self.cache_data` - dictionary from the parent class `BaseCaching`
- You can overload `def __init__(self):` but don’t forget to call the parent init: `super().__init__()`
- `def put(self, key, item):`
    - Must assign to the dictionary `self.cache_data` the `item` value for the key `key`.
    - If `key` or `item` is `None`, this method should not do anything.
    - If the number of items in `self.cache_data` is higher that `BaseCaching.MAX_ITEMS`:
        - you must discard the least frequency used item (LFU algorithm)
        - if you find more than 1 item to discard, you must use the LRU algorithm to discard only the least recently used
        - you must print `DISCARD`: with the `key` discarded and following by a new line
- `def get(self, key):`
    - Must return the value in `self.cache_data` linked to `key`.
    - If `key` is `None` or if the `key` doesn’t exist in `self.cache_data`, return `None`.

```
guillaume@ubuntu:~/0x01$ cat 100-main.py
#!/usr/bin/python3
""" 100-main """
LFUCache = __import__('100-lfu_cache').LFUCache

my_cache = LFUCache()
my_cache.put("A", "Hello")
my_cache.put("B", "World")
my_cache.put("C", "Holberton")
my_cache.put("D", "School")
my_cache.print_cache()
print(my_cache.get("B"))
my_cache.put("E", "Battery")
my_cache.print_cache()
my_cache.put("C", "Street")
my_cache.print_cache()
print(my_cache.get("A"))
print(my_cache.get("B"))
print(my_cache.get("C"))
my_cache.put("F", "Mission")
my_cache.print_cache()
my_cache.put("G", "San Francisco")
my_cache.print_cache()
my_cache.put("H", "H")
my_cache.print_cache()
my_cache.put("I", "I")
my_cache.print_cache()
print(my_cache.get("I"))
print(my_cache.get("H"))
print(my_cache.get("I"))
print(my_cache.get("H"))
print(my_cache.get("I"))
print(my_cache.get("H"))
my_cache.put("J", "J")
my_cache.print_cache()
my_cache.put("K", "K")
my_cache.print_cache()
my_cache.put("L", "L")
my_cache.print_cache()
my_cache.put("M", "M")
my_cache.print_cache()

guillaume@ubuntu:~/0x01$ ./100-main.py
Current cache:
A: Hello
B: World
C: Holberton
D: School
World
DISCARD: A
Current cache:
B: World
C: Holberton
D: School
E: Battery
Current cache:
B: World
C: Street
D: School
E: Battery
None
World
Street
DISCARD: D
Current cache:
B: World
C: Street
E: Battery
F: Mission
DISCARD: E
Current cache:
B: World
C: Street
F: Mission
G: San Francisco
DISCARD: F
Current cache:
B: World
C: Street
G: San Francisco
H: H
DISCARD: G
Current cache:
B: World
C: Street
H: H
I: I
I
H
I
H
I
H
DISCARD: B
Current cache:
C: Street
H: H
I: I
J: J
DISCARD: J
Current cache:
C: Street
H: H
I: I
K: K
DISCARD: K
Current cache:
C: Street
H: H
I: I
L: L
DISCARD: L
Current cache:
C: Street
H: H
I: I
M: M
guillaume@ubuntu:~/0x01$
```

</details>
