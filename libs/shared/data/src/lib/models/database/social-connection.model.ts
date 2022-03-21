export interface ISocialConnection {
  id: string;
  name: string;
  url: string;
  // user: string;
}

const Timestamp = new Date().toISOString();

const SocialConnectionStub: ISocialConnection = {
  id: `new-connection-${Timestamp}`,
  name: '',
  url: ''
  // user: `user-for-new-connection-${Timestamp}`
};

export class SocialConnection implements ISocialConnection {
  id: string;
  name: string;
  url: string;
  // user: string;

  constructor({
    id = SocialConnectionStub.id,
    name = SocialConnectionStub.name,
    url = SocialConnectionStub.url
  }: // user = SocialConnectionStub.user
  Partial<ISocialConnection>) {
    this.id = id;
    this.name = name;
    this.url = url;
    // this.user = user;
  }
}

type SocialConnectionDTOOmitType = 'id';

export class SocialConnectionDTO
  implements Omit<ISocialConnection, SocialConnectionDTOOmitType>
{
  name: string;
  url: string;
  // user: string;

  constructor({
    name = SocialConnectionStub.name,
    url = SocialConnectionStub.url
  }: // user = SocialConnectionStub.user
  Partial<ISocialConnection>) {
    this.name = name;
    this.url = url;
    // this.user = user;
  }
}
