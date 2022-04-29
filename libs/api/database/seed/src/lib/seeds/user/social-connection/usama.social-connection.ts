import { SocialConnection } from '../../../imports/models';
import { UsamaPersonId } from '..';

export const UsamaSocialConnectionIds = {
  LinkedIn: 'person-1-social-1',
  Instagram: 'person-1-social-2',
  GitHub: 'person-1-social-3'
};

export const UsamaSocialConnections: SocialConnection[] = [
  new SocialConnection({
    id: 'person-1-social-1',
    url: 'https://www.linkedin.com/in/usama-ansari-81380080/',
    name: 'LinkedIn',
    personId: UsamaPersonId
  }),
  new SocialConnection({
    id: 'person-1-social-2',
    url: 'https://instagram.com/usamazansari',
    name: 'Instagram',
    personId: UsamaPersonId
  }),
  new SocialConnection({
    id: 'person-1-social-3',
    url: 'https://github.com/usamazansari',
    name: 'GitHub',
    personId: UsamaPersonId
  })
];
