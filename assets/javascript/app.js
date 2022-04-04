{
    let user = {
        active: true,
        sayHello: function(){
            return this.name + " says hi"
        }
    }

    let student = {
        major: "english",
        name: "Peasant student"
    }

    let teacher = {
        teaching: ["math", "science"],
        name: "caleb curry",
        sayHello: function(){
            let message = this.name + " teaches "
            this.teaching.forEach(function(e){
                message += e + " ";
            })
            return message;
        }
    }

    Object.setPrototypeOf(student, user)

    Object.setPrototypeOf(teacher, user)

    student.active = false;

    let newMembers = [teacher, student]

    newMembers.forEach(function(e){
        console.log(e.sayHello())
    })

    console.log("Name in teacher", teacher.hasOwnProperty("name"))

    console.log("Name in teacher", teacher.name === undefined)

    console.log(teacher)

}