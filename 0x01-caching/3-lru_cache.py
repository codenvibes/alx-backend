#!/usr/bin/env python3
# AUTH: BNV
""" 3-lru_cache.py
This module provides a LRUCache class, which implements a caching system
based on the Least Recently Used (LRU) policy. The LRUCache class inherits
from a base class BaseCaching that provides basic caching functionalities.
"""
from base_caching import BaseCaching


class LRUCache(BaseCaching):
    """ LRUCache is a caching system using LRU policy
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
            # Remove the least recently used item
            lru_key = self.order.pop(0)
            del self.cache_data[lru_key]
            print(f"DISCARD: {lru_key}")

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
