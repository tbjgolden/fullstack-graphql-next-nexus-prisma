import Link from 'next/link';
import Layout from '../../components/Layout';
import List from '../../components/List';
import { useAllUsersQuery } from '../../generated/graphql'
import { filterMaybe } from '../../utils';

const UsersIndex = () => {
  const { loading, data, error } = useAllUsersQuery()

  if (loading || error) {
    return null
  } else {
    const users = filterMaybe(data?.allUsers ?? [])
    return (
      <Layout title="Users List | Next.js + TypeScript Example">
        <h1>Users List</h1>
        <p>You are currently on: /users</p>
        <List users={users} />
        <p>
          <Link href="/">
            <a>Go home</a>
          </Link>
        </p>
      </Layout>
    );
  }
}

export default UsersIndex
