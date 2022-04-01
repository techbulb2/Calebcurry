{
    function dosomething(){
        throw {
            error: "broke", code: -1
        }
    }

    try {
        dosomething();
    }catch (e){
        console.log(e)
        console.log("Error")
    }finally {
        console.log("wrapping things up...")
    }
}