{
    let grades = [
        [12, 152, 35, 25, 63, 24], 
        [23, 42, 13, 215, 54, 63], 
        [46, 12, 53, 2135, 34, 3],
        [3, 454, 86, 725, 79, 24],
        [12, 6, 56, 23, 23, 24]
    ];

    // for (let i = 0; i < grades.length; i++){

    //     for(let k = 0; k < grades[i].length; k++){
    //         console.log(grades[i][k])
    //     }

    //     console.log("-----------------")
    // }

    grades.forEach(function(row){
        row.forEach(function(col){
            console.log(col)
        })
        console.log("~~~~~~~~~~~~~~~~")
    })
}