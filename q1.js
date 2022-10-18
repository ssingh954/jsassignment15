//Q1. Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.

function find_length(s1 , s2){
    if (s1 <= 0 || s2 <= 0){
        console.log(-1);
        return;
    }
    var max_length = s1 + s2 - 1;
    var min_length = Math.max(s1, s2) - Math.min(s1, s2) + 1;

    if (min_length > max_length){
        console.log(-1);
        return;
    }

    console.log("Max = " + max_length);
    console.log("Min = " + min_length);
}

// Driver code
var s1 = 8, s2 = 10;
find_length(s1, s2);