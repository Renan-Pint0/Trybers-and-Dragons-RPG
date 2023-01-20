import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  rangerEnergy: EnergyType;
  static rangerNumbers = 0;

  constructor(
    name: string,
  ) {
    super(name);
    this.rangerEnergy = 'stamina';
    Ranger.increaseNumber();
  }

  get energyType(): EnergyType {
    return this.rangerEnergy;
  }

  static increaseNumber() {
    this.rangerNumbers += 1;
  }

  static createdArchetypeInstances(): number {
    return this.rangerNumbers;
  }
}

export default Ranger;