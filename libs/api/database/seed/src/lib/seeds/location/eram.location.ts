import { Location } from '../../imports/models';
import { EramCoordinates, EramTimezone } from '.';

export const EramLocationId = 'person-2-address-location';

export const EramLocation: Location = new Location({
  id: 'person-2-address-location',
  plusCode: '5XVQ+VG Thane, Maharashtra',
  coordinates: EramCoordinates,
  timezone: EramTimezone
});
