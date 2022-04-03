import { SocialConnection } from '../../../imports/models';
import { UsamaUserId } from '..';

export const UsamaSocialConnectionIds = {
  LinkedIn: 'user-1-social-1',
  Instagram: 'user-1-social-2',
  GitHub: 'user-1-social-3'
};

export const UsamaSocialConnections: SocialConnection[] = [
  new SocialConnection({
    id: 'user-1-social-1',
    url: 'https://www.linkedin.com/in/usama-ansari-81380080/',
    name: 'LinkedIn',
    userId: UsamaUserId
  }),
  new SocialConnection({
    id: 'user-1-social-2',
    url: 'https://instagram.com/usamazansari',
    name: 'Instagram',
    userId: UsamaUserId
  }),
  new SocialConnection({
    id: 'user-1-social-3',
    url: 'https://github.com/usamazansari',
    name: 'GitHub',
    userId: UsamaUserId
  })
];
