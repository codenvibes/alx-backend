#!/usr/bin/env python3
# AUTH: bugsnvibes
"""
This module provides a Server class for paginating a dataset of popular baby
names.
"""

import csv
from typing import List, Dict, Any


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """Dataset indexed by sorting position, starting at 0
        """
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            self.__indexed_dataset = {
                i: dataset[i] for i in range(len(dataset))
            }
        return self.__indexed_dataset

    def get_hyper_index(self, index: int = None, page_size: int = 10) -> Dict:
        """
        Retrieves a portion of the dataset with pagination.

        Args:
            index (int): The starting index of the dataset to retrieve.
            page_size (int): The number of rows to retrieve.

        Returns:
            Dict: A dictionary containing the following key-value pairs:
                - "index" (int): The starting index of the retrieved portion.
                - "data" (List): The list of rows retrieved from the dataset.
                - "page_size" (int): The number of rows retrieved.
                - "next_index" (int): The index of the next portion to
                  retrieve.
        """
        assert type(index) is int
        assert type(page_size) is int
        csv = self.indexed_dataset()
        csv_size = len(csv)
        assert 0 <= index < csv_size
        data = []
        _next = index
        for _ in range(page_size):
            while not csv.get(_next):
                _next += 1
            data.append(csv.get(_next))
            _next += 1
        return {
            "index": index,
            "data": data,
            "page_size": page_size,
            "next_index": _next
        }
