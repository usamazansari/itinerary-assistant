// TODO: Usama Ansari - Change the name to IUserSocialConnection
export interface ISocialConnection {
  id: string;
  name: string;
  url: string;
  userId: string;
}

const Timestamp = new Date().toISOString().valueOf();

const SocialConnectionStub: ISocialConnection = {
  id: `new-connection-${Timestamp}`,
  name: '',
  url: '',
  userId: `user-for-new-connection-${Timestamp}`
};

export class SocialConnection implements ISocialConnection {
  id: string;
  name: string;
  url: string;
  userId: string;

  constructor({
    id = SocialConnectionStub.id,
    name = SocialConnectionStub.name,
    url = SocialConnectionStub.url,
    userId = SocialConnectionStub.userId
  }: Partial<ISocialConnection>) {
    this.id = id;
    this.name = name;
    this.url = url;
    this.userId = userId;
  }
}

type SocialConnectionDTOOmitType = 'id';

export class SocialConnectionDTO
  implements Omit<ISocialConnection, SocialConnectionDTOOmitType>
{
  name: string;
  url: string;
  userId: string;

  constructor({
    name = SocialConnectionStub.name,
    url = SocialConnectionStub.url,
    userId = SocialConnectionStub.userId
  }: Partial<ISocialConnection>) {
    this.name = name;
    this.url = url;
    this.userId = userId;
  }
}
