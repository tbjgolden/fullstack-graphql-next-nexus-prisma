import * as React from 'react';
import ListItem from './ListItem';
import { User } from '../generated/graphql';

const List = ({ users }: {
  users: User[];
}) => (
  <ul>
    {users.map(user => (
      <li key={user.id}>
        <ListItem data={user} />
      </li>
    ))}
  </ul>
);
export default List
