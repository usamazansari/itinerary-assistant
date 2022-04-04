import { Location } from '../../imports/models';
import { UsamaCoordinates, UsamaTimezone } from '.';

export const UsamaLocationId = 'user-1-address-location';

export const UsamaLocation: Location = new Location({
  id: 'user-1-address-location',
  plusCode: '3V7J+59 Mumbai, Maharashtra',
  coordinates: UsamaCoordinates,
  timezone: UsamaTimezone
});
