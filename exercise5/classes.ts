class Student {
    studentName: string;
    studentAge: number;
    studentGrade: number;

    constructor(name: string, age: number, grade:number) {
        this.studentAge = age;
        this.studentGrade = grade;
        this.studentName = name;
    }

    displayInfo(){
        console.log(this.studentName, this.studentAge, this.studentGrade);
    }

    isPassing(threshold:number) {
        return this.studentGrade > threshold;
    }
}

let Sam = new Student("Sam", 13, 86);
Sam.displayInfo();
console.log(Sam.isPassing(70));