function misc_function() {
    var x;
    console.log(x);
    x = 2; 
}

function misc_function_too() {
    x = 2;
    console.log(x);
    var x;
}

misc_function();
misc_function_too();

