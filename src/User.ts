import faker from 'faker';
import { Mappable } from './CustomMap';

export  class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;  
  };
  color: string = 'red';

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      // faker returns a string so we have to use parseFloat() to parse the numbers out, with the decimal intact
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    }
  }

  markerContent(): string {
    return `User Name: ${this.name}`
  }
}