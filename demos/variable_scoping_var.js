var globalVar;

function my_function(){
    var localVar;
    if (globalVar > 0) {
        var localVar = 2;
        console.log(localVar);
    }
    console.log(localVar);
}
my_function();