//const fruits = [
    //array[position]
    //'bananas',  // [0]
    //'berry',    // [1]
    //'apple',    // [2]
    //'mango',    // [3]
    //'guanabana',// [4]
    //'mango',    // [5]
    //'pear',     // [6]

//]

//console.log('my fruits are:', fruits) shift option v
// console.log('the first fruit is:', fruits[0])
// console.log('the second fruit is:', fruits[1])

//return the fruit at position i from the array

//function getFruit(index) {
//    return fruits[index];
//}

//console.log(`I have ${fruits.length} fruits in my list`)
//console.log(getFruit(0))
//console.log(getFruit(1))
//console.log(getFruit(2))
//console.log(getFruit(3))
//console.log(getFruit(4))


//let playersNumbers = [12,33,44,55,33,99]

//console.log(playersNumbers[0] + playersNumbers[2])

let students = [
    {
        name: "bob",
        age: 24,
    },
    {
        name: "boe",
        age: 21
    },
    {
        name: "bill",
        age: 23,
    }


]

//const firstStudent = students[0]

//console.log(firstStudent.name)
//console.log(students[1].name)

//const{name,age} = students[0]
//console.log(`first student's name is: ${name} and they are ${age} years old`)


const sentence = "Hello Boca Code"
//console.log(sentence.length)
const arrays0Letters = sentence.split('')
//console.log(arrays0Letters)
const arraysOfwords = sentence.split(' ')
//console.log(arraysOfwords)
//console.log(`There ar ${arraysOfwords.length} number of words`)


let fruits = [
    //array[position]
    'bananas',  // [0]
    'berry',    // [1]
    'apple',    // [2]
    'mango',    // [3]
    'guanabana',// [4]
    'mango',    // [5]
    'pear',     // [6]
]

console.log(fruits)
fruits.push('grape fruit')
console.log(fruits)
fruits.push('grape')
console.log(fruits)
fruits.push('grape nuts')
console.log(fruits)
const oldFruits = fruits.pop()
console.log(oldFruits)
console.log(fruits)

const oldfruit2 = fruits.shift() // adds from begging
console.log(oldfruit2)
console.log(fruits) 

fruits.unshift('kiwi')
fruits.unshift('fig')
console.log(fruits) 

//fruits['tomatos',...fruits, 'dragon fruit'];//FIIIIXXXXX!
//console.log(fruits)

//console.log(fruits.indexOf'mangos')// counts place in list FIXXXX


console.log(`my fruits are: ${fruits.join(", ")}`) // makes human readable text