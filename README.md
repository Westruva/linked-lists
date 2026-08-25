# Recursion and Sorting Practice

This project contains a few small JavaScript algorithms that demonstrate recursive and iterative problem solving.

## Fibonacci sequence: iterative version

The `fibsIterate` function generates the first `n` numbers in the Fibonacci sequence without recursion.

It starts with two values, `a = 0` and `b = 1`. On each loop iteration, it pushes the current value of `a` to the result array and then updates the pair using:

```js
[a, b] = [b, a + b]
```

This keeps moving forward through the sequence until it has produced exactly `n` numbers. If `n` is less than or equal to `0`, it returns an empty array.

## Fibonacci sequence: recursive version

The `fibsRecursive` function solves the problem by breaking it into smaller versions of itself.

The base cases are:
- if `n <= 0`, return an empty array
- if `n === 1`, return `[0]`

For larger values, it calls `fibsRecursive(n - 1)` to compute the previous sequence, then adds the next Fibonacci value by looking at the last two numbers in that sequence. This creates a recursive chain until the base case is reached.

## Merge sort

The `mergeSort` function sorts an array using the divide-and-conquer strategy.

It works like this:
1. Split the array into two halves.
2. Recursively sort each half.
3. Merge the two sorted halves back together.

The merge step compares items from the left and right halves and appends the smaller one to a result array until both halves are exhausted. Any remaining items are then added at the end. This produces a fully sorted array.

These functions show two common patterns in programming:
- iteration for step-by-step loops
- recursion for breaking a problem into smaller subproblems
