import { Getters, Setters } from '../utils';

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
  addressType: string;
}

type IAddress = IAddressBase & Getters<IAddressBase> & Setters<IAddressBase>;

export { IAddressBase, IAddress };
