import { Photo } from '../../imports/models';
import { UsamaUserId } from '..';

export const UsamaPhotoIds = {
  Profile: 'user-1-photo-1'
};

export const UsamaPhotos: Photo[] = [
  new Photo({
    id: UsamaPhotoIds.Profile,
    large: 'https://randomuser.me/api/portraits/usamaansari',
    medium: 'https://randomuser.me/api/portraits/medium/usamaansari',
    thumbnail: 'https://randomuser.me/api/portraits/thumb/usamaansari',
    userId: UsamaUserId
  })
];
