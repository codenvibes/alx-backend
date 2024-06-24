<h1 align="center"><b>0X00. <a href="https://github.com/codenvibes/alx-backend/blob/master/0x00-pagination/notes/pagination.md">PAGINATION</a></b></h1>
<div align="center"><code>Back-end</code></div>

<br>
<div align="center">
<img width="60%" src="https://github.com/codenvibes/alx-backend/blob/master/0x00-pagination/images/3646eb02de6527ca5d83.png">
<img width="60%" src="https://github.com/codenvibes/alx-backend/blob/master/0x00-pagination/images/746187b76bea1f46030e.png">
<img width="60%" src="https://github.com/codenvibes/alx-backend/blob/master/0x00-pagination/images/665ce871c2ecc66a8e71.png">
</div>

<!-- <br>
<hr>
<h3><a href=>Notes</a></h3>
<hr> -->


<!--==================================================-->
<br>

## Resources
<details>
<summary><b><a href="https://www.moesif.com/blog/technical/api-design/REST-API-Design-Filtering-Sorting-and-Pagination/#pagination">REST API Design: Pagination</a></b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href="https://en.wikipedia.org/wiki/HATEOAS">HATEOAS</a></b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>



<!--==================================================-->
<br>

## Learning Objectives
<details>
<summary><b><a href=" "> </a>How to paginate a dataset with simple page and page_size parameters</b></summary><br>

Paginating a dataset using `page` and `page_size` parameters involves dividing the dataset into smaller subsets (pages) and then returning the appropriate subset based on the given page number and page size. Here’s a simple way to do this in Python:

1. **Define the Pagination Function**:
   Create a function that takes the dataset, the current page number, and the page size as parameters.

2. **Calculate the Start and End Indices**:
   Determine the indices for slicing the dataset to get the correct page.

3. **Handle Edge Cases**:
   Ensure the function handles cases where the page number or page size is invalid or out of range.

Here’s an example implementation:

```python
def paginate(dataset, page, page_size):
    # Ensure page and page_size are positive integers
    if page < 1 or page_size < 1:
        return []

    # Calculate start and end indices for slicing the dataset
    start_index = (page - 1) * page_size
    end_index = start_index + page_size

    # Return the sliced dataset
    return dataset[start_index:end_index]

# Example usage
dataset = list(range(1, 101))  # A sample dataset with 100 items
page = 2
page_size = 10

paginated_data = paginate(dataset, page, page_size)
print(paginated_data)  # Output: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
```

### Explanation:
1. **Input Validation**:
   The function checks if `page` and `page_size` are positive integers. If not, it returns an empty list.

2. **Calculate Indices**:
   - `start_index` is calculated as `(page - 1) * page_size`.
   - `end_index` is `start_index + page_size`.

3. **Slicing the Dataset**:
   The dataset is sliced using the calculated indices to get the desired page of data.

### Edge Cases and Considerations:
- If the `page` or `page_size` is invalid (e.g., negative or zero), the function returns an empty list.
- If the calculated `start_index` is beyond the length of the dataset, the function will return an empty list.
- If the `end_index` exceeds the length of the dataset, the slicing operation will gracefully handle it by returning a shorter list.

### Enhancements:
You might want to enhance this function to provide additional information such as total pages, current page, etc., to aid in navigation. Here’s an enhanced version:

```python
def paginate(dataset, page, page_size):
    total_items = len(dataset)
    total_pages = (total_items + page_size - 1) // page_size  # Calculate total pages
    
    # Ensure page is within the valid range
    if page < 1 or page > total_pages:
        return {
            "data": [],
            "page": page,
            "page_size": page_size,
            "total_pages": total_pages,
            "total_items": total_items
        }

    # Calculate start and end indices for slicing the dataset
    start_index = (page - 1) * page_size
    end_index = start_index + page_size

    # Return the paginated data along with additional information
    return {
        "data": dataset[start_index:end_index],
        "page": page,
        "page_size": page_size,
        "total_pages": total_pages,
        "total_items": total_items
    }

# Example usage
paginated_data = paginate(dataset, page, page_size)
print(paginated_data)
# Output: {
#   "data": [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
#   "page": 2,
#   "page_size": 10,
#   "total_pages": 10,
#   "total_items": 100
# }
```

This version provides more comprehensive pagination details, which can be useful for building a user interface that supports pagination.

<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href=" "> </a>How to paginate a dataset with hypermedia metadata</b></summary><br>

Paginating a dataset with hypermedia metadata involves not only returning the data for the current page but also including additional information to help navigate through the pages. This typically includes links to the first, last, next, and previous pages, as well as information about the total number of pages and items.

Here's an example implementation in Python:

1. **Define the Pagination Function**:
   Create a function that takes the dataset, the current page number, and the page size as parameters.

2. **Calculate the Start and End Indices**:
   Determine the indices for slicing the dataset to get the correct page.

3. **Generate Hypermedia Links**:
   Create links to the first, last, next, and previous pages.

4. **Return the Paginated Data with Metadata**:
   Include the paginated data and the hypermedia metadata in the response.

Here's the complete implementation:

```python
def paginate_with_hypermedia(dataset, page, page_size, base_url):
    total_items = len(dataset)
    total_pages = (total_items + page_size - 1) // page_size  # Calculate total pages

    # Ensure page is within the valid range
    if page < 1 or page > total_pages:
        return {
            "data": [],
            "page": page,
            "page_size": page_size,
            "total_pages": total_pages,
            "total_items": total_items,
            "links": {
                "self": f"{base_url}?page={page}&page_size={page_size}",
                "first": f"{base_url}?page=1&page_size={page_size}",
                "last": f"{base_url}?page={total_pages}&page_size={page_size}",
                "next": None,
                "prev": None
            }
        }

    # Calculate start and end indices for slicing the dataset
    start_index = (page - 1) * page_size
    end_index = start_index + page_size

    # Generate hypermedia links
    links = {
        "self": f"{base_url}?page={page}&page_size={page_size}",
        "first": f"{base_url}?page=1&page_size={page_size}",
        "last": f"{base_url}?page={total_pages}&page_size={page_size}",
        "next": f"{base_url}?page={page + 1}&page_size={page_size}" if page < total_pages else None,
        "prev": f"{base_url}?page={page - 1}&page_size={page_size}" if page > 1 else None
    }

    # Return the paginated data along with additional information
    return {
        "data": dataset[start_index:end_index],
        "page": page,
        "page_size": page_size,
        "total_pages": total_pages,
        "total_items": total_items,
        "links": links
    }

# Example usage
dataset = list(range(1, 101))  # A sample dataset with 100 items
page = 2
page_size = 10
base_url = "http://example.com/api/items"

paginated_data = paginate_with_hypermedia(dataset, page, page_size, base_url)
print(paginated_data)
# Output:
# {
#   "data": [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
#   "page": 2,
#   "page_size": 10,
#   "total_pages": 10,
#   "total_items": 100,
#   "links": {
#       "self": "http://example.com/api/items?page=2&page_size=10",
#       "first": "http://example.com/api/items?page=1&page_size=10",
#       "last": "http://example.com/api/items?page=10&page_size=10",
#       "next": "http://example.com/api/items?page=3&page_size=10",
#       "prev": "http://example.com/api/items?page=1&page_size=10"
#   }
# }
```

### Explanation:

1. **Input Validation**:
   The function checks if `page` is within the valid range (between 1 and `total_pages`). If not, it returns an empty data set along with the appropriate metadata.

2. **Calculate Indices**:
   - `start_index` is calculated as `(page - 1) * page_size`.
   - `end_index` is `start_index + page_size`.

3. **Generate Hypermedia Links**:
   - `self`: The URL for the current page.
   - `first`: The URL for the first page.
   - `last`: The URL for the last page.
   - `next`: The URL for the next page, if it exists.
   - `prev`: The URL for the previous page, if it exists.

4. **Return the Data and Metadata**:
   The function returns a dictionary containing the paginated data and the hypermedia metadata.

### Edge Cases:
- If `page` or `page_size` is invalid (e.g., negative or zero), the function returns an empty list with the correct hypermedia links.
- If `page` is beyond the total number of pages, the function returns an empty data list but still includes the metadata and links.

This approach ensures that the pagination is user-friendly and self-descriptive, making it easier to navigate through the dataset.

<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href=" "> </a>How to paginate in a deletion-resilient manner</b></summary><br>

Paginating a dataset in a deletion-resilient manner requires handling cases where items in the dataset might be added or removed between page requests. This means the pagination logic needs to ensure that users see consistent results even if changes occur in the dataset.

A common approach to achieve deletion-resilient pagination is to use a cursor-based pagination system rather than offset-based pagination. Cursor-based pagination uses a unique identifier (often a timestamp or an ID) to mark the position in the dataset, making it more robust to changes.

Here's an example of how to implement deletion-resilient pagination using cursor-based pagination:

1. **Define the Pagination Function**:
   Create a function that takes the dataset, the cursor, and the page size as parameters.

2. **Calculate the Start Position**:
   Use the cursor to find the starting point in the dataset.

3. **Generate the Next Cursor**:
   Determine the cursor for the next page based on the last item of the current page.

4. **Return the Paginated Data with Metadata**:
   Include the paginated data and the cursor for the next page in the response.

Here’s the complete implementation:

```python
def paginate_with_cursor(dataset, cursor=None, page_size=10):
    # Ensure page_size is a positive integer
    if page_size < 1:
        return {
            "data": [],
            "cursor": cursor,
            "next_cursor": None
        }

    # Sort the dataset by the unique identifier (assuming the dataset is a list of dicts with an 'id' field)
    sorted_dataset = sorted(dataset, key=lambda x: x['id'])

    # If a cursor is provided, find the start position in the dataset
    if cursor:
        start_index = next((i for i, item in enumerate(sorted_dataset) if item['id'] > cursor), 0)
    else:
        start_index = 0

    # Calculate the end index for slicing the dataset
    end_index = start_index + page_size

    # Get the data for the current page
    paginated_data = sorted_dataset[start_index:end_index]

    # Determine the next cursor
    next_cursor = paginated_data[-1]['id'] if paginated_data else None

    # Return the paginated data along with the current and next cursors
    return {
        "data": paginated_data,
        "cursor": cursor,
        "next_cursor": next_cursor
    }

# Example usage
dataset = [{"id": i, "value": f"Item {i}"} for i in range(1, 101)]  # A sample dataset with 100 items
cursor = None  # Initial request, so no cursor
page_size = 10

paginated_data = paginate_with_cursor(dataset, cursor, page_size)
print(paginated_data)
# Output:
# {
#   "data": [{"id": 1, "value": "Item 1"}, {"id": 2, "value": "Item 2"}, ..., {"id": 10, "value": "Item 10"}],
#   "cursor": None,
#   "next_cursor": 10
# }
```

### Explanation:

1. **Input Validation**:
   The function ensures that `page_size` is a positive integer. If not, it returns an empty data set with `None` for the cursors.

2. **Sort the Dataset**:
   The dataset is sorted by the unique identifier (assumed to be `'id'` in this example). This ensures consistent ordering.

3. **Find the Start Position**:
   If a cursor is provided, the function finds the starting position in the dataset by looking for the first item with an ID greater than the cursor. If no cursor is provided, it starts from the beginning.

4. **Calculate the End Index**:
   The end index is calculated as `start_index + page_size` to slice the dataset.

5. **Determine the Next Cursor**:
   The next cursor is set to the ID of the last item in the current page. If the current page is empty, the next cursor is `None`.

6. **Return the Data and Cursors**:
   The function returns a dictionary containing the paginated data, the current cursor, and the next cursor.

### Handling Deletions:
- If items are deleted from the dataset, the cursor-based approach ensures that the pagination remains consistent because it relies on unique IDs rather than fixed offsets.
- If items are added to the dataset, they will appear in subsequent pagination requests based on their IDs.

### Example with Deletions:
To demonstrate how the function handles deletions, let's delete some items from the dataset and paginate again:

```python
# Remove some items from the dataset
dataset = [item for item in dataset if item['id'] not in {3, 4, 5}]

# Paginate again using the previous next_cursor as the new cursor
cursor = paginated_data["next_cursor"]
paginated_data = paginate_with_cursor(dataset, cursor, page_size)
print(paginated_data)
# Output:
# {
#   "data": [{"id": 11, "value": "Item 11"}, {"id": 12, "value": "Item 12"}, ..., {"id": 20, "value": "Item 20"}],
#   "cursor": 10,
#   "next_cursor": 20
# }
```

In this example, the pagination continues smoothly despite the deletion of items, demonstrating the deletion-resilient nature of cursor-based pagination.

<br><p align="center">※※※※※※※※※※※※</p><br>
</details>



<!--==================================================-->
<br>

## Requirements
- All your files will be interpreted/compiled on Ubuntu 18.04 LTS using <code>python3</code> (version 3.7)
- All your files should end with a new line
- The first line of all your files should be exactly <code>#!/usr/bin/env python3</code>
- A <code>README.md</code> file, at the root of the folder of the project, is mandatory
- Your code should use the <code>pycodestyle</code> style (version 2.5.*)
- The length of your files will be tested using <code>wc</code>
- All your modules should have a documentation (<code>python3 -c 'print(__import__("my_module").__doc__)'</code>)
- All your functions should have a documentation (<code>python3 -c 'print(__import__("my_module").my_function.__doc__)'</code>
- A documentation is not a simple word, it’s a real sentence explaining what’s the purpose of the module, class or method (the length of it will be verified)
- All your functions and coroutines must be type-annotated.

<!--==================================================-->
<br>

## Setup: `Popular_Baby_Names.csv`
<a href="https://intranet.alxswe.com/rltoken/NBLY6mdKDBR9zWvNADwjjg" target="_blank" title="use this data file">use this data file</a> for your project


<!--==================================================-->
<br>

## Tasks
<details>
<summary>

### 0. Simple helper function
`mandatory`

File: [0-simple_helper_function.py]()
</summary>

<p>Write a function named <code>index_range</code> that takes two integer arguments <code>page</code> and <code>page_size</code>.</p>

<p>The function should return a tuple of size two containing a start index and an end index corresponding to the range of indexes to return in a list for those particular pagination parameters.</p>

<p>Page numbers are 1-indexed, i.e. the first page is page 1.</p>

<pre><code>bob@dylan:~$ cat 0-main.py
#!/usr/bin/env python3
"""
Main file
"""

index_range = __import__('0-simple_helper_function').index_range

res = index_range(1, 7)
print(type(res))
print(res)

res = index_range(page=3, page_size=15)
print(type(res))
print(res)

bob@dylan:~$ ./0-main.py
&lt;class 'tuple'&gt;
(0, 7)
&lt;class 'tuple'&gt;
(30, 45)
bob@dylan:~$
</code></pre>


</details>

<details>
<summary>

### 1. Simple pagination
`mandatory`

File: [1-simple_pagination.py]()
</summary>

<p>Copy <code>index_range</code> from the previous task and the following class into your code</p>

<pre><code>import csv
import math
from typing import List


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -&gt; List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -&gt; List[List]:
            pass
</code></pre>

<p>Implement a method named <code>get_page</code> that takes two integer arguments <code>page</code> with default value 1 and <code>page_size</code> with default value 10.</p>

<ul>
<li>You have to use this <a href="https://intranet.alxswe.com/rltoken/NBLY6mdKDBR9zWvNADwjjg" target="_blank" title="CSV file">CSV file</a> (same as the one presented at the top of the project)</li>
<li>Use <code>assert</code> to verify that both arguments are integers greater than 0.</li>
<li>Use <code>index_range</code> to find the correct indexes to paginate the dataset correctly and return the appropriate page of the dataset (i.e. the correct list of rows).</li>
<li>If the input arguments are out of range for the dataset, an empty list should be returned.</li>
</ul>

<pre><code>bob@dylan:~$  wc -l Popular_Baby_Names.csv 
19419 Popular_Baby_Names.csv
bob@dylan:~$  
bob@dylan:~$ head Popular_Baby_Names.csv
Year of Birth,Gender,Ethnicity,Child's First Name,Count,Rank
2016,FEMALE,ASIAN AND PACIFIC ISLANDER,Olivia,172,1
2016,FEMALE,ASIAN AND PACIFIC ISLANDER,Chloe,112,2
2016,FEMALE,ASIAN AND PACIFIC ISLANDER,Sophia,104,3
2016,FEMALE,ASIAN AND PACIFIC ISLANDER,Emma,99,4
2016,FEMALE,ASIAN AND PACIFIC ISLANDER,Emily,99,4
2016,FEMALE,ASIAN AND PACIFIC ISLANDER,Mia,79,5
2016,FEMALE,ASIAN AND PACIFIC ISLANDER,Charlotte,59,6
2016,FEMALE,ASIAN AND PACIFIC ISLANDER,Sarah,57,7
2016,FEMALE,ASIAN AND PACIFIC ISLANDER,Isabella,56,8
bob@dylan:~$  
bob@dylan:~$  cat 1-main.py
#!/usr/bin/env python3
"""
Main file
"""

Server = __import__('1-simple_pagination').Server

server = Server()

try:
    should_err = server.get_page(-10, 2)
except AssertionError:
    print("AssertionError raised with negative values")

try:
    should_err = server.get_page(0, 0)
except AssertionError:
    print("AssertionError raised with 0")

try:
    should_err = server.get_page(2, 'Bob')
except AssertionError:
    print("AssertionError raised when page and/or page_size are not ints")


print(server.get_page(1, 3))
print(server.get_page(3, 2))
print(server.get_page(3000, 100))

bob@dylan:~$ 
bob@dylan:~$ ./1-main.py
AssertionError raised with negative values
AssertionError raised with 0
AssertionError raised when page and/or page_size are not ints
[['2016', 'FEMALE', 'ASIAN AND PACIFIC ISLANDER', 'Olivia', '172', '1'], ['2016', 'FEMALE', 'ASIAN AND PACIFIC ISLANDER', 'Chloe', '112', '2'], ['2016', 'FEMALE', 'ASIAN AND PACIFIC ISLANDER', 'Sophia', '104', '3']]
[['2016', 'FEMALE', 'ASIAN AND PACIFIC ISLANDER', 'Emily', '99', '4'], ['2016', 'FEMALE', 'ASIAN AND PACIFIC ISLANDER', 'Mia', '79', '5']]
[]
bob@dylan:~$ 
</code></pre>


</details>

<details>
<summary>

### 2. Hypermedia pagination
`mandatory`

File: [2-hypermedia_pagination.py]()
</summary>

<p>Replicate code from the previous task.</p>

<p>Implement a <code>get_hyper</code> method that takes the same arguments (and defaults) as <code>get_page</code> and returns a dictionary containing the following key-value pairs:</p>

<ul>
<li><code>page_size</code>: the length of the returned dataset page</li>
<li><code>page</code>: the current page number</li>
<li><code>data</code>: the dataset page (equivalent to return from previous task)</li>
<li><code>next_page</code>: number of the next page, <code>None</code> if no next page</li>
<li><code>prev_page</code>: number of the previous page, <code>None</code> if no previous page</li>
<li><code>total_pages</code>: the total number of pages in the dataset as an integer</li>
</ul>

<p>Make sure to reuse <code>get_page</code> in your implementation. </p>

<p>You can use the <code>math</code> module if necessary.</p>

<pre><code>bob@dylan:~$ cat 2-main.py
#!/usr/bin/env python3
"""
Main file
"""

Server = __import__('2-hypermedia_pagination').Server

server = Server()

print(server.get_hyper(1, 2))
print("---")
print(server.get_hyper(2, 2))
print("---")
print(server.get_hyper(100, 3))
print("---")
print(server.get_hyper(3000, 100))

bob@dylan:~$ 
bob@dylan:~$ ./2-main.py
{'page_size': 2, 'page': 1, 'data': [['2016', 'FEMALE', 'ASIAN AND PACIFIC ISLANDER', 'Olivia', '172', '1'], ['2016', 'FEMALE', 'ASIAN AND PACIFIC ISLANDER', 'Chloe', '112', '2']], 'next_page': 2, 'prev_page': None, 'total_pages': 9709}
---
{'page_size': 2, 'page': 2, 'data': [['2016', 'FEMALE', 'ASIAN AND PACIFIC ISLANDER', 'Sophia', '104', '3'], ['2016', 'FEMALE', 'ASIAN AND PACIFIC ISLANDER', 'Emma', '99', '4']], 'next_page': 3, 'prev_page': 1, 'total_pages': 9709}
---
{'page_size': 3, 'page': 100, 'data': [['2016', 'FEMALE', 'BLACK NON HISPANIC', 'Londyn', '14', '39'], ['2016', 'FEMALE', 'BLACK NON HISPANIC', 'Amirah', '14', '39'], ['2016', 'FEMALE', 'BLACK NON HISPANIC', 'McKenzie', '14', '39']], 'next_page': 101, 'prev_page': 99, 'total_pages': 6473}
---
{'page_size': 0, 'page': 3000, 'data': [], 'next_page': None, 'prev_page': 2999, 'total_pages': 195}
bob@dylan:~$ 
</code></pre>


</details>

<details>
<summary>

### 3. Deletion-resilient hypermedia pagination
`mandatory`

File: [3-hypermedia_del_pagination.py]()
</summary>

<p>The goal here is that if between two queries, certain rows are removed from the dataset, the user does not miss items from dataset when changing page.</p>

<p>Start <code>3-hypermedia_del_pagination.py</code> with this code:</p>

<pre><code>#!/usr/bin/env python3
"""
Deletion-resilient hypermedia pagination
"""

import csv
import math
from typing import List


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -&gt; List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def indexed_dataset(self) -&gt; Dict[int, List]:
        """Dataset indexed by sorting position, starting at 0
        """
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            truncated_dataset = dataset[:1000]
            self.__indexed_dataset = {
                i: dataset[i] for i in range(len(dataset))
            }
        return self.__indexed_dataset

    def get_hyper_index(self, index: int = None, page_size: int = 10) -&gt; Dict:
            pass
</code></pre>

<p>Implement a <code>get_hyper_index</code> method with two integer arguments: <code>index</code> with a <code>None</code> default value and <code>page_size</code> with default value of 10.</p>

<ul>
<li>The method should return a dictionary with the following key-value pairs:

<ul>
<li><code>index</code>: the current start index of the return page. That is the index of the first item in the current page. For example if requesting page 3 with <code>page_size</code> 20, and no data was removed from the dataset, the current index should be 60.</li>
<li><code>next_index</code>: the next index to query with. That should be the index of the first item after the last item on the current page.</li>
<li><code>page_size</code>: the current page size</li>
<li><code>data</code>: the actual page of the dataset</li>
</ul></li>
</ul>

<p><strong>Requirements/Behavior</strong>:</p>

<ul>
<li>Use <code>assert</code> to verify that <code>index</code> is in a valid range.</li>
<li>If the user queries index 0, <code>page_size</code> 10, they will get rows indexed 0 to 9 included. </li>
<li>If they request the next index (10) with <code>page_size</code> 10, but rows 3, 6 and 7 were deleted, the user should still receive rows indexed 10 to 19 included.</li>
</ul>

<pre><code>bob@dylan:~$ cat 3-main.py
#!/usr/bin/env python3
"""
Main file
"""

Server = __import__('3-hypermedia_del_pagination').Server

server = Server()

server.indexed_dataset()

try:
    server.get_hyper_index(300000, 100)
except AssertionError:
    print("AssertionError raised when out of range")        


index = 3
page_size = 2

print("Nb items: {}".format(len(server._Server__indexed_dataset)))

# 1- request first index
res = server.get_hyper_index(index, page_size)
print(res)

# 2- request next index
print(server.get_hyper_index(res.get('next_index'), page_size))

# 3- remove the first index
del server._Server__indexed_dataset[res.get('index')]
print("Nb items: {}".format(len(server._Server__indexed_dataset)))

# 4- request again the initial index -&gt; the first data retreives is not the same as the first request
print(server.get_hyper_index(index, page_size))

# 5- request again initial next index -&gt; same data page as the request 2-
print(server.get_hyper_index(res.get('next_index'), page_size))

bob@dylan:~$ 
bob@dylan:~$ ./3-main.py
AssertionError raised when out of range
Nb items: 19418
{'index': 3, 'data': [['2016', 'FEMALE', 'ASIAN AND PACIFIC ISLANDER', 'Emma', '99', '4'], ['2016', 'FEMALE', 'ASIAN AND PACIFIC ISLANDER', 'Emily', '99', '4']], 'page_size': 2, 'next_index': 5}
{'index': 5, 'data': [['2016', 'FEMALE', 'ASIAN AND PACIFIC ISLANDER', 'Mia', '79', '5'], ['2016', 'FEMALE', 'ASIAN AND PACIFIC ISLANDER', 'Charlotte', '59', '6']], 'page_size': 2, 'next_index': 7}
Nb items: 19417
{'index': 3, 'data': [['2016', 'FEMALE', 'ASIAN AND PACIFIC ISLANDER', 'Emily', '99', '4'], ['2016', 'FEMALE', 'ASIAN AND PACIFIC ISLANDER', 'Mia', '79', '5']], 'page_size': 2, 'next_index': 6}
{'index': 5, 'data': [['2016', 'FEMALE', 'ASIAN AND PACIFIC ISLANDER', 'Mia', '79', '5'], ['2016', 'FEMALE', 'ASIAN AND PACIFIC ISLANDER', 'Charlotte', '59', '6']], 'page_size': 2, 'next_index': 7}
bob@dylan:~$ 
</code></pre>


</details>

