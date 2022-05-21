class pokemon {
    constructor(name, species, type, hp, attack, defense, spAtk, spDef, speed, total){
        this.name = name
        this.species = species
        this.type = type
        this.hp = hp
        this.attack = attack
        this.defense = defense
        this.spAtk = spAtk
        this.spDef = spDef
        this.speed = speed
        this.total = total
    }
    pet(){
        console.log(`${this.name} is happier now thanks to you`)
        this.happiness++
    }
    feed(){
        console.log(`${this.name} is fuller now thanks to you`)
        this.hunger++
    }
    water(){
        console.log(`${this.name} is hydrated now thanks to you`)
        this.thirst++
    }
    train(){
        console.log(`${this.name}'s training went well but his exhausted now`)
        this.hp++
        this.total++
        this.attack++
        this.total++
        this.defense++
        this.total++
        this.hunger--
        this.thirst--
        this.happiness++
    }
}

class bulbasaur extends pokemon {
    super(name, species, type, hp, attack, defense, spAtk, spDef, speed, total){
    }
    hunger = 0
    thirst = 0
    health = 10
    happiness = 7
    bulbEnergy = 5
}

class charmander extends pokemon {
    super(name, species, type, hp, attack, defense, spAtk, spDef, speed, total){
    }
    hunger = 0
    thirst = 0
    health = 10    
    happiness = 7
    tailFlame = 5
}

class squirtle extends pokemon {
    super(name, species, type, hp, attack, defense, spAtk, spDef, speed, total){
    }
    hunger = 0
    thirst = 0
    health = 10
    happiness = 7
    shellStrength = 5
}

let bulbasaur1 = new bulbasaur ("bulbasaur1", "bulbassur", "grass/poison", 45, 49, 65, 65, 45, 318)
let charmander1 = new charmander("charmander1", "charmander", "fire", 39, 52, 43, 60, 50, 65, 309)
let squirtle1 = new squirtle("squirtle1", "squirtle", "water", 44, 48, 65, 50, 64, 43, 314)
console.log(bulbasaur1)
console.log(charmander1)
console.log(squirtle1)
bulbasaur1.pet()
charmander1.feed()
squirtle1.water()
charmander1.train()
console.log(bulbasaur1.happiness)
console.log(charmander1.hunger)
console.log(squirtle1.thirst)
console.log(charmander1.total)

//testing github 