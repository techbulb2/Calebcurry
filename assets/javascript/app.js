{
    let  myString = "search this string baby";
    let charToSearch = "c";
    for(let i = 0; i < myString.length; i++){
        if (myString[i] === charToSearch){
            console.log(myString[i] + " is found at index " + i);
        }
    }
}