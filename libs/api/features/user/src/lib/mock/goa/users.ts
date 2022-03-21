import { Gender } from '../../imports/constants';
import { User } from '../../imports/models';

export const GoaUsers: User[] = [
  {
    id: 'user-1',
    username: {
      id: 'user-1-name',
      first: 'Usama',
      last: 'Ansari',
      full: 'Usama Ansari'
    },
    dateOfBirth: new Date(1993, 9, 25),
    // address: {
    //   id: 'user-1-address',
    //   room: '1301',
    //   wing: 'A',
    //   apartment: 'Sayba Nx',
    //   street: 'S. G. Barve Marg',
    //   landmark: 'Opposite Kurla Railway Station',
    //   locality: 'Nehru Nagar',
    //   suburb: 'Kurla East',
    //   city: 'Mumbai',
    //   state: 'Maharashtra',
    //   country: 'India',
    //   zip: '400024',
    //   name: 'Rent',
    //   location: {
    //     id: 'user-1-address-location',
    //     plusCode: '3V7J+59 Mumbai, Maharashtra',
    //     coordinates: {
    //       id: 'user-1-address-location-coordinates',
    //       latitude: 19.0628191,
    //       longitude: 72.8808394,
    //       location: 'user-1-address-location'
    //     },
    //     timezone: {
    //       id: 'user-1-address-location-timezone',
    //       offset: 5.5,
    //       description: 'Asia/Kolkata',
    //       location: 'user-1-address-location'
    //     }
    //   }
    // },
    // gender: Gender.Male,
    email: 'usama251993@gmail.com',
    phone: '+91 80977 28350',
    website: 'https://usamaansari.com'
    // socialConnection: [
    //   {
    //     id: 'user-1-social-1',
    //     url: 'https://www.linkedin.com/in/usama-ansari-81380080/',
    //     name: 'LinkedIn',
    //     user: 'user-1'
    //   },
    //   {
    //     id: 'user-1-social-2',
    //     url: 'https://instagram.com/usamazansari',
    //     name: 'Instagram',
    //     user: 'user-1'
    //   },
    //   {
    //     id: 'user-1-social-3',
    //     url: 'https://github.com/usamazansari',
    //     name: 'GitHub',
    //     user: 'user-1'
    //   }
    // ],
    // photo: {
    //   id: 'user-1-photo',
    //   large: 'https://randomuser.me/api/portraits/usamaansari',
    //   medium: 'https://randomuser.me/api/portraits/medium/usamaansari',
    //   thumbnail:
    //     'https://randomuser.me/api/portraits/thumb/usamaansari',
    //   user: 'user-1'
    // },
    // identifications: [
    //   {
    //     id: 'user-1-id-1',
    //     type: 'government',
    //     number: '871797443404',
    //     name: 'Aadhar Card',
    //     validity: 'user-1-id-1-validity',
    //     user: 'user-1'
    //   },
    //   {
    //     id: 'user-1-id-2',
    //     type: 'passport',
    //     number: 'M6968768',
    //     name: 'Passport',
    //     validity: 'user-1-id-2-validity',
    //     user: 'user-1'
    //   }
    // ]
  }
];
