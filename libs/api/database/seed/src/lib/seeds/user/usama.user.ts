import { User } from '../../imports/models';
import {
  // UsamaAddress,
  // UsamaIdentifications,
  // UsamaPhotos,
  // UsamaSocialConnections,
  UsamaDemographics
} from '..';

export const UsamaPersonId = 'person-1';

export const UsamaPerson: User = new User({
  id: 'person-1',
  fullName: 'Usama Ansari',
  demographics: UsamaDemographics,
  dateOfBirth: new Date(1993, 9, 25),
  email: 'usama251993@gmail.com',
  phone: '+91 80977 28350',
  website: 'https://usamaansari.com'
  // address: UsamaAddress,
  // identifications: UsamaIdentifications,
  // photos: UsamaPhotos,
  // socialConnections: UsamaSocialConnections
});
