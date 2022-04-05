{
    function User(){
        this.active = false;
    }

    User.prototype.sayHello = function(){
        return this.name + " says hi";
    }

    function Student(name, major){
        this.name = name;
        this.major = major;
    }
    Student.prototype = new User()
    function Teacher(name, teaching){
        this.name = name
        this.teaching = teaching
    }
    Teacher.prototype = new User()
    Teacher.prototype.sayHello = function(){
        return "Teacher says hello"
    }
    let student = new Student("Peasant student", "English")

    let teacher = new Teacher("caleb curry",  ["math", "science"])

    console.log(student, teacher)

    console.log(teacher instanceof Teacher)
    console.log(teacher instanceof User)

    if(Teacher instanceof Student){
        console.log("yup")
    }else {
        console.log("nope")
    }

    function doSomething(user){
        if (user instanceof User){
            return 5;
        }
        return -1;
    }
    console.log(doSomething("teacher"))
}