#!/usr/bin/env python3
# AUTH: bugsnvibes
"""
A module for paginating a database of popular baby names.
"""
import csv
import math
from typing import List, Tuple, Dict, Any


def index_range(page: int, page_size: int) -> Tuple:
    """
    Calculate the start and end indices for pagination based on the page
    number and page size.

    Args:
        page (int): The current page number (1-indexed).
        page_size (int): The number of items per page.

    Returns:
        Tuple[int, int]: A tuple containing the start index and end index
        for the given page.
    """
    start_index = (page - 1) * page_size
    end_index = page * page_size
    return (start_index, end_index)


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """
        Returns a page of the dataset based on the given page number and page
        size.

        Args:
            page (int): The current page number (1-indexed). Must be a
            positive integer.
            page_size (int): The number of items per page. Must be a positive
            integer.

        Returns:
            List[List]: A list of lists containing the items on the specified
            page.
        """
        assert isinstance(page, int) and page > 0, \
            "Page number must be an integer greater than 0."
        assert isinstance(page_size, int) and page_size > 0, \
            "Page size must be an integer greater than 0."

        start_index, end_index = index_range(page, page_size)
        dataset = self.dataset()

        return dataset[start_index:end_index]

    def get_hyper(self, page: int = 1, page_size: int = 10) -> Dict[str, Any]:
        """
        Returns a dictionary containing pagination information.

        Args:
            page (int): The current page number (1-indexed). Must be a
            positive integer.
            page_size (int): The number of items per page. Must be a positive
            integer.

        Returns:
            Dict[str, Any]: A dictionary containing the following key-value
            pairs:
                - page_size (int): The length of the returned dataset page.
                - page (int): The current page number.
                - data (List[List]): The dataset page.
                - next_page (int or None): The number of the next page, or
                  None if no next page.
                - prev_page (int or None): The number of the previous page, or
                  None if no previous page.
                - total_pages (int): The total number of pages in the dataset.
        """
        data = self.get_page(page, page_size)
        total_items = len(self.dataset())
        total_pages = math.ceil(total_items / page_size)

        next_page = page + 1 if page < total_pages else None
        prev_page = page - 1 if page > 1 else None

        return {
            "page_size": len(data),
            "page": page,
            "data": data,
            "next_page": next_page,
            "prev_page": prev_page,
            "total_pages": total_pages
        }
