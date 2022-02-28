/* Variable scoping, good */
function good_scope(){
    console.log('Vals is: ', val);
    for(var i = 0; i<10; i++){
        var val = "Other string";
        console.log(val)
    }
}
good_scope()