class DiceRoller {
  constructor() {
    this.minimalDiceAmount = 1;
    this.minimalDiceSize = 2;
  }

  isDiceAmountTooSmall(diceAmount) {
    return diceAmount < this.minimalDiceAmount;
  }

  isDieSizeTooSmall(diceSize) {
    return diceSize < this.minimalDiceSize;
  }

  rollDice(diceAmount, dieSize) {
    if (this.isDiceAmountTooSmall(diceAmount) || this.isDieSizeTooSmall(dieSize)) {
      return [];
    }
    return Array.from({ length: diceAmount }, () => this.rollDie(dieSize));
  }

  rollDie(dieSize) {
    if (this.isDieSizeTooSmall(dieSize)) {
      return -1;
    }
    return DiceRoller.getRandomInt(1, dieSize);
  }

  static getRandomInt(min, max) {
    const newMin = Math.ceil(min);
    const newMax = Math.floor(max);
    return Math.floor(Math.random() * (newMax - newMin + 1)) + newMin;
  }
}

const roller = new DiceRoller();
export default roller;
