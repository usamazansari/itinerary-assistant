import { Person } from '../../imports/models';

export const EramPersonId = 'person-2';

export const EramPerson: Person = new Person({
  id: EramPersonId,
  fullName: 'Eram Shaikh',
  dateOfBirth: new Date(1993, 3, 18),
  email: 'eramshaikh22@gmail.com',
  phone: '+91 82864 41784',
  website: 'https://eramshaikh.com'
});
