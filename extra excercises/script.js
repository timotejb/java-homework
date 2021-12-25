function convertMinutesIntoSeconds (minutes){
    if(minutes>0){
    let seconds=minutes*60;
    return seconds;
    }
    else
    return -1;
}
console.log(convertMinutesIntoSeconds(5));

console.log(convertMinutesIntoSeconds(3));

console.log(convertMinutesIntoSeconds(2));

function nextNumber (i){
    let next=i++;
    console.log(`The number after ${i} is ${next}`);
}
console.log(nextNumber(0));

console.log(nextNumber(2));

console.log(nextNumber(-3));

function convertHoursIntoSeconds(hours){
    if(hours >0){
    let minutes=hours*60;
    let seconds=convertMinutesIntoSeconds(minutes);
    return seconds;
    }
    else
    return -1;
}
console.log(convertHoursIntoSeconds(2)); //should return 7200.

console.log(convertHoursIntoSeconds(10)); //should return 36000.

console.log(convertHoursIntoSeconds(24)); //should return 86400.

function remainder(i,j){
    if (i==0||j==0){
        return -1;
    }
    else
        return i%j;
}

console.log(remainder(1,3));

console.log(remainder(5,5));

function farmProblem(chicken,cow,pig){
    if(chicken<0||cow<0||pig<0)
    return -1;
    else{
    let sum=chicken*2+cow*4+pig*4;
    return sum;
    }
}
console.log(farmProblem(2,3,5));

console.log(farmProblem(1,2,3));

console.log(farmProblem(5,2,8));

function compare (str1, str2){
 let length1=str1.length;
 let length2=str2.length;
 if(length1==length2)   
 return true;
 else
 return false;
}