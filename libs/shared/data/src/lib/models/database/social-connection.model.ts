export interface ISocialConnection {
  name: string;
  url: string;
}

const SocialConnectionStub: ISocialConnection = {
  name: '',
  url: ''
};

export class SocialConnection implements ISocialConnection {
  name: string;
  url: string;

  constructor({
    name = SocialConnectionStub.name,
    url = SocialConnectionStub.url
  }: Partial<ISocialConnection>) {
    this.name = name;
    this.url = url;
  }
}
