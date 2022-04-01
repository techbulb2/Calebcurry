{
    function User (name, interests){
        this.name = name;
        this.interests = interests;
    }
    User.prototype.greet = function(){
        console.log("my name is " + this.name, this.interests)
    }   
   

    let me = new User("caleb", ["cooking", "eating", "exercise"]);
    let you = new User("camila", ["hotwheels"])

    console.log(me, you)

    me.greet();
    you.greet();
}