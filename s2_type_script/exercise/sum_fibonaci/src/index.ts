// happy coding 👻
console.log("hello fibonaci");

function getFibonacci(n: number): number {
    if (n == 1 || n == 0) return 0;
    if (n == 2) return 1;
    return getFibonacci(n - 1) + getFibonacci(n - 2);
}

let a = parseInt(<string>prompt("Input number"));
let sum = 0;
for (let i = 1; i <= a; i++) {

    console.log(getFibonacci(i));
    sum += getFibonacci(i);
}
console.log(sum);