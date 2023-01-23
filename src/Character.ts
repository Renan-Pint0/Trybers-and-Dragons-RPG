import Fighter from './Fighter';
import Race, { Elf } from './Races';
import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';

class Character implements Fighter {
  public race: Race;
  public archetype: Archetype;
  public maxLifePoints: number;
  public lifePoints: number;
  public strength: number;
  public defense: number;
  public dexterity: number;
  // public energy: Energy;
  constructor(name: string) {
    this.dexterity = Math.floor(Math.random() * 11);
    this.race = new Elf(name, this.dexterity);
    this.archetype = new Mage(name);
    this.maxLifePoints = this.race.maxLifePoints / 2;
    this.lifePoints = this.race.maxLifePoints / 2;
    this.strength = Math.floor(Math.random() * 11);
    this.defense = Math.floor(Math.random() * 11);
    // this.energy.type_ = this.archetype.energyType;
    // this.energy.amount = Math.floor(Math.random() * 11);
  }
}

export default Character;