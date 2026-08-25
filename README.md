# Linked Lists Project Summary

## What I have been working on

I built a full singly linked list implementation in JavaScript with a dedicated node class and a list class.

### Core structure

- ListNode class with value and next
- LinkedList class with internal head and tail references
- Length tracking for efficient size checks

### Core operations implemented

- append(value)
- prepend(value)
- insert(index, value)
- remove(index)
- pop()
- shift()
- size()
- head()
- tail()
- at(index)
- contains(value)
- findIndex(value)
- get(index)
- set(index, value)
- clear()
- isEmpty()
- toArray()
- print()
- toString()

### Additional progress

- Refactored internal fields to _head and _tail so head() and tail() can exist as methods without name conflicts
- Updated indentation style to tabs across the linked list implementation
- Added a usage example that builds a list of animals and prints it
- Updated exports to named exports:
	- export { LinkedList, ListNode }

### Current project status

The linked list implementation is feature-complete for common singly linked list operations and ready for testing and extension.
