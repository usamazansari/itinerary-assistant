import { v4 as uuid } from 'uuid';

import { Location } from '../..';
import { Person } from '..';

interface IAddressBase {
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

  generateUUID(): string {
    this.setId(uuid());
    return this.getId();
  }
}

type IAddressDTO = IAddressBase;

export class AddressDTO implements IAddressDTO {
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

  constructor({
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
    zip = BaseStub.zip
  }: Partial<IAddressDTO>) {
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
  }
}
