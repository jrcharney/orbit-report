export class Satellite {
  name: string;
  orbitType: string;
  type: string;
  operational: boolean;
  launchDate: string;

  constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean){
    this.name = name;
    this.type = type;
    this.launchDate = launchDate;
    this.orbitType = orbitType;
    this.operational = operational;
  }

  shouldShowWarning() : boolean {
    // To make this "case insenstive", this.type should be converted to lower case
    return this.type.toLowerCase() === 'space debris';
  }
}
