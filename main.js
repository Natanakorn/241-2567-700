/*
&&เเละ
||หรือ
! not หรือ ไม่
*/
/*
let number1 =5;
let number2 =8;

let condition = number1 >= 3 && number2>=10;
console.log('result of condition', condition);

let age = 30;
let gender ='male'

// true && true = true
if(age >= 20 && gender == 'male'){
    console.log('You are male adult');
}
*/
/*
let number = 20;

if(!(number%2==0)){
    console.log('you are even nimber');
}
*/
/*
let counter = 0;
console.log("while loop");

while(counter <10){//true
    console.log("while loop");
    counter = counter +1;
    counter++;
}

for(let counter =0; counter < 10; counter =counter + 1){
    console.log('for loop');
}
*/
/*
let age1 = 20;
let age2 = 30;
let age3 = 40;
let age4 = 50;
console.log(age1,age2,age3,age4);

let ages =[30,35,40,45,50];
console.log(ages);
ages.sort();
console.log(ages);

let name_list=['john','Bob','Alice','Mary'];
name_list.push('Mike');
console.log(name_list.length);
console.log(name_list[0]);
console.log(name_list[1]);
console.log(name_list[2]);

for(let index = 0; index<= name_list.length; index++){
    console.log('name_list',name_list[index]);
}
*/
/*
object
*/
/*
let student = [{
    name:  'zz',
    age: 90,
    grade:'A'
},{
    name:  'aa',
    age: 66,
    grade:'B'
}];

for(let index = 0; index <student.length;index++){
    console.log('student number', (index+1));
    console.log('name',student[index].name);
    console.log('age',student[index].age);
    console.log('grade',student[index].grade);
}
*/
/*
object+array
*/
/*
let scores =50
let grade = ''
function calculateGrade(scores) =>{
    if(scores>=80){
        grade='A'
    }else if (scores>=70){
        grade='B'
    }else if (scores>=60){
        grade='C'
    }else if (scores>=50){
        grade='D'
    }else{
        grade= 'F'
    }
    return grade
}
let student1 = calculateGrade(scores1)
let student2 = calculateGrade(scores2)
console.log('grad:',student1,student2)
*/
/*
array
*/
/*
let scores = [10,20,30,40];
//let newScortes =[]

for(let index = 0; index < scores.length; index++){
    console.log(scores[index]);
/*
    if(scores[index]>=30){
        newScortes.push(scores[index]);
    }
        
}
let newScortes = scores.filter((score)=>{
    return score >=20;
})

newScortes.forEach((ns)=>{
    console.log('New score',ns);
})
*/
/*
ojbect function
*/
let student = [
    {
        name: 'John',
        scores: 90,
        grade: 'A'
    },
    {
        name: 'Jane',
        scores: 75,
        grade: 'B'
    }
    {
        name: 'Jim',
        scores: 60,
        grade: 'C'
    }
]
let students =students.find((s)=>{
    if (s.name === "Jane"){
    return s;
    }
})
let doubleScores = students.map((s)=>{
    s.scores = s.scores * 2
})
let highScores_students = students.filter((s)=>{
    if(s.scores >= 80){
        return true
    }
})
console.log('student:',student)
console.log('highScores_student',highScores_student)
