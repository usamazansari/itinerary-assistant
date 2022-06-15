import { Person } from '../../imports/models';

export const UsamaPersonId = 'person-1';

export const UsamaPerson: Person = new Person({
  id: UsamaPersonId,
  fullName: 'Usama Ansari',
  dateOfBirth: new Date(1993, 9, 25),
  email: 'usama251993@gmail.com',
  phone: '+91 80977 28350',
  website: 'https://usamaansari.com'
});
