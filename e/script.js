// //GENERATING ARRAYS
let array1 = [];
for (let i = 1; i <= 1000; i++) {
    if (i % 3 == 0)
        array1.push(i);
}

let array2 = [];
for (let i = 1; i <= 1000; i++) {
    if (i % 2 == 0) {
        if (i % 4 == 0)
            array2.push(i);
    }
}
let array3 = [];
for (let i = 1; i <= 1000; i++) {
    if (i % 10 == 1)
        array3.push(i);
}
//CLEANING ARRAYS

let test = [true, false, 12, 13, 44, 2345, "Bob", "Jill", false, undefined, 1000, null, "Jack", "", "", 99, "Greg", undefined, NaN, 1, 22];

function cleanEverythingButStrings(array) {
    let newArray = [];
    for (let i = 0; i <= array.length; i++) {
        if (typeof array[i] === "string")
            newArray.push(array[i]);
    }
    return newArray;
}
console.log(cleanEverythingButStrings(test));


function cleanEverythingButNumbers(array) {
    let newArray = [];
    for (let i = 0; i <= array.length; i++) {
        if (typeof array[i] === "number" && !isNaN(array[i]))
            newArray.push(array[i]);
    }
    return newArray;
}
console.log(cleanEverythingButNumbers(test));

function cleanUndefined(array) {
    let newArray = [];
    for (let i = 0; i <= array.length; i++) {
        if (typeof isNaN(array[i]))
            newArray.slice(array[i]);
    }
    return newArray;
}
function changeBackground(color){
    document.body.style.backgroundColor="red";
}
document.getElementById("text");
function Student (firstName, lastName, birthYear, academy, grades){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.academy = academy;
    this.grades = grades;

    
    this.getAge = function(){
        return birthYear;
    }
    this.getInfo = function(){
        return (`This is student ${'firstName'} ${'lastName'}, from the academy ${'academy'}`)
    }
    this.getAvarageGrade = function(){
        return 
    }
}