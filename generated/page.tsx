import * as Types from './graphql';

import * as Operations from './graphql';
import { NextPage } from 'next';
import { NextRouter, useRouter } from 'next/router'
import { QueryHookOptions, useQuery } from '@apollo/client';
import * as Apollo from '@apollo/client';
import type React from 'react';
import { getApolloClient} from './withApollo';
export async function getServerPageAllUsers
    (options: Omit<Apollo.QueryOptions<Types.AllUsersQueryVariables>, 'query'>, ctx? :any ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.AllUsersQuery>({ ...options, query: Operations.AllUsersDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useAllUsers = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.AllUsersQuery, Types.AllUsersQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.AllUsersDocument, options);
};
export type PageAllUsersComp = React.FC<{data?: Types.AllUsersQuery, error?: Apollo.ApolloError}>;
export const withPageAllUsers = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.AllUsersQuery, Types.AllUsersQueryVariables>) => (WrappedComponent:PageAllUsersComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.AllUsersDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrAllUsers = {
      getServerPage: getServerPageAllUsers,
      withPage: withPageAllUsers,
      usePage: useAllUsers,
    }