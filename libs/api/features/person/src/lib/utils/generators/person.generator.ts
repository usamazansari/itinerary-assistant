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
}: Person) => {
  let _ = {};
  if (!!id) _ = { ..._, id };
  if (!!dateOfBirth) _ = { ..._, dateOfBirth: toNeo4jDateTime(dateOfBirth) };
  if (!!email) _ = { ..._, email };
  if (!!fullName) _ = { ..._, fullName };
  if (!!gender) _ = { ..._, gender };
  if (!!phone) _ = { ..._, phone };
  if (!!website) _ = { ..._, website };

  return { ..._ } as Partial<Person>;
};

const generateReadPersonObject = ({
  id,
  dateOfBirth,
  email,
  fullName,
  gender,
  phone,
  website
}: Person) => {
  let _ = {};
  if (!!id) _ = { ..._, id };
  if (!!dateOfBirth)
    _ = { ..._, dateOfBirth: toJSDate((<unknown>dateOfBirth) as DateTime) };
  if (!!email) _ = { ..._, email };
  if (!!fullName) _ = { ..._, fullName };
  if (!!gender) _ = { ..._, gender };
  if (!!phone) _ = { ..._, phone };
  if (!!website) _ = { ..._, website };

  return { ..._ } as Partial<Person>;
};

const generateUpdatePersonObject = ({
  dateOfBirth,
  email,
  fullName,
  gender,
  phone,
  website
}: PersonDTO) => {
  let _ = {};
  if (!!dateOfBirth)
    _ = { ..._, ['person.dateOfBirth']: toNeo4jDateTime(dateOfBirth) };
  if (!!email) _ = { ..._, ['person.email']: email };
  if (!!fullName) _ = { ..._, ['person.fullName']: fullName };
  if (!!gender) _ = { ..._, ['person.gender']: gender };
  if (!!phone) _ = { ..._, ['person.phone']: phone };
  if (!!website) _ = { ..._, ['person.website']: website };
  return _ as Partial<PersonDTO>;
};

export {
  generateCreatePersonObject,
  generateReadPersonObject,
  generateUpdatePersonObject
};
