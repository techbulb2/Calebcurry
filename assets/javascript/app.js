{
    let myButton = document.getElementById("clickme")
    myButton.style.backgroundColor = "red";

    myButton.onclick = function(){
        myButton.style.backgroundColor = "green";
        myButton.disabled = true
    }
}

