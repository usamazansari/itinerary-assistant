import { Demographics } from '../../../imports/models';
import { EramPerson } from '..';

export const EramDemographicsId = 'person-2-demographics';

export const EramDemographics: Demographics = new Demographics({
  id: EramDemographicsId,
  firstName: 'Eram',
  lastName: 'Shaikh',
  middleName: 'Abdul Aziz',
  nickname: 'Rum',
  person: EramPerson
});
