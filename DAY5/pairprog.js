// 1. Write a function to convert a tempature given 
// in Farenheit to celcius
// output: "73 deg.f is 21 deg.c"  (cross at -40 degrees)




//2. write a function to convert USD to Jap. YEN
// Output: " $45 is 378 yen"
// 1 usd = 145.16


const dollarToYen = (dollars) => {
    const yin = dollars * 145.16
    console.log(`$${dollars} is ${yin} YEN `)
}

dollarToYen(1)
dollarToYen(23)
dollarToYen(10)




//3. Given a liquid measures in ounces, convert 
// to pints, e.g. "20oz is 1 pint"


// 1. create function give it a name define parameter 

// 2. create a variable for amount pints given in a parameter/20

// 3. console.log spit out phrase 

// 4 call function 

const oz = (input) => {
    const pints = input / 20 
    console.log(`${input} oz is ${pints} pints`)
}

oz(20)
oz(16)









//4. write a function that takes array of students 
// *reference board* & lists out last names.

//write an array with objects 
//write a function that draws out last names
// call function  

const studentList = [
    {first:'Tyler', last:'Jefferson'}, //[0]
    {first:'Emily', last:'dickerson'}, //[1]
    {first:'Eddi' , last:'Espanosa'}, //[2]
    {first:'Tyler', last:'Jefferson'},//[3]
    ]

    
    
    const lastName = (studentList) =>{
        for (let i = 0; i < studentList.length; i++){       // .length = list length
            console.log(studentList[i].last) 
    
        } 
        
}

lastName(studentList)


// 5. write a function that takes a list of groceries
//  as an array ['milk','beer','cookies','crakers']
// and takes a number , 1-4 and lists element of array (human counting) 


// create a function
// name an array of groceries inside this function
// 


const groceries =  
    ['milk', 'beer', 'cookies', 'flour', 'eggs',]

const humanCount = (groceries, num) => {
    console.log(groceries[num-1])

  
}
humanCount(groceries, 2)





//6. write a function that given a word and a number and outputs that many times 
