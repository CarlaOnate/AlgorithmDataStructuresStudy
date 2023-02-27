// Problem 1.2 - page 90
// Check Permutation: Given two strings, write a method to decide if one is a permutation of the other.

const getCharCodeSum = (string) => {
    const splitString = string.split("");
    let currentCodeSum = 0;
    splitString.forEach((_, index) => currentCodeSum += string.charCodeAt(index)); // Assuming ASCII
    return currentCodeSum;
}

function main () {
    const stringA = "taco cat";
    const stringB = "cat taco";
    if (stringA.length !== stringB.length) return false;
    return  getCharCodeSum(stringA) === getCharCodeSum(stringB);
}