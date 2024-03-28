class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    printInfo() {
        console.log(`Ім'я: ${this.name}, Вік: ${this.age}`);
    }
}

class Car {
    constructor(brand, model, year, licensePlate, owner) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.licensePlate = licensePlate;
        this.owner = this.validateOwner(owner);
    }

    validateOwner(owner) {
        if (owner.age < 18) {
           return console.log(`Нажаль вам немає 18 років ${owner.name}`);
        }
        return owner;
    }

    printInfo() {
        console.log(`Марка: ${this.brand}, Модель: ${this.model}, Рік виписки: ${this.year}, Номерний знак: ${this.licensePlate}`);
        if (this.owner) {
            console.log('Власник:');
            this.owner.printInfo();
        }
    }
}


const person1 = new Person('Іван', 17);
const person2 = new Person('Марія', 25);
const person3 = new Person('Олег', 30);


const car1 = new Car('Toyota', 'Camry', 2020, 'BC1234AB', person1);
const car2 = new Car('Ford', 'Focus', 2015, 'AA5678BB', person2); 
const car3 = new Car('BMW', 'X5', 2018, 'PP9999KK', person3);


car1.printInfo();
car2.printInfo();
car3.printInfo();
