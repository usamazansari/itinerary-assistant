import { Injectable } from '@nestjs/common';
import { DateTime } from 'neo4j-driver';

import { Neo4jNode, Neo4jOutput } from '../../imports/models';
import { toJSDate, toNeo4jDateTime } from '../../imports/utils';

import { Person, PersonDTO } from '../../models';

@Injectable()
export class PersonHelper {
  extractPeople(result: Neo4jOutput<Person>) {
    return result.map(({ output }) => output).map(this.mapOutputToModel);
  }

  extractPerson(result: Neo4jOutput<Person>) {
    return this.extractPeople(result).at(0);
  }

  mapOutputToModel({ properties }: Neo4jNode<Person>) {
    const { dateOfBirth, ...rest } = properties;
    return !!dateOfBirth
      ? new Person({
          ...rest,
          dateOfBirth: toJSDate((<unknown>dateOfBirth) as DateTime)
        })
      : new Person({ ...rest });
  }

  generateCreateObject(create: { id: string; person: PersonDTO }) {
    const {
      id,
      person: { dateOfBirth, email, fullName, gender, phone, website }
    } = create;

    let _ = {};
    if (!!dateOfBirth) _ = { ..._, dateOfBirth: toNeo4jDateTime(dateOfBirth) };
    if (!!email) _ = { ..._, email };
    if (!!fullName) _ = { ..._, fullName };
    if (!!gender) _ = { ..._, gender };
    if (!!phone) _ = { ..._, phone };
    if (!!website) _ = { ..._, website };

    return { id, ..._ } as Partial<PersonDTO>;
  }

  generateUpdateObject(person: PersonDTO) {
    const { dateOfBirth, email, fullName, gender, phone, website } = person;

    let _ = {};
    if (!!dateOfBirth)
      _ = { ..._, ['person.dateOfBirth']: toNeo4jDateTime(dateOfBirth) };
    if (!!email) _ = { ..._, ['person.email']: email };
    if (!!fullName) _ = { ..._, ['person.fullName']: fullName };
    if (!!gender) _ = { ..._, ['person.gender']: gender };
    if (!!phone) _ = { ..._, ['person.phone']: phone };
    if (!!website) _ = { ..._, ['person.website']: website };
    return _ as Partial<PersonDTO>;
  }
}
