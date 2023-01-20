import Race from './Race';

class Elf extends Race {
  maxLifePoints: number;
  static elfNumbers = 0;

  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    this.maxLifePoints = 99;
    Elf.increaseNumbers();
  }

  static increaseNumbers() {
    this.elfNumbers += 1;
  }

  static createdRacesInstances() {
    return this.elfNumbers;
  }
}

export default Elf;