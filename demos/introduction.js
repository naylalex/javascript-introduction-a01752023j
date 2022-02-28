/* JavaScript, similar to C*/
console.log('Math');
i = 3;
i = i * 3 + 3 + (i /5);
console.log(i) 

console.log('while');
my_value = 0;
while (i >= 10) {
    my_value += i*i;
    i--;
}
console.log(my_value);

console.log('for');
for (i = 0; i < 10; i++){
    console.log(i);
}
console.log('factorial function');
function factorial(num){
    if (num === 0 || num === 1) {
        return num;
    }
    return num * factorial(num -1);
}
let n = factorial(4);
console.log(n);

console.log('Functions can be used before they are defined')
if (i < 3) {
        i = mirror(i);
    }
    else {
        i = i *.03;
    }
console.log(i);
function mirror(i) {return i};

