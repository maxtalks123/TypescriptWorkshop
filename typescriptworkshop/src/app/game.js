class Weapon {
  constructor(name, att, str, def, dmg) {
    this.name = name;
    this.att = att;
    this.str = str;
    this.def = def;
    this.dmg = dmg;
  }
  attack() {
    console.log(`${this.name} dealt ${this.dmg} damage`);
  }
}

class Axe extends Weapon {
  constructor(name, att, str, def, dmg) {
    super(name, att, str, def, dmg);
  }
  slash() {
    console.log(`${this.name} used slash attack and dealt ${this.dmg}`);
  }
}

class Player {
  constructor(name, hp, weapon) {
    this.name = name;
    this.hp = hp;
    this.weapon = weapon;
  }
  attack(defender) {
    if (this.def >= 5) {
      this.att = this.att / 2;
      console.log(`${this.name} reduced the attack by half`);
      console.log(`${this.name} dealt ${this.att} to ${defender.name}`);
    } else {
      defender.hp = defender.hp - this.att;
      console.log(`${this.name} dealt ${this.att} damage to ${defender.name}`);
    }
  }
}

const Staff = new Weapon("Staff", 3, 2, 0, 5);
const Max = new Player("Max", 8, 3, 3, 15);
const Jerry = new Player("Jerry", 2, 10, 25, 45);
const newAxe = new Axe("Axe", 20, 10, -2, 6);

Max.attack(Jerry);
newAxe.slash();

Staff.attack();

//step by step for creating this game:
//1 - create weapon class with general stats and maybe attack styles
//2 - create specific weapons with stats using const Axe = new Weapon("Axe", relevant stats and attack style).
//3 - create player with name, hp and weapon
//4 - call the relevant player and attack method and adjust stats as necessary
