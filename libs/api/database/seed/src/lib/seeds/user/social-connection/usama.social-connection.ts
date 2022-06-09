import { SocialConnection } from '../../../imports/models';
import { UsamaPerson } from '..';

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
    person: UsamaPerson
  }),
  new SocialConnection({
    id: 'person-1-social-2',
    url: 'https://instagram.com/usamazansari',
    name: 'Instagram',
    person: UsamaPerson
  }),
  new SocialConnection({
    id: 'person-1-social-3',
    url: 'https://github.com/usamazansari',
    name: 'GitHub',
    person: UsamaPerson
  })
];
