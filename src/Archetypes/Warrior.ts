import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  warriorEnergy: EnergyType;
  static warriorNumbers = 0;

  constructor(
    name: string,
  ) {
    super(name);
    this.warriorEnergy = 'stamina';
    Warrior.increaseNumber();
  }

  get energyType(): EnergyType {
    return this.warriorEnergy;
  }

  static increaseNumber() {
    this.warriorNumbers += 1;
  }

  static createdArchetypeInstances(): number {
    return this.warriorNumbers;
  }
}

export default Warrior;