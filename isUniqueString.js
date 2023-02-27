// Problem 1.1 - page 90
//  Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

const isUnique = () => {
    const input = "abcsdf"; //Not unique
    const sortedString = input.split("").sort();

    console.log(sortedString);
    const maxComparingIndex = sortedString.length - 1;
    for (let index = 0; index < sortedString.length; index++) { // O(n - 1)
        if (index < maxComparingIndex) {
            const currentElement = sortedString[index];
            if (currentElement === sortedString[index + 1]) {
                return false;
            }
        }
    }
    return true;
}

console.log(isUnique());
