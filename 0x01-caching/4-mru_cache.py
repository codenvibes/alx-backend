#!/usr/bin/env python3
# AUTH: BNV
""" 4-mru_cache.py
This module provides a caching system that implements the Most Recently Used
(MRU) caching algorithm. It inherits from the BaseCaching class and overrides
the put and get methods to manage cache items based on their usage.
"""
from base_caching import BaseCaching


class MRUCache(BaseCaching):
    """ MRUCache is a caching system using MRU policy
    """

    def __init__(self):
        """ Initialize
        """
        super().__init__()
        self.order = []

    def put(self, key, item):
        """ Add an item in the cache
        """
        if key is None or item is None:
            return

        # Check if key is already in the cache
        if key in self.cache_data:
            self.order.remove(key)
        elif len(self.cache_data) >= self.MAX_ITEMS:
            # Remove the most recently used item
            mru_key = self.order.pop()
            del self.cache_data[mru_key]
            print(f"DISCARD: {mru_key}")

        # Add the item to the cache and update the order
        self.cache_data[key] = item
        self.order.append(key)

    def get(self, key):
        """ Get an item by key
        """
        if key is None or key not in self.cache_data:
            return None

        # Move the accessed key to the end to mark it as recently used
        self.order.remove(key)
        self.order.append(key)
        return self.cache_data[key]
