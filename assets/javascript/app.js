{
    let d = document.getElementById("destination")
    for (let i = 0; i < 10; i++){
        for (let k = i; k >= 0; k--){
            d.append(k + "");
        }
        var br = document.createElement('br')
        d.appendChild(br)
    }
}