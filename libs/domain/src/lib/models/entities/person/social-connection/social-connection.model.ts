interface ISocialConnectionBase {
  name: string;
  url: string;
}

const BaseStub: ISocialConnectionBase = {
  name: '',
  url: ''
};

export interface ISocialConnection extends ISocialConnectionBase {
  id: string;
}

export class SocialConnection implements ISocialConnection {
  id: string;
  name: string;
  url: string;

  constructor({
    id = '',
    name = BaseStub.name,
    url = BaseStub.url
  }: Partial<ISocialConnection>) {
    this.id = id;
    this.name = name;
    this.url = url;
  }
}

type ISocialConnectionDTO = ISocialConnectionBase;

export class SocialConnectionDTO implements ISocialConnectionDTO {
  name: string;
  url: string;

  constructor({
    name = BaseStub.name,
    url = BaseStub.url
  }: Partial<ISocialConnectionDTO>) {
    this.name = name;
    this.url = url;
  }
}
