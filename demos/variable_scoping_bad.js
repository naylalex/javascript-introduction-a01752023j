/* Variable scoping */
function bad_scope() {
    console.log('Value is: ', val);
    for (var i = 0; i < 10; i++){
        var val = 'some string';
        console.log(val)
    }
}
bad_scope()