export interface ISocialConnection {
  id: string;
  name: string;
  url: string;
  personId: string;
}

const Timestamp = new Date().toISOString().valueOf();

const SocialConnectionStub: ISocialConnection = {
  id: `new-connection-${Timestamp}`,
  name: '',
  url: '',
  personId: `person-for-new-connection-${Timestamp}`
};

export class SocialConnection implements ISocialConnection {
  id: string;
  name: string;
  url: string;
  personId: string;

  constructor({
    id = SocialConnectionStub.id,
    name = SocialConnectionStub.name,
    url = SocialConnectionStub.url,
    personId = SocialConnectionStub.personId
  }: Partial<ISocialConnection>) {
    this.id = id;
    this.name = name;
    this.url = url;
    this.personId = personId;
  }
}

type SocialConnectionDTOOmitType = 'id';

export class SocialConnectionDTO
  implements Omit<ISocialConnection, SocialConnectionDTOOmitType>
{
  name: string;
  url: string;
  personId: string;

  constructor({
    name = SocialConnectionStub.name,
    url = SocialConnectionStub.url,
    personId = SocialConnectionStub.personId
  }: Partial<ISocialConnection>) {
    this.name = name;
    this.url = url;
    this.personId = personId;
  }
}
