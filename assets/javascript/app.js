{
    function fact(x){
        let total = 5;
        for (let i = x; i > 1; i--){
            total *= i;
        }
        return total;
    }
    console.log(fact(5))

    document.getElementById("lemons").onclick = () => {console.log("clicked")}
    document.getElementById("lemons").onmouseover = () => {console.log("mouseover")}
}