import Race from './Race';

class Dwarf extends Race {
  maxLifePoints: number;
  static dwarfNumbers = 0;

  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    this.maxLifePoints = 80;
    Dwarf.increaseNumbers();
  }

  static increaseNumbers() {
    this.dwarfNumbers += 1;
  }

  static createdRacesInstances() {
    return this.dwarfNumbers;
  }
}

export default Dwarf;