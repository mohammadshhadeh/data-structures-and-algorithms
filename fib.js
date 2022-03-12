const fib = (n, memo = {}) => {
    if (n in memo) return memo[n];
    if (n <= 2) return 1;

    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
}



// 1 1 2 3 5 8 13 21 34
console.log(fib(7)) // 13
console.log(fib(1)) // 1
console.log(fib(3)) // 2
console.log(fib(50)) // 12586269025