var mark = {
    fullName: 'Mark Thomas',
    mass: 67,
    height: 1.8,
    calcBmi: function() {
        this.BMI = this.mass / (this.height * this.height);
    }
};
mark.calcBmi();
console.log(mark);

var john = {
    fullName: "John Smith",
    mass: 70,
    height: 2.1,
    calcBmi: function() {
        this.BMI = this.mass / (this.height * this.height)
    }
};
john.calcBmi();
console.log(john);

if (john.BMI > mark.BMI) {
    console.log(john.fullName + ' has the higher bmi, which is ' + john.BMI);
} else if (mark.BMI > john.BMI) {
    console.log(mark.fullName + ' has the higher bmi, which is ' + mark.BMI);
} else {
    console.log('Both has equal BMI');
};