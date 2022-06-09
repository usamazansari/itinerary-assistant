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
