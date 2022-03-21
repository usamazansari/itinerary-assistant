import { Coordinates, Location, Timezone } from '../imports/models';
import { CoordinatesSeed, TimezoneSeed } from '.';

export const LocationSeed: Location[] = [
  {
    id: 'user-1-address-location',
    plusCode: '3V7J+59 Mumbai, Maharashtra',
    coordinates:
      CoordinatesSeed.find(
        coordinates =>
          coordinates.id === 'user-1-address-location-coordinates'
      ) ?? new Coordinates({}),
    timezone:
      TimezoneSeed.find(
        timezone => timezone.id === 'user-1-address-location-timezone'
      ) ?? new Timezone({})
  }
];
