import { BaseModel } from '../../base/base.model';

import { PersonBase } from '../person.model';

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

interface IAddress extends IAddressBase {
  residents?: PersonBase[];
}

abstract class AddressBase extends BaseModel implements IAddress {
  public room: string;
  public apartment: string;
  public wing: string;
  public street: string;
  public landmark: string;
  public locality: string;
  public suburb: string;
  public city: string;
  public state: string;
  public country: string;
  public zip: string;
  public residents?: PersonBase[];

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
    residents
  }: Partial<AddressBase>) {
    super({ id });
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

    if (!!residents) this.residents = !!residents.length ? residents : [];
  }

  public getRoom() {
    return this.room;
  }

  public setRoom(room = '') {
    this.room = room;
  }
  public getApartment() {
    return this.apartment;
  }

  public setApartment(apartment = '') {
    this.apartment = apartment;
  }
  public getWing() {
    return this.wing;
  }

  public setWing(wing = '') {
    this.wing = wing;
  }
  public getStreet() {
    return this.street;
  }

  public setStreet(street = '') {
    this.street = street;
  }
  public getLandmark() {
    return this.landmark;
  }

  public setLandmark(landmark = '') {
    this.landmark = landmark;
  }
  public getLocality() {
    return this.locality;
  }

  public setLocality(locality = '') {
    this.locality = locality;
  }
  public getSuburb() {
    return this.suburb;
  }

  public setSuburb(suburb = '') {
    this.suburb = suburb;
  }
  public getCity() {
    return this.city;
  }

  public setCity(city = '') {
    this.city = city;
  }
  public getState() {
    return this.state;
  }

  public setState(state = '') {
    this.state = state;
  }
  public getCountry() {
    return this.country;
  }

  public setCountry(country = '') {
    this.country = country;
  }
  public getZip() {
    return this.zip;
  }

  public setZip(zip = '') {
    this.zip = zip;
  }

  public getResidents() {
    return this.residents;
  }

  public setResidents(residents = []) {
    this.residents = residents;
  }
}

type IAddressDTO = IAddressBase;

class AddressBaseDTO implements IAddressDTO {
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
  }: Partial<AddressBaseDTO>) {
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

export { AddressBase, AddressBaseDTO, IAddress };
