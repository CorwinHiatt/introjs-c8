// 1. DO SOMETHING/ NO PARAMETERS

function sayHello() {
    console.log('Hello')
}
sayHello()

// DO SOMETHING / WITH PARAMETERS(S)

function greetPerson(name) {
    console.log(`hello ${name}. Welcome!`)
}

greetPerson('Gianna')
greetPerson('Brad')

// 3. RETURN SOMETHING / NO PARAMETERS

function addTwoPlusTwo() {
    return 2+2
}

console.log(addTwoPlusTwo)

const answer = addTwoPlusTwo()
console.log('answer', answer)

// 4. RETURN SOMETHING / WITH PARAMETER(S)

function doubleMyNumber(number) {
    return number * 2
}

console.log('result: ', result)