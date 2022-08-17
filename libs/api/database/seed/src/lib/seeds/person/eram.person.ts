import { Person } from '../../imports/models';

const id = 'person-2';

const EramPerson = new Person({
  id,
  fullName: 'Eram Shaikh',
  dateOfBirth: new Date(1993, 3, 18),
  email: 'eramshaikh22@gmail.com',
  phone: '+91 82864 41784',
  website: 'https://eramshaikh.com'
});

export { EramPerson };
