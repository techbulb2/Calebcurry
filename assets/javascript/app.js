{
    //CALL AND APPLY

    function doStuff (input, input2){
        console.log(input, input2)
        console.log(this)
    }

    let me = {name: "caleb"}
    let newFunction = doStuff.bind(me, 5, 10)
    newFunction()
}