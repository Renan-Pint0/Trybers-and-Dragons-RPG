import Race from './Race';

class Halfling extends Race {
  maxLifePoints: number;
  static halflingNumbers = 0;

  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    this.maxLifePoints = 60;
    Halfling.increaseNumbers();
  }

  static increaseNumbers() {
    this.halflingNumbers += 1;
  }

  static createdRacesInstances() {
    return this.halflingNumbers;
  }
}

export default Halfling;