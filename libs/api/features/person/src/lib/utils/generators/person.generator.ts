import { DateTime } from 'neo4j-driver';
import { toJSDate, toNeo4jDateTime } from '../../imports/utils';

import { Person, PersonDTO } from '../../models';

const generateCreatePersonObject = ({
  id,
  dateOfBirth,
  email,
  fullName,
  gender,
  phone,
  website
}: Partial<Person>) => {
  let _ = {};
  if (!!id) _ = { ..._, id };
  if (!!dateOfBirth) _ = { ..._, dateOfBirth: toNeo4jDateTime(dateOfBirth) };
  if (!!email) _ = { ..._, email };
  if (!!fullName) _ = { ..._, fullName };
  if (!!gender) _ = { ..._, gender };
  if (!!phone) _ = { ..._, phone };
  if (!!website) _ = { ..._, website };

  return new Person({ ..._ });
};

const generateReadPersonObject = ({
  id,
  dateOfBirth,
  email,
  fullName,
  gender,
  phone,
  website
}: Partial<Person>) => {
  let _ = {};
  if (!!id) _ = { ..._, id };
  if (!!dateOfBirth)
    _ = { ..._, dateOfBirth: toJSDate((<unknown>dateOfBirth) as DateTime) };
  if (!!email) _ = { ..._, email };
  if (!!fullName) _ = { ..._, fullName };
  if (!!gender) _ = { ..._, gender };
  if (!!phone) _ = { ..._, phone };
  if (!!website) _ = { ..._, website };

  return new Person({ ..._ });
};

const generateUpdatePersonObject = ({
  dateOfBirth,
  email,
  fullName,
  gender,
  phone,
  website
}: Partial<PersonDTO>) => {
  let _ = {};
  if (!!dateOfBirth)
    _ = { ..._, ['person.dateOfBirth']: toNeo4jDateTime(dateOfBirth) };
  if (!!email) _ = { ..._, ['person.email']: email };
  if (!!fullName) _ = { ..._, ['person.fullName']: fullName };
  if (!!gender) _ = { ..._, ['person.gender']: gender };
  if (!!phone) _ = { ..._, ['person.phone']: phone };
  if (!!website) _ = { ..._, ['person.website']: website };
  return new PersonDTO({ ..._ });
};

export {
  generateCreatePersonObject,
  generateReadPersonObject,
  generateUpdatePersonObject
};
