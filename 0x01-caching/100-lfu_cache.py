#!/usr/bin/env python3
# AUTH: BNV
""" 100-lfu_cache.py
The LFUCache class inherits from BaseCaching and implements a caching system
using the Least Frequently Used (LFU) eviction policy.
"""
from base_caching import BaseCaching


class LFUCache(BaseCaching):
    """ LFUCache is a caching system using LFU policy
    """

    def __init__(self):
        """ Initialize
        """
        super().__init__()
        self.usage_frequency = {}
        self.frequency_order = {}

    def update_frequency(self, key):
        """ Update frequency of access for a key
        """
        if key in self.usage_frequency:
            frequency = self.usage_frequency[key]
            self.frequency_order[frequency].remove(key)
            if not self.frequency_order[frequency]:
                del self.frequency_order[frequency]

            self.usage_frequency[key] += 1
        else:
            self.usage_frequency[key] = 1

        if self.usage_frequency[key] not in self.frequency_order:
            self.frequency_order[self.usage_frequency[key]] = []

        self.frequency_order[self.usage_frequency[key]].append(key)

    def put(self, key, item):
        """ Add an item in the cache
        """
        if key is None or item is None:
            return

        # Check if key is already in the cache
        if key in self.cache_data:
            self.cache_data[key] = item
            self.update_frequency(key)
            return

        # Add the item to the cache
        self.cache_data[key] = item
        self.update_frequency(key)

        # Check if cache exceeds its capacity
        if len(self.cache_data) > self.MAX_ITEMS:
            min_freq = min(self.frequency_order.keys())
            lfu_keys = self.frequency_order[min_freq]
            if len(lfu_keys) > 1:
                # Use LRU to discard only the least recently used of the
                # least frequently used items
                lru_key = lfu_keys.pop(0)
                del self.cache_data[lru_key]
                print(f"DISCARD: {lru_key}")
                if not lfu_keys:
                    del self.frequency_order[min_freq]
            else:
                lfu_key = lfu_keys[0]
                del self.cache_data[lfu_key]
                print(f"DISCARD: {lfu_key}")
                del self.frequency_order[min_freq]

    def get(self, key):
        """ Get an item by key
        """
        if key is None or key not in self.cache_data:
            return None

        self.update_frequency(key)
        return self.cache_data[key]
