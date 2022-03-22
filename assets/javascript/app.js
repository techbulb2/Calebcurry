{
    let grades = [12, 34, 52, 45, 35, 356, 98, 84, 783, 29];
    grades.length = 30;
    grades[34] = 40;

    let count = 0;
    let total = 0;

    console.log(grades);

    let largest = grades[0];

    for (let i = 0; i < grades.length; i++){
        if (grades[i] !== undefined){
            count++;
            total += grades[i];
        }

        if (grades[i] > largest){
            
            largest = grades[i];
        }


    }


    let avg = total / count;
    console.log(avg);

    console.log(largest)

}