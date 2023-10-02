/*let userName = "Andrew"
let userAge = 21
let userPets = ["Cat","Dog"]
let userBalance = 1200
const EVERY_DAY_SPENDING =15.3
let everyDaySpendingPerPet =6
let daysSurvived = 0

//console.log("Text", variable) allows you to write to the console
userPets.push("Hamster")
console.log("User Name", userName)
console.log("User Age", userAge)
console.log("User balance", userBalance)
console.log("everyDaySpendingPerPet", everyDaySpendingPerPet)
console.log("daysSurvived:", daysSurvived)
while (userBalance > 0) {
    let spending = EVERY_DAY_SPENDING + everyDaySpendingPerPet * userPets.length
    userBalance -= spending
    daysSurvived++
}


console.log("User have sufficient money for " + daysSurvived + " days")
*/

//task 1
function nameVertical(name) {
    //name.split("").forEach((letter)
    console.log(name)
    for(let i=0; i<name.length; i++){
        console.log(name[i])
    }
}
// Sarah for example
//nameVertical("Sarah")

//task 2

/*function code(n) {
    return (n < 100) ? "Not a valid code" :
        (n<200) ? "Informational responses (100–199)" :
            (n<300) ? "Successful responses (200–299) " :
                (n<400) ? "Redirection messages (300–399) " :
                    (n<500) ? "Client error responses (400–499)" :
                        (n<600) ? "Server error responses (500–599) ":
                            "Not valid code"



}
// for example n = 121
console.log(code(121));
console.log(code(21));
console.log(code(221));
console.log(code(321));
console.log(code(421));
console.log(code(521));
console.log(code(621));*/

//task 3
/*function compareVariables(var1, var2) {
    console.log({var1,var2})
    if(var1===var2){
        console.log("The two variables have the same value and type")

    }
    else if(var1==var2){
        console.log("The two variables have the same value but not the same type")
        console.log("type of ",var1,typeof var1)
        console.log("type of ",var2,typeof var2)
    }
    else console.log("The two variables do not have the same value nor the same type")


}

// After completing the function pass different values instead of var1 and var2 to test your function

compareVariables (1, "1");
compareVariables("3","3")
compareVariables(3,"4")
*/
//task 4
function fibonacci(n) {
 /*if(n==0){
     return 1
 }
 if(n==1){
     return 1
 }
 else return fibonacci(n-1) + fibonacci(n-2)*/
    let sum=0
    let var1 =0
    let var2 =1
    let arr=[]
    while(n>var1){
        arr.push(var1)
        sum=var1+var2
        var1=var2
        var2=sum

    }
    console.log("Fibonacci Sequence: ", arr.toString())

}

// After completing the function pass different numbers instead of n and test the result.

fibonacci(10)
let courses = ["WAD", "SoftwareEngineering", "WebSecurity", "OOP"];
let i = 0;

for (;;) {
    console.log(courses[i])
    i++
    if(i===courses.length){
        break
    }

}
//code to be added only here
