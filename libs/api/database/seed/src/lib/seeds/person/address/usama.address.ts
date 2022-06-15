import { Address } from '../../../imports/models';

export const UsamaAddressId = 'person-1-address';

export const UsamaAddress: Address = new Address({
  id: UsamaAddressId,
  name: 'Rent',
  room: '1301',
  wing: 'A',
  apartment: 'Sayba Nx',
  street: 'S. G. Barve Marg',
  landmark: 'Opposite Kurla Railway Station',
  locality: 'Nehru Nagar',
  suburb: 'Kurla East',
  city: 'Mumbai',
  state: 'Maharashtra',
  country: 'India',
  zip: '400024'
});
