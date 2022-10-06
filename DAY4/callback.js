function slowThing(callback) {
    console.log('hi, i am slow')
    callback()

}


slowThing(() => {
    console.log('THIS IS CALLBACK!')
})


console.log('--------------')

function doSecond() {
    console.log('do this after slow thing.')

}

slowThing(doSecond)

const double = (num) => num * 2

console.log(double(6))

const aspectRation = (width, height) => width / heith 



