import { Injectable } from '@nestjs/common';

import { PersonDTO } from '../../imports/models';
import { parseToDateTime } from '../../imports/utils';

@Injectable()
export class PersonHelper {
  generateCreateObject(create: { id: string; person: PersonDTO }) {
    const {
      id,
      person: { dateOfBirth, email, fullName, gender, phone, website }
    } = create;

    let _ = {};
    if (!!dateOfBirth) _ = { ..._, dateOfBirth: parseToDateTime(dateOfBirth) };
    if (!!email) _ = { ..._, email };
    if (!!fullName) _ = { ..._, fullName };
    if (!!gender) _ = { ..._, gender };
    if (!!phone) _ = { ..._, phone };
    if (!!website) _ = { ..._, website };

    return { id, ..._ };
  }

  generateUpdateObject(person: PersonDTO) {
    const { dateOfBirth, email, fullName, gender, phone, website } = person;

    let _ = {};
    if (!!dateOfBirth)
      _ = { ..._, [`person.dateOfBirth`]: parseToDateTime(dateOfBirth) };
    if (!!email) _ = { ..._, [`person.email`]: email };
    if (!!fullName) _ = { ..._, [`person.fullName`]: fullName };
    if (!!gender) _ = { ..._, [`person.gender`]: gender };
    if (!!phone) _ = { ..._, [`person.phone`]: phone };
    if (!!website) _ = { ..._, [`person.website`]: website };
    return _;
  }
}
