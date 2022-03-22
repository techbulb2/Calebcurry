{
    let grades = [12, 4, 53, 898, 28, 84, 98, 88];
    grades.length = 30;
    grades[34] = 40;

    let IndexLargest = grades[0];

    for (let i = 0; i < grades.length; i++){
        if(grades[i] > IndexLargest){
            IndexLargest = grades[i]
            //index of the largest number in the array
            console.log(grades.indexOf(IndexLargest))
        }
    }
    // console.log(IndexLargest + " index of " + grades[i]);
}