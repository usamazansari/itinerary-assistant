import { Photo } from '../../../imports/models';
import { EramPersonId } from '..';

export const EramPhotoIds = {
  Profile: 'person-2-photo-1'
};

export const EramPhotos: Photo[] = [
  new Photo({
    id: EramPhotoIds.Profile,
    large: 'https://randomuser.me/api/portraits/eramshaikh',
    medium: 'https://randomuser.me/api/portraits/medium/eramshaikh',
    thumbnail: 'https://randomuser.me/api/portraits/thumb/eramshaikh',
    personId: EramPersonId
  })
];
