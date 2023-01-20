import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  mageEnergy: EnergyType;
  static mageNumbers = 0;

  constructor(
    name: string,
  ) {
    super(name);
    this.mageEnergy = 'mana';
    Mage.increaseNumber();
  }

  get energyType(): EnergyType {
    return this.mageEnergy;
  }

  static increaseNumber() {
    this.mageNumbers += 1;
  }

  static createdArchetypeInstances(): number {
    return this.mageNumbers;
  }
}

export default Mage;