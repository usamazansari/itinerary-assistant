import { Location } from '../..';

export interface IAddress {
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
  userId: string;
}

const Timestamp = new Date().toISOString().valueOf();

const AddressStub: IAddress = {
  id: `new-address-${Timestamp}`,
  name: 'New Address',
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
  zip: '',
  location: new Location({
    id: `location-for-new-address-${Timestamp}`
  }),
  userId: `user-for-new-address-${Timestamp}`
};

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
  userId: string;

  constructor({
    id = AddressStub.id,
    name = AddressStub.name,
    room = AddressStub.room,
    apartment = AddressStub.apartment,
    wing = AddressStub.wing,
    street = AddressStub.street,
    landmark = AddressStub.landmark,
    locality = AddressStub.locality,
    suburb = AddressStub.suburb,
    city = AddressStub.city,
    state = AddressStub.state,
    country = AddressStub.country,
    zip = AddressStub.zip,
    location = AddressStub.location,
    userId = AddressStub.userId
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
    this.userId = userId;
  }
}

type AddressDTOOmitType = 'id';

export class AddressDTO implements Omit<IAddress, AddressDTOOmitType> {
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
  userId: string;

  constructor({
    name = AddressStub.name,
    room = AddressStub.room,
    apartment = AddressStub.apartment,
    wing = AddressStub.wing,
    street = AddressStub.street,
    landmark = AddressStub.landmark,
    locality = AddressStub.locality,
    suburb = AddressStub.suburb,
    city = AddressStub.city,
    state = AddressStub.state,
    country = AddressStub.country,
    zip = AddressStub.zip,
    location = AddressStub.location,
    userId = AddressStub.userId
  }: Partial<IAddress>) {
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
    this.userId = userId;
  }
}
