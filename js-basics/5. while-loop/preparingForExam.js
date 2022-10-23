function preparingForExam(input){
let index = 0;
let unsatisfiedGrades = Number(input[index]);
index++;

let command = input[index];
index++;
let counter = 0;
let counterProblems = 0;
let sumGrade = 0;
let lastTask = "";
let isEnough = false

while(command !== "Enough"){
    let taskName = command;
    lastTask = taskName;
    let grade = Number(input[index]);
    index++
    counterProblems++

    sumGrade += grade;

    if(grade <= 4){
        counter++
    }
    if(counter === unsatisfiedGrades){
        console.log(`You need a break, ${counter} poor grades.`);
        isEnough = true;
        break;
    }
     command = input[index];
     index++

}

let avrg = sumGrade / counterProblems;

if(!isEnough){
console.log(`Average score: ${avrg.toFixed(2)}`);
console.log(`Number of problems: ${counterProblems}`);
console.log("Last problem:" + " " + lastTask)
}

}preparingForExam(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])


