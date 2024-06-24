Pagination is the process of dividing a large dataset into smaller, manageable subsets (pages) to make data presentation and navigation more efficient and user-friendly. Instead of displaying an entire dataset at once, pagination allows users to navigate through the data in chunks, typically through a series of numbered pages.

### Pagination in Web Applications:

In web applications, pagination is often implemented with UI elements like "Next" and "Previous" buttons, or direct page number links, to allow users to easily move between pages. Server-side or client-side code handles fetching and displaying the correct subset of data based on the user's actions.

### Key Concepts of Pagination:

1. **Page**: A subset of the dataset that represents one segment or "page" of the entire dataset.
2. **Page Size**: The number of items displayed on each page.
3. **Page Number**: The current page being viewed.

### Why Use Pagination?

- **Improved User Experience**: Loading and displaying a large dataset can be slow and overwhelming. Pagination helps by breaking it down into smaller parts.
- **Performance**: Reduces the amount of data processed and rendered at one time, leading to faster load times and better performance.
- **Navigation**: Allows users to easily navigate through large datasets using page numbers, next/previous buttons, etc.

### Example of Pagination in a Web Context:

Imagine a website displaying a list of 1000 products. Instead of showing all products on a single page, the website might display 10 products per page. This would result in 100 pages (1000 products / 10 products per page).

### How Pagination Works:

1. **Determine the Total Number of Pages**:
   - This is calculated based on the total number of items in the dataset and the page size.
   - Total Pages = (Total Items + Page Size - 1) // Page Size

2. **Calculate the Items for the Current Page**:
   - For a given page number, determine the starting and ending indices of the items to be displayed.
   - Start Index = (Page Number - 1) * Page Size
   - End Index = Start Index + Page Size

3. **Display the Items for the Current Page**:
   - Use the calculated indices to slice the dataset and display only the relevant items.

### Example in Practice:

#### Dataset
```python
dataset = list(range(1, 101))  # A dataset with 100 items
```

#### Pagination Function
```python
def paginate(dataset, page, page_size):
    total_items = len(dataset)
    total_pages = (total_items + page_size - 1) // page_size
    
    if page < 1 or page > total_pages:
        return {
            "data": [],
            "page": page,
            "page_size": page_size,
            "total_pages": total_pages,
            "total_items": total_items
        }

    start_index = (page - 1) * page_size
    end_index = start_index + page_size

    return {
        "data": dataset[start_index:end_index],
        "page": page,
        "page_size": page_size,
        "total_pages": total_pages,
        "total_items": total_items
    }

# Example Usage
page = 2
page_size = 10

paginated_data = paginate(dataset, page, page_size)
print(paginated_data)
```

#### Output
```json
{
    "data": [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    "page": 2,
    "page_size": 10,
    "total_pages": 10,
    "total_items": 100
}
```

