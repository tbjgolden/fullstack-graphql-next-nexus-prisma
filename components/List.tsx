import * as React from 'react';
import ListItem from './ListItem';
import { User } from '../interfaces';

const List = ({ items }: {
  items: User[];
}) => (
  <ul>
    {items.map(item => (
      <li key={item.id}>
        <ListItem data={item} />
      </li>
    ))}
  </ul>
);
export default List
