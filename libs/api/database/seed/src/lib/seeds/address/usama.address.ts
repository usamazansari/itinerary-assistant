import { Address } from '../../imports/models';

import { UsamaPerson, EramPerson } from '../person';

const id = 'person-1-address';

const UsamaAddresses = [
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
    addressType: 'home',
    residents: [UsamaPerson, EramPerson]
  })
];

export { UsamaAddresses };
