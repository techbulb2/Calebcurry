{
    let me = {
        name: "caleb",
        outputMe: function(){
            console.log(this)
            console.log(this.name)
        }
    }

    function outputMe(){
        console.log(this)
        // console.log(this.name)
    }

    function outputMeStrict(){
        'use strict';
        console.log(this)
    }

    function Person(){
        // console.log(this)
        this.name = "Caleb"
        console.log(this)
    }

    me.outputMe()
    outputMe()
    outputMeStrict()
    let person = new Person()
}