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
  residents?: Maybe<Array<Person>>;
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
};

export type QueryGetAddressArgs = {
  id: Scalars['String'];
};

export type QueryGetPersonArgs = {
  id: Scalars['String'];
};

export type GetAddressQueryVariables = Exact<{
  addressId: Scalars['String'];
}>;

export type GetAddressQuery = {
  __typename?: 'Query';
  getAddress: {
    __typename?: 'Address';
    id: string;
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
    addressType: string;
    residents?: Array<{
      __typename?: 'Person';
      fullName: string;
      email: string;
    }> | null;
  };
};

export type CreateAddressMutationVariables = Exact<{
  createInput: AddressInput;
}>;

export type CreateAddressMutation = {
  __typename?: 'Mutation';
  createAddress: {
    __typename?: 'Address';
    id: string;
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
    addressType: string;
  };
};

export type UpdateAddressMutationVariables = Exact<{
  addressId: Scalars['String'];
  updateInput: AddressInput;
}>;

export type UpdateAddressMutation = {
  __typename?: 'Mutation';
  updateAddress: {
    __typename?: 'Address';
    id: string;
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
    addressType: string;
  };
};

export type DeleteAddressMutationVariables = Exact<{
  addressId: Scalars['String'];
}>;

export type DeleteAddressMutation = {
  __typename?: 'Mutation';
  deleteAddress: {
    __typename?: 'Address';
    apartment: string;
    street: string;
    city: string;
    zip: string;
    addressType: string;
  };
};

export const GetAddressDocument = gql`
  query GetAddress($addressId: String!) {
    getAddress(id: $addressId) {
      id
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
      addressType
      residents {
        fullName
        email
      }
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class GetAddressGQL extends Apollo.Query<
  GetAddressQuery,
  GetAddressQueryVariables
> {
  override document = GetAddressDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const CreateAddressDocument = gql`
  mutation CreateAddress($createInput: AddressInput!) {
    createAddress(address: $createInput) {
      id
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
      addressType
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class CreateAddressGQL extends Apollo.Mutation<
  CreateAddressMutation,
  CreateAddressMutationVariables
> {
  override document = CreateAddressDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const UpdateAddressDocument = gql`
  mutation UpdateAddress($addressId: String!, $updateInput: AddressInput!) {
    updateAddress(id: $addressId, address: $updateInput) {
      id
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
      addressType
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class UpdateAddressGQL extends Apollo.Mutation<
  UpdateAddressMutation,
  UpdateAddressMutationVariables
> {
  override document = UpdateAddressDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const DeleteAddressDocument = gql`
  mutation DeleteAddress($addressId: String!) {
    deleteAddress(id: $addressId) {
      apartment
      street
      city
      zip
      addressType
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class DeleteAddressGQL extends Apollo.Mutation<
  DeleteAddressMutation,
  DeleteAddressMutationVariables
> {
  override document = DeleteAddressDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
