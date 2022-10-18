//Q4. This Triangular Number Sequence is generated from a pattern of dots that form a triangle. The first 5 numbers of the sequence, or dots, are:
//1, 3, 6, 10, 15

function triangular_series( n){
    let i, j = 1, k = 1;
 
    for (i = 1; i <= n; i++)
    {
        console.log(k+" ");
        j = j + 1; 
        k = k + j; 
    }
}
 
let n = 6;
triangular_series(n);