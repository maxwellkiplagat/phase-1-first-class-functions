function receivesAFunction(cb) {
    cb();
    
}
function returnsANamedFunction() {
    function namedFunction() {
        console.log("I am a named function!");
    }
    return namedFunction; 
}


const func = returnsANamedFunction(); 
func(); 
function returnsAnAnonymousFunction() {
    return function () {
        console.log("I am an anonymous function!");
    };
}


const anonFunc = returnsAnAnonymousFunction();
anonFunc(); 

