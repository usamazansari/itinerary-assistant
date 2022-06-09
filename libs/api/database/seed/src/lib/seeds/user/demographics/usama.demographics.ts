import { Demographics } from '../../../imports/models';
import { UsamaPerson } from '..';

export const UsamaDemographicsId = 'person-1-demographics';

export const UsamaDemographics: Demographics = new Demographics({
  id: UsamaDemographicsId,
  firstName: 'Usama',
  middleName: 'Zulfiquar',
  lastName: 'Ansari',
  nickname: 'Sam',
  person: UsamaPerson
});
