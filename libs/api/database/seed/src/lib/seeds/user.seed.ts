import { Gender, User, UserName, Address } from '../imports/models';
import {
  UserNameSeed,
  AddressSeed,
  PhotoSeed,
  SocialConnectionSeed,
  IdentificationSeed
} from '.';

export const UserSeed: User[] = [
  {
    id: 'user-1',
    username:
      UserNameSeed.find(username => username.userId === 'user-1') ??
      new UserName({}),
    dateOfBirth: new Date(1993, 9, 25),
    address:
      AddressSeed.find(address => address.userId === 'user-1') ??
      new Address({}),
    // gender: Gender.Male,
    email: 'usama251993@gmail.com',
    phone: '+91 80977 28350',
    website: 'https://usamaansari.com',
    socialConnections: SocialConnectionSeed.filter(
      social => social.userId === 'user-1'
    ),
    photos: PhotoSeed.filter(photo => photo.userId === 'user-1'),
    identifications: IdentificationSeed.filter(
      identification => identification.userId === 'user-1'
    )
  }
];
