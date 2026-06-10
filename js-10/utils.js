export class MathUtils {
    constructor() {
        throw new Error("MathUtils is a utility class and cannot be instantiated")
    }

    static add(a, b) {
        return a + b
    }

    static subtract(a, b) {
        return a - b
    }

    static multiply(a, b) {
        return a * b
    }

    static divide(a, b) {
        return a / b
    }
}

export class WeatherUtils {
    constructor() {
        throw new Error("MathUtils is a utility class and cannot be instantiated")
    }
    static testWeather() {
        return `test weather`
    }
}

export function newFunction() {
    return true
}