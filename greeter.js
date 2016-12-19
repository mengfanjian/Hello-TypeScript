class Student {
    constructor(fiestName, lastName) {
        this.firstName = fiestName;
        this.lastName = lastName;
    }
    greeter() {
        return "Hello" + " " + this.firstName + this.lastName;
    }
}
var user = new Student("Type", "Script");
// document.body.innerHTML = user.greeter();
document.body.innerHTML = user.greeter();
//# sourceMappingURL=greeter.js.map
