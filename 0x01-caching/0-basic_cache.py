#!/usr/bin/env python3
# AUTH: bugsnvives
"""0-basic_cache.py
This module defines a basic caching system using the BasicCache class,
which inherits from BaseCaching.
"""
from base_caching import BaseCaching


class BasicCache(BaseCaching):
    """
    BasicCache is a caching system with no limit
    """

    def put(self, key, item):
        """Add an item in the cache
        """
        if key is not None and item is not None:
            self.cache_data[key] = item

    def get(self, key):
        """ Get an item by key
        """
        if key is None:
            return None
        return self.cache_data.get(key)
