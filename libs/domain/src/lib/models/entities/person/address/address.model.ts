import { Location, LocationDTO } from '../..';
import { Person, PersonDTO } from '..';

interface IAddressBase {
  name: string;
  room: string;
  apartment: string;
  wing: string;
  street: string;
  landmark: string;
  locality: string;
  suburb: string;
  city: string;
  state: string;
  country: string;
  zip: string;
}

const BaseStub: IAddressBase = {
  name: '',
  room: '',
  apartment: '',
  wing: '',
  street: '',
  landmark: '',
  locality: '',
  suburb: '',
  city: '',
  state: '',
  country: '',
  zip: ''
};

export interface IAddress extends IAddressBase {
  id: string;
  location: Location;
  residents: Person[];
}

export class Address implements IAddress {
  id: string;
  name: string;
  room: string;
  apartment: string;
  wing: string;
  street: string;
  landmark: string;
  locality: string;
  suburb: string;
  city: string;
  state: string;
  country: string;
  zip: string;
  location: Location;
  residents: Person[];

  constructor({
    id = '',
    name = BaseStub.name,
    room = BaseStub.room,
    apartment = BaseStub.apartment,
    wing = BaseStub.wing,
    street = BaseStub.street,
    landmark = BaseStub.landmark,
    locality = BaseStub.locality,
    suburb = BaseStub.suburb,
    city = BaseStub.city,
    state = BaseStub.state,
    country = BaseStub.country,
    zip = BaseStub.zip,
    location = new Location({ id: '' }),
    residents = []
  }: Partial<IAddress>) {
    this.id = id;
    this.name = name;
    this.room = room;
    this.apartment = apartment;
    this.wing = wing;
    this.street = street;
    this.landmark = landmark;
    this.locality = locality;
    this.suburb = suburb;
    this.city = city;
    this.state = state;
    this.country = country;
    this.zip = zip;
    this.location = location;
    this.residents = residents;
  }

  getId(): string {
    return this.id;
  }

  setId(id: string): void {
    this.id = id;
  }
  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }
  getRoom(): string {
    return this.room;
  }

  setRoom(room: string): void {
    this.room = room;
  }
  getApartment(): string {
    return this.apartment;
  }

  setApartment(apartment: string): void {
    this.apartment = apartment;
  }
  getWing(): string {
    return this.wing;
  }

  setWing(wing: string): void {
    this.wing = wing;
  }
  getStreet(): string {
    return this.street;
  }

  setStreet(street: string): void {
    this.street = street;
  }
  getLandmark(): string {
    return this.landmark;
  }

  setLandmark(landmark: string): void {
    this.landmark = landmark;
  }
  getLocality(): string {
    return this.locality;
  }

  setLocality(locality: string): void {
    this.locality = locality;
  }
  getSuburb(): string {
    return this.suburb;
  }

  setSuburb(suburb: string): void {
    this.suburb = suburb;
  }
  getCity(): string {
    return this.city;
  }

  setCity(city: string): void {
    this.city = city;
  }
  getState(): string {
    return this.state;
  }

  setState(state: string): void {
    this.state = state;
  }
  getCountry(): string {
    return this.country;
  }

  setCountry(country: string): void {
    this.country = country;
  }
  getZip(): string {
    return this.zip;
  }

  setZip(zip: string): void {
    this.zip = zip;
  }

  filterForInput(): Partial<Address> {
    let clone: Partial<Address> = {};
    if (!!this.id) clone = { ...clone, id: this.id };
    if (!!this.name) clone = { ...clone, name: this.name };
    if (!!this.room) clone = { ...clone, room: this.room };
    if (!!this.apartment) clone = { ...clone, apartment: this.apartment };
    if (!!this.wing) clone = { ...clone, wing: this.wing };
    if (!!this.street) clone = { ...clone, street: this.street };
    if (!!this.landmark) clone = { ...clone, landmark: this.landmark };
    if (!!this.locality) clone = { ...clone, locality: this.locality };
    if (!!this.suburb) clone = { ...clone, suburb: this.suburb };
    if (!!this.city) clone = { ...clone, city: this.city };
    if (!!this.state) clone = { ...clone, state: this.state };
    if (!!this.country) clone = { ...clone, country: this.country };
    if (!!this.zip) clone = { ...clone, zip: this.zip };
    return clone;
  }
}

interface IAddressDTO extends IAddressBase {
  location: LocationDTO;
  residents: PersonDTO[];
}

export class AddressDTO implements IAddressDTO {
  name: string;
  room: string;
  apartment: string;
  wing: string;
  street: string;
  landmark: string;
  locality: string;
  suburb: string;
  city: string;
  state: string;
  country: string;
  zip: string;
  location: LocationDTO;
  residents: PersonDTO[];

  constructor({
    name = BaseStub.name,
    room = BaseStub.room,
    apartment = BaseStub.apartment,
    wing = BaseStub.wing,
    street = BaseStub.street,
    landmark = BaseStub.landmark,
    locality = BaseStub.locality,
    suburb = BaseStub.suburb,
    city = BaseStub.city,
    state = BaseStub.state,
    country = BaseStub.country,
    zip = BaseStub.zip,
    location = new LocationDTO({}),
    residents = []
  }: Partial<IAddressDTO>) {
    this.name = name;
    this.room = room;
    this.apartment = apartment;
    this.wing = wing;
    this.street = street;
    this.landmark = landmark;
    this.locality = locality;
    this.suburb = suburb;
    this.city = city;
    this.state = state;
    this.country = country;
    this.zip = zip;
    this.location = location;
    this.residents = residents;
  }
}
