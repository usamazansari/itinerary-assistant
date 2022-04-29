import { SocialConnection } from '../../../imports/models';
import { EramUserId } from '..';

export const EramSocialConnectionIds = {
  LinkedIn: 'person-2-social-1',
  Instagram: 'person-2-social-2'
};

export const EramSocialConnections: SocialConnection[] = [
  new SocialConnection({
    id: 'person-2-social-1',
    url: 'https://www.linkedin.com/in/usama-ansari-81380080/',
    name: 'LinkedIn',
    personId: EramUserId
  }),
  new SocialConnection({
    id: 'person-2-social-2',
    url: 'https://instagram.com/rum_rum',
    name: 'Instagram',
    personId: EramUserId
  })
];
