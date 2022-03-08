export interface ISocialConnection {
  id: string;
  name: string;
  url: string;
  userId: string;
}

const SocialConnectionStub: ISocialConnection = {
  id: `new-connection-${new Date().toISOString()}`,
  name: '',
  url: '',
  userId: `new-connection-for-user-${new Date().toISOString()}`
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
