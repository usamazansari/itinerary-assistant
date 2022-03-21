import { SocialConnection } from '../../imports/models';
import { EramUserId } from '..';

export const EramSocialConnectionIds = {
  LinkedIn: 'user-2-social-1',
  Instagram: 'user-2-social-2'
};

export const EramSocialConnections: SocialConnection[] = [
  new SocialConnection({
    id: 'user-2-social-1',
    url: 'https://www.linkedin.com/in/usama-ansari-81380080/',
    name: 'LinkedIn',
    userId: EramUserId
  }),
  new SocialConnection({
    id: 'user-2-social-2',
    url: 'https://instagram.com/rum_rum',
    name: 'Instagram',
    userId: EramUserId
  })
];
