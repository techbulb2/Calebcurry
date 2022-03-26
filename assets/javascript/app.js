{
    //CALL AND APPLY

    function doStuff (input, input2){
        console.log(input, input2)
        console.log(this)
    }
    let args = [5, 10]
    doStuff.apply("hello",[ 5, 10])
}