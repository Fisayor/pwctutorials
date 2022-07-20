for (let i=12; i<20; i++){
    // console.log("number is "+i)
    console.log(`number is ${i}`)
}

let p= 0
while (p<20){
    console.log(p)
    p++
}

const x=10
if (x==20){
    console.log('x is 20');
}else if (x==10){
    console.log('x is 10')
}
else {
    console.log('it is not equal');
}


//write an if else statement that would printout  exxcellence if score 90 very good 80 avaerage 50 and failed 30

//70-90 Distinction
//60-69 Very GOOD
//50-59 CREDIT
//40-49 PASS
//0-39 FAIL
const score= 90
if (score >=70 && score <=100){
    console.log('excellent');
}else if (score >= 60 && score<=69){
    console.log('Very Good');
}else if (score >=50 && score <=59){
    console.log('Credit');
}else if (score >=40 && score <=49){
    console.log('Pass')
}else if (score >=0 && score <=39){
    console.log('Fail')
}else {
    console.log('you did not right the test')
}


// function two (i){
//     i%2==0
// }
//  for (let i=0; i<20; i++){
//     console.log(`${i}`)
//  }


 let someword ="Adamu"
 console.log (someword.split(''))

 let somearray = ['a','b','c','d','f']
 console.log(somearray.reverse(''))

 function stringToArray(s){
    
    return s.split('').reverse().join()
 }
 console.log(stringToArray('Floor'));



 function isPalindrom (str){
    let newString = str.split('').reverse().join("")
    if (str === newString){
        return true;
    }else {
        return false;
    }
}
    console.log(isPalindrom('Fisayo'));

 

for (let i=0; i<20; i+=2){
    // console.log("number is "+i)
    console.log(`number is ${i}`)
}

let string15 = '15'
console.log (parseInt (string15))
console.log(typeof parseInt (string15))

function intPalindrom (num){
    let numToString = num.numToString
     
    let newString = numToString.split('').reverse().join("")
    if (numToString === newString){
        return true;
    }else {
        return false;
    }
}
    console.log(isPalindrom('11'));