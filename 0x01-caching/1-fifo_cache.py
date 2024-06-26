#!/usr/bin/env python3
# AUTH: BNV
""" 1-fifo_cache.py
This module defines a caching system implemented by the FIFOCache class,
which inherits from BaseCaching utilizes a First-In-First-Out (FIFO)
eviction policy to manage cached items.
"""
from base_caching import BaseCaching


class FIFOCache(BaseCaching):
    """ FIFOCache is a caching system using the FIFO policy
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
            # Find the 1st item added (oldest item)
            oldest_key = next(iter(self.cache_data))
            # Remove the oldest item
            del self.cache_data[oldest_key]
            print(f"DISCARD: {oldest_key}")

        # Add new item
        self.cache_data[key] = item

    def get(self, key):
        """ Get an item by key
        """
        if key is None or key not in self.cache_data:
            return None
        return self.cache_data[key]
