import Race from './Race';

class Orc extends Race {
  maxLifePoints: number;
  static orcNumbers = 0;

  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    this.maxLifePoints = 74;
    Orc.increaseNumbers();
  }

  static increaseNumbers() {
    this.orcNumbers += 1;
  }

  static createdRacesInstances() {
    return this.orcNumbers;
  }
}

export default Orc;