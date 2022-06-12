import { Location } from '../../imports/models';
import { UsamaCoordinates, UsamaTimezone } from '.';

export const UsamaLocationId = 'person-1-address-location';

export const UsamaLocation: Location = new Location({
  id: 'person-1-address-location',
  plusCode: '3V7J+59 Mumbai, Maharashtra',
  coordinates: UsamaCoordinates,
  timezone: UsamaTimezone
});
