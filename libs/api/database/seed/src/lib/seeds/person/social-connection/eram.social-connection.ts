import { SocialConnection } from '../../../imports/models';

export const EramSocialConnectionIds = {
  LinkedIn: 'person-2-social-1',
  Instagram: 'person-2-social-2'
};

export const EramSocialConnections: SocialConnection[] = [
  new SocialConnection({
    id: EramSocialConnectionIds.LinkedIn,
    url: 'https://www.linkedin.com/in/usama-ansari-81380080/',
    name: 'LinkedIn'
  }),
  new SocialConnection({
    id: EramSocialConnectionIds.Instagram,
    url: 'https://instagram.com/rum_rum',
    name: 'Instagram'
  })
];
