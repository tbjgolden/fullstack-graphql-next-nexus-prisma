import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  bigRedButton?: Maybe<Scalars['String']>;
  createOneUser: User;
  deleteOneUser?: Maybe<User>;
  deleteManyUser: AffectedRowsOutput;
  updateOneUser?: Maybe<User>;
  updateManyUser: AffectedRowsOutput;
};

export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};

export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};

export type MutationDeleteManyUserArgs = {
  where?: Maybe<UserWhereInput>;
};

export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: Maybe<UserWhereInput>;
};

export type NestedStringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
};

export type Query = {
  __typename?: 'Query';
  allUsers?: Maybe<Array<Maybe<User>>>;
  user?: Maybe<User>;
  users: Array<User>;
};

export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};

export type QueryUsersArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<UserWhereUniqueInput>;
  after?: Maybe<UserWhereUniqueInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type StringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringFilter>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  name: Scalars['String'];
};

export type UserCreateInput = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type UserUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type AllUsersQueryVariables = Exact<{ [key: string]: never }>;

export type AllUsersQuery = { __typename?: 'Query' } & {
  allUsers?: Maybe<
    Array<Maybe<{ __typename?: 'User' } & Pick<User, 'id' | 'name'>>>
  >;
};

export const AllUsersDocument = gql`
  query AllUsers {
    allUsers {
      id
      name
    }
  }
`;

/**
 * __useAllUsersQuery__
 *
 * To run a query within a React component, call `useAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllUsersQuery(
  baseOptions?: Apollo.QueryHookOptions<AllUsersQuery, AllUsersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllUsersQuery, AllUsersQueryVariables>(
    AllUsersDocument,
    options
  );
}
export function useAllUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AllUsersQuery,
    AllUsersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AllUsersQuery, AllUsersQueryVariables>(
    AllUsersDocument,
    options
  );
}
export type AllUsersQueryHookResult = ReturnType<typeof useAllUsersQuery>;
export type AllUsersLazyQueryHookResult = ReturnType<
  typeof useAllUsersLazyQuery
>;
export type AllUsersQueryResult = Apollo.QueryResult<
  AllUsersQuery,
  AllUsersQueryVariables
>;
