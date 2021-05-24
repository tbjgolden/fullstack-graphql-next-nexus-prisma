import { GetStaticProps } from 'next';
import Link from 'next/link';
import Layout from '../../components/Layout';
import List from '../../components/List';
import { User } from '../../generated/graphql';
import { sampleUserData } from '../../utils/sample-data';

const UsersIndex = ({ items }: {
  items: User[];
}) => (
  <Layout title="Users List | Next.js + TypeScript Example">
    <h1>Users List</h1>
    <p>
      Example fetching data from inside <code>getStaticProps()</code>.
    </p>
    <p>You are currently on: /users</p>
    {items && <List items={items} />}
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
);
export default UsersIndex

export const getStaticProps: GetStaticProps = async () => {
  const items: User[] = sampleUserData;
  return { props: { items } };
};
