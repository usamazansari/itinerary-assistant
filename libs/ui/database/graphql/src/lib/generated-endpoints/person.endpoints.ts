import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type Address = {
  __typename?: 'Address';
  addressType: Scalars['String'];
  apartment: Scalars['String'];
  city: Scalars['String'];
  country: Scalars['String'];
  id: Scalars['ID'];
  landmark: Scalars['String'];
  locality: Scalars['String'];
  residents: Array<Person>;
  room: Scalars['String'];
  state: Scalars['String'];
  street: Scalars['String'];
  suburb: Scalars['String'];
  wing: Scalars['String'];
  zip: Scalars['String'];
};

export type AddressInput = {
  addressType?: InputMaybe<Scalars['String']>;
  apartment?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  landmark?: InputMaybe<Scalars['String']>;
  locality?: InputMaybe<Scalars['String']>;
  room?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  street?: InputMaybe<Scalars['String']>;
  suburb?: InputMaybe<Scalars['String']>;
  wing?: InputMaybe<Scalars['String']>;
  zip?: InputMaybe<Scalars['String']>;
};

/** The gender of the person */
export enum Gender {
  Female = 'FEMALE',
  Male = 'MALE',
  Other = 'OTHER'
}

export type Mutation = {
  __typename?: 'Mutation';
  associateAddressWithPerson: Address;
  createAddress: Address;
  createPerson: Person;
  deleteAddress: Address;
  deletePerson: Person;
  updateAddress: Address;
  updatePerson: Person;
};


export type MutationAssociateAddressWithPersonArgs = {
  addressId: Scalars['String'];
  personId: Scalars['String'];
};


export type MutationCreateAddressArgs = {
  address: AddressInput;
};


export type MutationCreatePersonArgs = {
  person: PersonInput;
};


export type MutationDeleteAddressArgs = {
  id: Scalars['String'];
};


export type MutationDeletePersonArgs = {
  id: Scalars['String'];
};


export type MutationUpdateAddressArgs = {
  address: AddressInput;
  id: Scalars['String'];
};


export type MutationUpdatePersonArgs = {
  id: Scalars['String'];
  person: PersonInput;
};

export type Person = {
  __typename?: 'Person';
  addresses: Array<Address>;
  dateOfBirth?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  fullName: Scalars['String'];
  gender?: Maybe<Gender>;
  id: Scalars['ID'];
  phone: Scalars['String'];
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
  getPeople: Array<Person>;
  getPerson: Person;
  gqlSanity: Person;
};


export type QueryGetAddressArgs = {
  id: Scalars['String'];
};


export type QueryGetPersonArgs = {
  id: Scalars['String'];
};

export type GetPeopleQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPeopleQuery = { __typename?: 'Query', getPeople: Array<{ __typename?: 'Person', id: string, fullName: string, gender?: Gender | null, phone: string, dateOfBirth?: any | null, website: string, email: string }> };

export type GetPersonQueryVariables = Exact<{
  personId: Scalars['String'];
}>;


export type GetPersonQuery = { __typename?: 'Query', getPerson: { __typename?: 'Person', id: string, fullName: string, gender?: Gender | null, phone: string, dateOfBirth?: any | null, website: string, email: string, addresses: Array<{ __typename?: 'Address', room: string, apartment: string, wing: string, street: string, landmark: string, locality: string, suburb: string, city: string, zip: string, state: string, country: string, residents: Array<{ __typename?: 'Person', fullName: string, email: string }> }> } };

export type CreatePersonMutationVariables = Exact<{
  createInput: PersonInput;
}>;


export type CreatePersonMutation = { __typename?: 'Mutation', createPerson: { __typename?: 'Person', id: string, fullName: string, gender?: Gender | null, phone: string, dateOfBirth?: any | null, website: string, email: string } };

export type UpdatePersonMutationVariables = Exact<{
  personId: Scalars['String'];
  updateInput: PersonInput;
}>;


export type UpdatePersonMutation = { __typename?: 'Mutation', updatePerson: { __typename?: 'Person', id: string, fullName: string, gender?: Gender | null, phone: string, dateOfBirth?: any | null, website: string, email: string } };

export type DeletePersonMutationVariables = Exact<{
  personId: Scalars['String'];
}>;


export type DeletePersonMutation = { __typename?: 'Mutation', deletePerson: { __typename?: 'Person', fullName: string } };

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
  export class GetPeopleGQL extends Apollo.Query<GetPeopleQuery, GetPeopleQueryVariables> {
    document = GetPeopleDocument;
    
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
    addresses {
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
      residents {
        fullName
        email
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetPersonGQL extends Apollo.Query<GetPersonQuery, GetPersonQueryVariables> {
    document = GetPersonDocument;
    
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
  export class CreatePersonGQL extends Apollo.Mutation<CreatePersonMutation, CreatePersonMutationVariables> {
    document = CreatePersonDocument;
    
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
  export class UpdatePersonGQL extends Apollo.Mutation<UpdatePersonMutation, UpdatePersonMutationVariables> {
    document = UpdatePersonDocument;
    
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
  export class DeletePersonGQL extends Apollo.Mutation<DeletePersonMutation, DeletePersonMutationVariables> {
    document = DeletePersonDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }