import { Demographics } from '../../../imports/models';
import { EramUserId } from '..';

export const EramDemographicsId = 'user-2-demographics';

export const EramDemographics: Demographics = new Demographics({
  id: EramDemographicsId,
  firstName: 'Eram',
  lastName: 'Shaikh',
  middleName: 'Abdul Aziz',
  nickname: 'Rum',
  userId: EramUserId
});
