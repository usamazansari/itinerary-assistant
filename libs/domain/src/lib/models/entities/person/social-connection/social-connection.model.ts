import { Person, PersonDTO } from '..';

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
  person: Person;
}

export class SocialConnection implements ISocialConnection {
  id: string;
  name: string;
  url: string;
  person: Person;

  constructor({
    id = '',
    name = BaseStub.name,
    url = BaseStub.url,
    person = new Person({ id: '' })
  }: Partial<ISocialConnection>) {
    this.id = id;
    this.name = name;
    this.url = url;
    this.person = person;
  }
}

interface ISocialConnectionDTO extends ISocialConnectionBase {
  person: PersonDTO;
}

export class SocialConnectionDTO implements ISocialConnectionDTO {
  name: string;
  url: string;
  person: PersonDTO;

  constructor({
    name = BaseStub.name,
    url = BaseStub.url,
    person = new PersonDTO({})
  }: Partial<ISocialConnectionDTO>) {
    this.name = name;
    this.url = url;
    this.person = person;
  }
}
