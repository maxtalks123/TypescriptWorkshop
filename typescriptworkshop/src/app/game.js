class Player {
  constructor(name, att, def, str, hp) {
    this.name = name;
    this.att = att;
    this.def = def;
    this.str = str;
    this.hp = hp;
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

class Weapon {
  constructor(name, att, str, def, dmg) {
    this.name = name;
    this.att = att;
    this.str = str;
    this.def = def;
    this.dmg = dmg;
  }
  attack() {
    console.log(`${this.name} dealt ${this.dmg}`);
  }
}

class Axe extends Weapon {
  constructor(name, att, str, def, dmg) {
    super(name, att, str, def, dmg);
  }
  slash() {}
}

const Max = new Player("Max", 8, 3, 3, 15);
const Jerry = new Player("Jerry", 2, 10, 25, 45);

Max.attack(Jerry);
