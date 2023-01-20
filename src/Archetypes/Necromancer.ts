import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  necromancerEnergy: EnergyType;
  static necromancerNumbers = 0;

  constructor(
    name: string,
  ) {
    super(name);
    this.necromancerEnergy = 'mana';
    Necromancer.increaseNumber();
  }

  get energyType(): EnergyType {
    return this.necromancerEnergy;
  }

  static increaseNumber() {
    this.necromancerNumbers += 1;
  }

  static createdArchetypeInstances(): number {
    return this.necromancerNumbers;
  }
}

export default Necromancer;