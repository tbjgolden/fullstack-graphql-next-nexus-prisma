import React from 'react';
import Link from 'next/link';

import { User } from '../generated/graphql';

const ListItem = ({ data }: {
  data: User;
}) => (
  <Link href="/users/[id]" as={`/users/${data.id}`}>
    <a>
      {data.id}: {data.name}
    </a>
  </Link>
);
export default ListItem
