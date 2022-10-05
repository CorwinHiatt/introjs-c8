            //let i = 0    where we start 
            // i++         how do we count can count by anything
            // i <= 10     when do i stop 

            // let i = 10
            // i --
            // i>=0     

// let i = 0
// do {
//     i++
//     console.log('this is iteration #,' i)
// } while(i<10)

//------------------//

// let i = 0
// while(i<10){
//     i++

// for loop v

// for(let i=0;i<10;i++){
//     console.log('this is cool', i)
// }

//-------------------//

// const nums = [8,6,17,18,3,10,23] //FIX TONIGHT

// function lookForNum(listofnums){
//     for(let i = 0; i< listofnums.length; i++){
//    if(listofnums[i]===3){
//    console.log('we found a 3!')
//        break
//     }
//   }
// } lookForNum(3)

//---------------------//

// for(let i = 0; i < 10; i++) {
//     if(i===){
//         continue
//     }
// }

// //----------------------//

// let person = {
//     firstName: 'Corwin'
//     age:26,
//     awesome: true
// }

// for(let i in person) {
//     console.log(i + '=' + person[i])

// }


//-----------------------------------------//

//----LETS WRITE LOOP_______//





for(let i = 0; i < 10; i++) {
    console.log(i, 'hello there!')
}


// lets loop through an array 

const mentors = [
    'Peter',
    'Cassandra',
    'Bridgette',
    'Arthur',
    'Sebas',
    'Nerissa',    
    'Max'
]

//let = name ;
for(let i = 0; i < mentors.length; i++) {       // this is a block of code called a loop v
    const name = mentors[i]                     //                                       v
    console.log(`${name} is an awesome mentor!`)//      this is a scope refference       v
}                                               //                                    <----->

//console.log(name)    //name only exists in the above^ block of code "loop"
