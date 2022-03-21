import { Address, Location } from '../imports/models';
import { LocationSeed } from '.';

export const AddressSeed: Address[] = [
  {
    id: 'user-1-address',
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
    name: 'Rent',
    location:
      LocationSeed.find(
        location => location.id === 'user-1-address-location'
      ) ?? new Location({}),
    userId: 'user-1'
  }
];
