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
<summary><b><a href="https://intranet.alxswe.com/rltoken/gKerxvR4dnXQYkBX2ujZiQ">Cache replacement policies - LRU</a></b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href="https://intranet.alxswe.com/rltoken/Tmk4qEBZ7QTknvbpKabWfQ">Cache replacement policies - MRU</a></b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href="https://intranet.alxswe.com/rltoken/8PEJ8L34bxhL2y--BW5zGQ">Cache replacement policies - LFU</a></b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>



<!--==================================================-->
<br>

## Learning Objectives
<h3>General</h3>

<details>
<summary><b><a href=" "> </a>What a caching system is</b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href=" "> </a>What FIFO means </b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href=" "> </a>What LIFO means</b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href=" "> </a>What LRU means</b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href=" "> </a>What MRU means</b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href=" "> </a>What LFU means</b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href=" "> </a>What the purpose of a caching system</b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href=" "> </a>What limits a caching system have</b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>



<br>

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

