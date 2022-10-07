//Define class once....//

class Student {
    constructor(firstName, lastName) {
        this.lname = lastName
        this.fname = firstName
    }
    //Methods:
    getFullName() {
        return ` ${this.fname} ${this.lname}`
    }
}

const student1 = new Student('Corwin', 'Hiatt')
console.log(student1.getFullName())



//..... you can create many more instances

class Vehicle {
    constructor(make, model) {
        this.make = make
        this.model = model
    }
    getName() {
        return this.make + '  ' + this.model
    }
}

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model)
    }
    getCarType() {
        return this.year + '  ' + this.getName()
    }
}


// 'Getters' = return a property of a class instanbce
//     & 
// 'Setters' = set a property of a class instance 


class course {
    constructor(title) {
        this._courseTitle = title
    }
    get courseTitle() {
        return this._courseTitle
    }
    set courseTitle(newTitle) {
        this._courseTitle = newTitle
    }
}


let tree = {
    genus: 'ficus',
    species: 'benghalensis',
    commonName: 'Banyans',
    origin: 'India',
    size: 'XL',
}

console.log(tree.commonName)
tree.size = 'XL'
tree.nickName = 'walking tree'
tree.size = 40
tree.unit = 'feet'