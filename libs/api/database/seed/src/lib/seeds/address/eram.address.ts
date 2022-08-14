import { Address } from '../../imports/models';

import { EramPerson, UsamaPerson } from '../person';

const id = 'person-2-address';

const EramAddresses = [
  new Address({
    id,
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
    zip: '400024',
    addressType: 'in-law',
    residents: [EramPerson, UsamaPerson]
  }),
  new Address({
    id,
    room: 'G2',
    wing: '',
    apartment: 'Al-Noor',
    street: 'Mumbai-Pune Road',
    landmark: 'Bharti Chambers',
    locality: 'Takoli Mohalla',
    suburb: 'Kalwa West',
    city: 'Thane',
    state: 'Maharashtra',
    country: 'India',
    zip: '400605',
    addressType: 'home',
    residents: [EramPerson]
  })
];

export { EramAddresses };
