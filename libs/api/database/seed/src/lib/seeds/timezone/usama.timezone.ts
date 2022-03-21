import { Timezone } from '../../imports/models';
import { UsamaLocationId } from '..';

export const UsamaTimezoneId = 'user-1-address-location-timezone';

export const UsamaTimezone: Timezone = new Timezone({
  id: UsamaTimezoneId,
  offset: 5.5,
  description: 'Asia/Kolkata',
  locationId: UsamaLocationId
});
