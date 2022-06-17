/* eslint-disable @typescript-eslint/no-explicit-any */
import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
  /** Point scalar type */
  Point: any;
};

export type Address = {
  __typename?: 'Address';
  apartment: Scalars['String'];
  city: Scalars['String'];
  country: Scalars['String'];
  id: Scalars['ID'];
  landmark: Scalars['String'];
  locality: Scalars['String'];
  location: Location;
  residents: Array<Person>;
  room: Scalars['String'];
  state: Scalars['String'];
  street: Scalars['String'];
  suburb: Scalars['String'];
  wing: Scalars['String'];
  zip: Scalars['String'];
};

export type AddressInput = {
  apartment?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  landmark?: InputMaybe<Scalars['String']>;
  locality?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  room?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  street?: InputMaybe<Scalars['String']>;
  suburb?: InputMaybe<Scalars['String']>;
  wing?: InputMaybe<Scalars['String']>;
  zip?: InputMaybe<Scalars['String']>;
};

export type Coordinates = {
  __typename?: 'Coordinates';
  coordinates: Scalars['Point'];
  id: Scalars['ID'];
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type CoordinatesInput = {
  id?: InputMaybe<Scalars['String']>;
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
};

export type Demographics = {
  __typename?: 'Demographics';
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  middleName: Scalars['String'];
  nickname: Scalars['String'];
  salutation: Salutation;
};

export type DemographicsInput = {
  firstName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  middleName?: InputMaybe<Scalars['String']>;
  nickname?: InputMaybe<Scalars['String']>;
  salutation?: InputMaybe<Salutation>;
};

/** The gender of the person */
export enum Gender {
  Female = 'FEMALE',
  Male = 'MALE',
  Other = 'OTHER'
}

export type Identification = {
  __typename?: 'Identification';
  id: Scalars['ID'];
  name: Scalars['String'];
  number: Scalars['String'];
  type: Scalars['String'];
  validity: Tenure;
};

export type IdentificationInput = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  number?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type Location = {
  __typename?: 'Location';
  coordinates: Coordinates;
  id: Scalars['ID'];
  plusCode: Scalars['String'];
};

export type LocationInput = {
  id?: InputMaybe<Scalars['String']>;
  plusCode?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  associateAddressWithLocation: Address;
  associateAddressWithPerson: Address;
  associateCoordinatesWithLocation: Coordinates;
  associateDemographicsWithPerson: Demographics;
  associateIdentificationWithPerson: Identification;
  associateIdentificationWithTenure: Identification;
  associateSocialConnectionWithPerson: SocialConnection;
  createAddress: Address;
  createCoordinates: Coordinates;
  createDemographics: Demographics;
  createIdentification: Identification;
  createLocation: Location;
  createPerson: Person;
  createSocialConnection: SocialConnection;
  createTenure: Tenure;
  deleteAddress: Address;
  deleteCoordinates: Coordinates;
  deleteDemographics: Scalars['Boolean'];
  deleteIdentification: Scalars['Boolean'];
  deleteLocation: Location;
  deletePerson: Person;
  deleteSocialConnection: Scalars['Boolean'];
  deleteTenure: Tenure;
  updateAddress: Address;
  updateCoordinates: Coordinates;
  updateDemographics: Demographics;
  updateIdentification: Identification;
  updateLocation: Location;
  updatePerson: Person;
  updateSocialConnection: SocialConnection;
  updateTenure: Tenure;
};

export type MutationAssociateAddressWithLocationArgs = {
  addressId: Scalars['String'];
  locationId: Scalars['String'];
};

export type MutationAssociateAddressWithPersonArgs = {
  addressId: Scalars['String'];
  personId: Scalars['String'];
};

export type MutationAssociateCoordinatesWithLocationArgs = {
  coordinatesId: Scalars['String'];
  locationId: Scalars['String'];
};

export type MutationAssociateDemographicsWithPersonArgs = {
  demographicsId: Scalars['String'];
  personId: Scalars['String'];
};

export type MutationAssociateIdentificationWithPersonArgs = {
  identificationId: Scalars['String'];
  personId: Scalars['String'];
};

export type MutationAssociateIdentificationWithTenureArgs = {
  identificationId: Scalars['String'];
  tenureId: Scalars['String'];
};

export type MutationAssociateSocialConnectionWithPersonArgs = {
  personId: Scalars['String'];
  socialConnectionId: Scalars['String'];
};

export type MutationCreateAddressArgs = {
  address: AddressInput;
};

export type MutationCreateCoordinatesArgs = {
  coordinates: CoordinatesInput;
};

export type MutationCreateDemographicsArgs = {
  demographics: DemographicsInput;
};

export type MutationCreateIdentificationArgs = {
  identification: IdentificationInput;
};

export type MutationCreateLocationArgs = {
  location: LocationInput;
};

export type MutationCreatePersonArgs = {
  person: PersonInput;
};

export type MutationCreateSocialConnectionArgs = {
  socialConnection: SocialConnectionInput;
};

export type MutationCreateTenureArgs = {
  tenure: TenureInput;
};

export type MutationDeleteAddressArgs = {
  id: Scalars['String'];
};

export type MutationDeleteCoordinatesArgs = {
  id: Scalars['String'];
};

export type MutationDeleteDemographicsArgs = {
  id: Scalars['String'];
};

export type MutationDeleteIdentificationArgs = {
  id: Scalars['String'];
};

export type MutationDeleteLocationArgs = {
  id: Scalars['String'];
};

export type MutationDeletePersonArgs = {
  id: Scalars['String'];
};

export type MutationDeleteSocialConnectionArgs = {
  id: Scalars['String'];
};

export type MutationDeleteTenureArgs = {
  id: Scalars['String'];
};

export type MutationUpdateAddressArgs = {
  address: AddressInput;
  id: Scalars['String'];
};

export type MutationUpdateCoordinatesArgs = {
  coordinates: CoordinatesInput;
  id: Scalars['String'];
};

export type MutationUpdateDemographicsArgs = {
  demographics: DemographicsInput;
  id: Scalars['String'];
};

export type MutationUpdateIdentificationArgs = {
  id: Scalars['String'];
  identification: IdentificationInput;
};

export type MutationUpdateLocationArgs = {
  id: Scalars['String'];
  location: LocationInput;
};

export type MutationUpdatePersonArgs = {
  id: Scalars['String'];
  person: PersonInput;
};

export type MutationUpdateSocialConnectionArgs = {
  id: Scalars['String'];
  socialConnection: SocialConnectionInput;
};

export type MutationUpdateTenureArgs = {
  id: Scalars['String'];
  tenure: TenureInput;
};

export type Person = {
  __typename?: 'Person';
  address: Address;
  dateOfBirth?: Maybe<Scalars['DateTime']>;
  demographics: Demographics;
  email: Scalars['String'];
  fullName: Scalars['String'];
  gender?: Maybe<Gender>;
  id: Scalars['ID'];
  identifications: Array<Identification>;
  phone: Scalars['String'];
  socialConnections: Array<SocialConnection>;
  website: Scalars['String'];
};

export type PersonInput = {
  dateOfBirth?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  fullName?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Gender>;
  id?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  getAddress: Address;
  getCoordinates: Coordinates;
  getDemographics: Demographics;
  getIdentification: Identification;
  getLocation: Location;
  getPeople: Array<Person>;
  getPerson: Person;
  getSocialConnection: SocialConnection;
  getTenure: Tenure;
};

export type QueryGetAddressArgs = {
  id: Scalars['String'];
};

export type QueryGetCoordinatesArgs = {
  id: Scalars['String'];
};

export type QueryGetDemographicsArgs = {
  id: Scalars['String'];
};

export type QueryGetIdentificationArgs = {
  id: Scalars['String'];
};

export type QueryGetLocationArgs = {
  id: Scalars['String'];
};

export type QueryGetPersonArgs = {
  id: Scalars['String'];
};

export type QueryGetSocialConnectionArgs = {
  id: Scalars['String'];
};

export type QueryGetTenureArgs = {
  id: Scalars['String'];
};

/** The salutation associated with the demographics of the person */
export enum Salutation {
  Doctor = 'DOCTOR',
  Miss = 'MISS',
  Mister = 'MISTER',
  Mistress = 'MISTRESS'
}

export type SocialConnection = {
  __typename?: 'SocialConnection';
  id: Scalars['ID'];
  name: Scalars['String'];
  url: Scalars['String'];
};

export type SocialConnectionInput = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type Tenure = {
  __typename?: 'Tenure';
  end: Scalars['DateTime'];
  id: Scalars['ID'];
  start: Scalars['DateTime'];
};

export type TenureInput = {
  end?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['DateTime']>;
};

export type GetPeopleQueryVariables = Exact<{ [key: string]: never }>;

export type GetPeopleQuery = {
  __typename?: 'Query';
  getPeople: Array<{
    __typename?: 'Person';
    id: string;
    fullName: string;
    gender?: Gender | null;
    phone: string;
    dateOfBirth?: any | null;
    website: string;
    email: string;
  }>;
};

export type GetPersonQueryVariables = Exact<{
  personId: Scalars['String'];
}>;

export type GetPersonQuery = {
  __typename?: 'Query';
  getPerson: {
    __typename?: 'Person';
    id: string;
    fullName: string;
    gender?: Gender | null;
    phone: string;
    dateOfBirth?: any | null;
    website: string;
    email: string;
    address: {
      __typename?: 'Address';
      room: string;
      apartment: string;
      wing: string;
      street: string;
      landmark: string;
      locality: string;
      suburb: string;
      city: string;
      zip: string;
      state: string;
      country: string;
      location: {
        __typename?: 'Location';
        plusCode: string;
        coordinates: {
          __typename?: 'Coordinates';
          latitude?: number | null;
          longitude?: number | null;
        };
      };
      residents: Array<{
        __typename?: 'Person';
        fullName: string;
        email: string;
      }>;
    };
    demographics: {
      __typename?: 'Demographics';
      salutation: Salutation;
      firstName: string;
      middleName: string;
      lastName: string;
      nickname: string;
    };
    identifications: Array<{
      __typename?: 'Identification';
      type: string;
      number: string;
      name: string;
      validity: { __typename?: 'Tenure'; start: any; end: any };
    }>;
    socialConnections: Array<{
      __typename?: 'SocialConnection';
      name: string;
      url: string;
    }>;
  };
};

export type CreatePersonMutationVariables = Exact<{
  createInput: PersonInput;
}>;

export type CreatePersonMutation = {
  __typename?: 'Mutation';
  createPerson: {
    __typename?: 'Person';
    id: string;
    fullName: string;
    gender?: Gender | null;
    phone: string;
    dateOfBirth?: any | null;
    website: string;
    email: string;
  };
};

export type UpdatePersonMutationVariables = Exact<{
  personId: Scalars['String'];
  updateInput: PersonInput;
}>;

export type UpdatePersonMutation = {
  __typename?: 'Mutation';
  updatePerson: {
    __typename?: 'Person';
    id: string;
    fullName: string;
    gender?: Gender | null;
    phone: string;
    dateOfBirth?: any | null;
    website: string;
    email: string;
  };
};

export type DeletePersonMutationVariables = Exact<{
  personId: Scalars['String'];
}>;

export type DeletePersonMutation = {
  __typename?: 'Mutation';
  deletePerson: { __typename?: 'Person'; fullName: string };
};

export const GetPeopleDocument = gql`
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

@Injectable({
  providedIn: 'root'
})
export class GetPeopleGQL extends Apollo.Query<
  GetPeopleQuery,
  GetPeopleQueryVariables
> {
  override document = GetPeopleDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const GetPersonDocument = gql`
  query GetPerson($personId: String!) {
    getPerson(id: $personId) {
      id
      fullName
      gender
      phone
      dateOfBirth
      website
      email
      address {
        room
        apartment
        wing
        street
        landmark
        locality
        suburb
        city
        zip
        state
        country
        location {
          plusCode
          coordinates {
            latitude
            longitude
          }
        }
        residents {
          fullName
          email
        }
      }
      demographics {
        salutation
        firstName
        middleName
        lastName
        nickname
      }
      identifications {
        type
        number
        name
        validity {
          start
          end
        }
      }
      socialConnections {
        name
        url
      }
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class GetPersonGQL extends Apollo.Query<
  GetPersonQuery,
  GetPersonQueryVariables
> {
  override document = GetPersonDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const CreatePersonDocument = gql`
  mutation CreatePerson($createInput: PersonInput!) {
    createPerson(person: $createInput) {
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

@Injectable({
  providedIn: 'root'
})
export class CreatePersonGQL extends Apollo.Mutation<
  CreatePersonMutation,
  CreatePersonMutationVariables
> {
  override document = CreatePersonDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const UpdatePersonDocument = gql`
  mutation UpdatePerson($personId: String!, $updateInput: PersonInput!) {
    updatePerson(id: $personId, person: $updateInput) {
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

@Injectable({
  providedIn: 'root'
})
export class UpdatePersonGQL extends Apollo.Mutation<
  UpdatePersonMutation,
  UpdatePersonMutationVariables
> {
  override document = UpdatePersonDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const DeletePersonDocument = gql`
  mutation DeletePerson($personId: String!) {
    deletePerson(id: $personId) {
      fullName
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class DeletePersonGQL extends Apollo.Mutation<
  DeletePersonMutation,
  DeletePersonMutationVariables
> {
  override document = DeletePersonDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
