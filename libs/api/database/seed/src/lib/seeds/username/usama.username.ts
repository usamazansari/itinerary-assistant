import { UserName } from '../../imports/models';
import { UsamaUserId } from '..';

export const UsamaUserNameId = 'user-1-name';

export const UsamaUserName: UserName = new UserName({
  id: UsamaUserNameId,
  first: 'Usama',
  last: 'Ansari',
  userId: UsamaUserId
});
