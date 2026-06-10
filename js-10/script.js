import { MathUtils, WeatherUtils, newFunction } from "./utils.js";

const zbir = MathUtils.add(5, 7)

console.log(WeatherUtils.testWeather());

console.log(newFunction());

console.log(zbir);

class Vehicle {
    constructor(brand, model, year, mileage) {
        this.brand = brand
        this.model = model
        this.year = year
        this.mileage = mileage
    }

    describe() {
        return `This is a ${this.brand} car, model: ${this.model}, year of production is ${this.year}, and the mileage is mileage ${this.mileage}`
    }

    addMileage(addedMileage) {
        if (!Number.isFinite(addedMileage)) {
            throw new Error(`The entered value is not a number: ${addedMileage}`)
        }

        if (addedMileage <= 0) {
            throw new Error("Added mileage cannot be negative")
        }

        this.mileage += addedMileage
    }
}

class ElectricVehicle extends Vehicle {
    constructor(brand, model, year, mileage, batteryCapacity) {
        super(brand, model, year, mileage)
        this.batteryCapacity = batteryCapacity
    }

    describe() {
        return `${super.describe()}, and the battery capacity is ${this.batteryCapacity}kwH`
    }
}

const car1 = new Vehicle("BMX", "X5", 2015, 125000)
const car2 = new Vehicle("Toyota", "Corolla", 2019, 95200)

console.log(car1.describe());

car1.addMileage(1500)

console.log(car1.describe());

const ev1 = new ElectricVehicle("Telsa", 'Model 3', 2022, 56982, 75)

ev1.addMileage(8000)
console.log(ev1.describe());

const cars = [car1, car2, ev1]

cars.forEach(car => {
    console.log(car.describe());
})
