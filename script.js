// Homework part 1
// Create a function that finds the type of parameter
function homeworkPart1(parameter) {
    if (typeof parameter === "string") {
        console.log("Paremeter is a string!");
        return typeof parameter;
    }
    else if (typeof parameter === "number") {
        console.log("Parameter is a number!");
    }
    else if (typeof parameter === "boolean") {
        console.log("Parameter is a boolean!");
    }
    else if (typeof parameter === "undefined") {
        console.log("Parameter is an undefined parameter!");
    }
    else if (typeof parameter === "object") {
        console.log("Parameter is an object!");
    }
    else
        return 0;
}
console.log(homeworkPart1(10));

console.log(homeworkPart1("Timotej"));

console.log(homeworkPart1(true));

console.log(homeworkPart1(undefined));

console.log(homeworkPart1(Object));
// Homework part 2
// write a java function that will return:
// *calculates your dog's age based on the conversion rate of
//  1:7 /  human:dog years
// call the function in console to see answer
// bonus: make the same function work for converting dog to human years as well
function dogYears(hyears) {
    let dyears = hyears * 7;
    console.log(`${hyears} human years is equal to ${dyears} dog years !`);
    return dyears;
}
console.log(dogYears(2));

//homework part 3
//write a java script function for an ATM:
//the atm should give cash
//shuold return "not enough moeny" if you request more money"
//should return  the amount withdrawn and money left on the account
//  if you have enough
//note: hardcore your account money in the program
// bonus make it work twith prompt ()!
function atm (name, money){
    let withdraw = prompt("Enter amount you would like to withdraw", "number");
    if( withdraw > money)
    console.log("Not enough money")
    else{
        money-=withdraw;
        console.log(`You withdrew ${withdraw} $, you have ${money} $ left in your bank account.`)
    }
}

console.log(atm("tiomtej",10000));
