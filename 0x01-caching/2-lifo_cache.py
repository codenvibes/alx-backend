#!/usr/bin/env python3
# AUTH: BNV
"""2-lifo_cache.py
This module is a caching system using the Last-In-First-Out (LIFO) policy.
It defines a class `LIFOCache` that inherits from `BaseCaching` and
provides methods for adding and retrieving items from the cache.
"""
from base_caching import BaseCaching


class LIFOCache(BaseCaching):
    """ LIFOCache is a caching system using LIFO policy
    """
    def __init__(self):
        """ Initialize
        """
        super().__init__()

    def put(self, key, item):
        """ Add an item in the cache
        """
        if key is None or item is None:
            return

        # Check if cache is full
        if len(self.cache_data) >= self.MAX_ITEMS:
            # Get the last key added (most recently added)
            last_key = list(self.cache_data.keys())[-1]
            # Remove the last item added
            del self.cache_data[last_key]
            print(f"DISCARD: {last_key}")

        # Add new item
        self.cache_data[key] = item

    def get(self, key):
        """ Get an item by key
        """
        if key is None or key not in self.cache_data:
            return None
        return self.cache_data.get(key)
