class Traveler {
    constructor(name) {
        this.name = name
        this.qtdfood = 1
        this.isHealthy = true
    }
    hunt() {
        this.qtdfood += 2
    }
    eat() {
        if (this.qtdfood > 0) {
            this.qtdfood -= 1
        } else {
            this.isHealthy = false
        }
    }
}
class Wagon {
    constructor(capacity) {
        this.capacity = capacity
        this.passager = []
    }
    join(name) {
        this.name = name
        if (this.capacity > 0) {
            this.passager.push(this.name)
            this.capacity -= 1
        } else {

            return `A carroça esta lotada nao pode inserir ${maude.name}`
        }
    }
    getAvailableSeatCount() {
        return `À capacidade atual é de ${this.capacity}`
    }
    shouldQuarantine() {
        for (let i = 0; i < this.passager.length; i++) {

            if (this.passager[i].isHealthy === false) {
                return `O passageiro ${(this.passager[i]).name} esta doente`
            }

        }
        return false
    }
    totalFood() {
        let count = 0
        for (let i = 0; i < this.passager.length; i++) {
            count += this.passager[i].qtdfood
        }
        return count
    }
}
let wagon = new Wagon(2);
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let maude = new Traveler('Maude');
console.log(wagon.getAvailableSeatCount())
wagon.join(henrietta)
console.log(`${wagon.getAvailableSeatCount()} should be 1`);
wagon.join(juan);
console.log(wagon.join(maude))
henrietta.hunt()
juan.eat();
juan.eat();
console.log(`${wagon.shouldQuarantine()} should be true since juan is sick`);
console.log(`${wagon.totalFood()} should be 3`);