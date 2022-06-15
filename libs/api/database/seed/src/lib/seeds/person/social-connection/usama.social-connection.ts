import { SocialConnection } from '../../../imports/models';

export const UsamaSocialConnectionIds = {
  LinkedIn: 'person-1-social-1',
  Instagram: 'person-1-social-2',
  GitHub: 'person-1-social-3'
};

export const UsamaSocialConnections: SocialConnection[] = [
  new SocialConnection({
    id: UsamaSocialConnectionIds.LinkedIn,
    url: 'https://www.linkedin.com/in/usama-ansari-81380080/',
    name: 'LinkedIn'
  }),
  new SocialConnection({
    id: UsamaSocialConnectionIds.Instagram,
    url: 'https://instagram.com/usamazansari',
    name: 'Instagram'
  }),
  new SocialConnection({
    id: UsamaSocialConnectionIds.GitHub,
    url: 'https://github.com/usamazansari',
    name: 'GitHub'
  })
];
