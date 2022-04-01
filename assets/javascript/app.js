{
    function User (name, interests){
        this.name = name;
        this.interests = interests;
    }

    function newUser(name, interests){
        let person = {
            name: name,
            interests: interests
        }

        return person;
    }
    let me = new User("caleb", ["cooking", "eating", "exercise"]);
    let you = newUser("camila", ["hotwheels"])

    console.log(me, you)
    me.membership = "Gold"
    console.log (me)
}