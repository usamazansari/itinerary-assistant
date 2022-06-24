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
};

export type Query = {
  __typename?: 'Query';
  /** Test connectivity with the backend. Return a number wrapped in a class from backend service which is even, throws an error if odd */
  classSanity: SanityEntity;
  /** Test connectivity with the backend. Return a number from backend service which is even, throws an error if odd */
  stringSanity: Scalars['String'];
};

export type QueryClassSanityArgs = {
  number: Scalars['Int'];
};

export type SanityEntity = {
  __typename?: 'SanityEntity';
  message: Scalars['String'];
};

export type StringSanityQueryVariables = Exact<{ [key: string]: never }>;

export type StringSanityQuery = { __typename?: 'Query'; stringSanity: string };

export type ClassSanityQueryVariables = Exact<{ [key: string]: never }>;

export type ClassSanityQuery = {
  __typename?: 'Query';
  classSanity: { __typename?: 'SanityEntity'; message: string };
};

export const StringSanityDocument = gql`
  query StringSanity {
    stringSanity
  }
`;

@Injectable({
  providedIn: 'root'
})
export class StringSanityGQL extends Apollo.Query<
  StringSanityQuery,
  StringSanityQueryVariables
> {
  override document = StringSanityDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const ClassSanityDocument = gql`
  query ClassSanity {
    classSanity(number: 2) {
      message
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class ClassSanityGQL extends Apollo.Query<
  ClassSanityQuery,
  ClassSanityQueryVariables
> {
  override document = ClassSanityDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
