var some_function = function some_function(x) {
    if (x <= 1) {
        return 1;
    }
    return x * some_function(x-1);
}

console.log(typeof some_function == 'function')
console.log(some_function.name)

console.log(some_function(3));