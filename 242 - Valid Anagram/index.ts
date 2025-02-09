// Function that checks if two strings are anagrams of each other
// An anagram is a word formed by rearranging the letters of another word
function isAnagram(s: string, t: string): boolean {
    // If strings have different lengths, they can't be anagrams
    if (s.length !== t.length) {
        return false
    }

    // Get ASCII value of 'a' to use as offset for array indexing
    const startingIndex = 'a'.charCodeAt(0)
    // Create array with 26 slots (one for each lowercase letter) initialized to 0
    const alphabet = new Array(26).fill(0)
    
    // Iterate through both strings simultaneously
    for (let i = 0; i < s.length; i++) {
        // Increment count for letter from first string
        alphabet[s.charCodeAt(i) - startingIndex]++
        // Decrement count for letter from second string
        alphabet[t.charCodeAt(i) - startingIndex]--
    }

    // Check if all counts are zero
    // If any aren't zero, strings use different letters
    for (let i = 0; i < alphabet.length; i++) {
        if (alphabet[i] !== 0) {
            return false
        }
    }
    
    // If we get here, the strings are anagrams
    return true
};