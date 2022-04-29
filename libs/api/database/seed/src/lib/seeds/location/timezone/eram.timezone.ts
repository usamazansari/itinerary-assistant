import { Timezone } from '../../../imports/models';
import { EramLocationId } from '..';

export const EramTimezoneId = 'person-2-address-location-timezone';

export const EramTimezone: Timezone = new Timezone({
  id: EramTimezoneId,
  offset: 5.5,
  description: 'Asia/Kolkata',
  locationId: EramLocationId
});
