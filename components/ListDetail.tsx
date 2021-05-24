import * as React from 'react';

import { User } from '../generated/graphql';

const ListDetail = ({ user }: {
  user: User;
}) => (
  <div>
    <h1>Detail for {user.name}</h1>
    <p>ID: {user.id}</p>
  </div>
);
export default ListDetail
