// Function that finds two numbers in an array that add up to a target sum
// Returns array containing indices of the two numbers
function twoSum(nums: number[], target: number): number[] {
    // Use a Map to store numbers we've seen and their indices
    const hashMap = new Map()

    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        // Calculate what number we need to find to reach target
        const find = target - nums[i]
        
        // Check if we've seen the number we need before
        if (hashMap.has(find)) {
            // Found a pair that adds to target - return both indices
            return new Array(hashMap.get(find), i)
        }
        
        // Haven't found pair yet - add current number and index to Map
        hashMap.set(nums[i], i)
    }

    // No solution found - return empty array
    return new Array()
};