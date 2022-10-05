
const person = {

    name: 'Corwin',
    age: 26, 
    adress: "1341 Boca code st",
    family:{
        kid1:'jon',
        kid2:'jim',
        wife:'beth'

    }
}  

//console.log('person is', person)
// where we learned person.name and comand f
//option command down = duplicate

//console.log(`my name is ${person.name} 
//and im this old:${person.age}`)

//const name = person.name
//const age = person.age
const {name,age} = person
console.log(`my name is ${name} 
 
and im this old:${person.age}`)

//delete object.propName