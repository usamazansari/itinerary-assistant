import { gql } from 'apollo-angular';

const GET_PEOPLE = gql`
  query GetPeople {
    getPeople {
      id
      fullName
      gender
      phone
      dateOfBirth
      website
      email
    }
  }
`;

const PERSON_QUERY = {
  GET_PEOPLE
};

export { PERSON_QUERY };
