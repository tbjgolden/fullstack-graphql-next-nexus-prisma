import React from 'react';
import { useAllUsersQuery } from '../generated/graphql';

const AllUsers = () => {
  const { data, fetching, error } = useAllUsersQuery();

  if (fetching) {
    return <p>Loading...</p>;
  } else if (error) {
    return <p>Oh no... {error.message}</p>;
  } else {
    return (
      <div>
        <p>There are {data?.allUsers?.length} user(s) in the database</p>
        <ul>
          {data?.allUsers?.map(user => (
            <li key={user?.id}>{user?.name}</li>
          ))}
        </ul>
      </div>
    );
  }
};
export default AllUsers
