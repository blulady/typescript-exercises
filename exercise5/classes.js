var Student = /** @class */ (function () {
    function Student(name, age, grade) {
        this.studentAge = age;
        this.studentGrade = grade;
        this.studentName = name;
    }
    Student.prototype.displayInfo = function () {
        console.log(this.studentName, this.studentAge, this.studentGrade);
    };
    Student.prototype.isPassing = function (threshold) {
        return this.studentGrade > threshold;
    };
    return Student;
}());
var Sam = new Student("Sam", 13, 86);
Sam.displayInfo();
console.log(Sam.isPassing(70));
