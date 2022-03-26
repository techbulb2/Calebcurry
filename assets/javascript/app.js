{
    function pow(x, y, ...extra){
        console.log(this)
        console.log(arguments)
        console.log(extra)
        let total = 1;
        for(let i = 0; i < y; i++){
            total *= x;
        }
        return total;
    }
    function largest(x, ...extra){
        let largest = x;
        for (let i = 0; i < extra.length; i++){
            if (extra[i] > largest){
                largest = extra[i]
            }
        }

        return largest;
    }
    console.log(pow(30, 3, 4, 6, 3, 45, 2000))
}