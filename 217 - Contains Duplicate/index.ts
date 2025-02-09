// Function that checks if an array contains any duplicate numbers
function containsDuplicate(nums: number[]): boolean {
    // Flag to track if we found a duplicate
    let val = false

    // Use a Map to store numbers we've seen
    const hashMap = new Map()
    
    // Iterate through array until we find a duplicate or reach the end
    nums.every((num, index) => {
        if (index === 0) {
            // For first number, just add it to Map
            hashMap.set(num, num)
        } else {
            // For subsequent numbers, check if we've seen it before
            if (hashMap.has(num)) {
                // Found a duplicate - set flag and break loop
                val = true
                return false
            } else {
                // New number - add it to Map
                hashMap.set(num, num)
            }
        }
        // Continue loop
        return true
    })
    
    return val
};