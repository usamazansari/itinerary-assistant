import { UserName } from '../../imports/models';
import { EramUserId } from '..';

export const EramUserNameId = 'user-2-name';

export const EramUserName: UserName = new UserName({
  id: EramUserNameId,
  first: 'Eram',
  last: 'Shaikh',
  userId: EramUserId
});
