/* undefined does not have a value assigned */
let x;
console.log(typeof x == 'undefined');

/* null should be used to return special conditions, i.e. no value */
function do_something() {
    return null;
}
x = do_something();
if (x == null){
    console.log('No value returned')
}

if (x){
    console.log('Some value returned')
} else {
    console.log('No value returned either')
}
