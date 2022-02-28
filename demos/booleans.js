/* 
    The following elements are considered false in JavaScript:
        false
        0
        ""
        null
        undefined
        NaN 
*/

some_string = '';
if (!some_string){
    console.log("Empty string");
}

/*
    The following elements are considered true in JavaScript:
        objects
        non-empty strings
        non-zero numbers
        functions
*/
some_string = 'Welcome to JavaScript';
if (some_string) {
    console.log('Non empty string')
}