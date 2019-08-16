function showvalues(){
    for (let i=0; i<5;i++){
        console.log(i);
    }
    console.log(i);
}
showvalues();

// Variables are defined using the keyword let.
// Variables can also declare by using the keyword var.
// The variables which are declared by using let, is only accessible withing that block.
// The variables which are declared by using ver, is accessible anywhere in the function.
// After compilation the let will be transpiled to var.