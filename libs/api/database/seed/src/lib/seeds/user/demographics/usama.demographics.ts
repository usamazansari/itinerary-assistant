import { Demographics } from '../../../imports/models';
import { UsamaUserId } from '..';

export const UsamaDemographicsId = 'user-1-name';

export const UsamaDemographics: Demographics = new Demographics({
  id: UsamaDemographicsId,
  firstName: 'Usama',
  middleName: 'Zulfiquar',
  lastName: 'Ansari',
  nickname: 'Sam',
  userId: UsamaUserId
});
