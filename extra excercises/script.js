function convertMinutesIntoSeconds(minutes) {
    if (minutes > 0) {
        let seconds = minutes * 60;
        return seconds;
    }
    else
        return -1;
}
console.log(convertMinutesIntoSeconds(5));

console.log(convertMinutesIntoSeconds(3));

console.log(convertMinutesIntoSeconds(2));

function nextNumber(i) {
    let next = i + 1;
    console.log(`The number after ${i} is ${next}`);
}
console.log(nextNumber(0));

console.log(nextNumber(2));

console.log(nextNumber(-3));

function convertHoursIntoSeconds(hours) {
    if (hours > 0) {
        let minutes = hours * 60;
        let seconds = convertMinutesIntoSeconds(minutes);
        return seconds;
    }
    else
        return -1;
}
console.log(convertHoursIntoSeconds(2)); //should return 7200.

console.log(convertHoursIntoSeconds(10)); //should return 36000.

console.log(convertHoursIntoSeconds(24)); //should return 86400.

function remainder(i, j) {
    if (i == 0 || j == 0) {
        return -1;
    }
    else
        return i % j;
}

console.log(remainder(1, 3));

console.log(remainder(5, 5));

function farmProblem(chicken, cow, pig) {
    if (chicken < 0 || cow < 0 || pig < 0)
        return -1;
    else {
        let sum = chicken * 2 + cow * 4 + pig * 4;
        return sum;
    }
}
console.log(farmProblem(2, 3, 5)); //2*2 + 3*4 + 5*4 = 4+12+20=36

console.log(farmProblem(1, 2, 3)); // 22

console.log(farmProblem(5, 2, 8)); // 50 

function compare(str1, str2) {
    let length1 = str1.length;
    let length2 = str2.length;
    if (length1 == length2)
        return true;
    else
        return false;
}

console.log(compare("Timotej", "Timotej")); //true

console.log(compare("Trajan", "Timotej")); //false

console.log(compare("Machka", "Kuche")); //false

function isPlural(word) {
    let check = word.endsWith("s");
    return check;
}
console.log(isPlural("Cats")); //true

console.log(isPlural("Cat"));  //false

console.log(isPlural("Worlds"));  //true

function match(word1, word2) {
    let a = word1.toLowerCase();
    let b = word2.toLowerCase();
    return a == b;
}
console.log(match("timotej", "TIMOTEJ"));

console.log(match("timotej", "TIM223OTEJ"));

console.log(match("timotej", "1234567"));

function monthName(month){
    switch(month){
        case 1:
            return "January";
            break;
        case 2:
            return "February";
            break;
        case 3:
            return "March";
            break;
        case 4:
            return "April";
            break;
        case 5:
            return "May";
            break;
        case 6:
            return "June";
            break;
        case 7:
            return "July";
            break;
        case 8:
            return "August";
            break;
        case 9:
            return "September";
            break;
        case 10:
            return "October";
            break;
        case 11:
            return "November";
            break;
        case 12:
            return "December";
        default:
            return "Invalid number";
            break;
    }
}
console.log(monthName(2));

console.log(monthName());

function isTruthy(a){
    if (a)
    return 1;
    else
    return 0;
}

console.log(isTruthy(0));
console.log(isTruthy(false)); 
console.log(isTruthy("")); 
console.log(isTruthy("false")); 

console.log(isTruthy(NaN)); 