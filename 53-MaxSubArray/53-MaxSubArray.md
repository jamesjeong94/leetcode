Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Follow up:

If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

# Use kadane's algorithm

We can determine the local max of the next index by adding the value at the next index to the current local max. Whichever is higher, either the value itself or the local max, will be the new local max.
