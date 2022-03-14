import { Gender } from '../../imports/constants';
import { User } from '../../imports/models';

export const GoaUsers: User[] = [
  {
    id: 'user-1',
    username: 'user-1-name',
    dateOfBirth: new Date(1993, 9, 25),
    address: 'user-1-address',
    gender: Gender.Male,
    email: 'usama251993@gmail.com',
    phone: '+91 80977 28350',
    website: 'https://usamaansari.com',
    socialConnection: [
      'user-1-social-1',
      'user-1-social-2',
      'user-1-social-3'
    ],
    photo: 'user-1-photo',
    identifications: ['user-1-id-1', 'user-1-id-2']
  }
];
