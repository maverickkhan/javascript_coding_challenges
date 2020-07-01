var firstName = prompt("Enter His Name");
var age = prompt("Enter Age");
if (age < 13) {
    console.log(firstName + " is a boy!");
} else if (age >= 13 && age <= 20) {
    console.log(firstName + " is a Teenager!");
} else if (age > 20 && age < 30) {
    console.log(firstName + " is a Young man!");
} else {
    console.log(firstName + " is a man!")
}