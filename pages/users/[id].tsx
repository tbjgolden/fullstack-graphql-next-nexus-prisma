import { GetStaticPaths } from 'next';

import Layout from '../../components/Layout';
import ListDetail from '../../components/ListDetail';

const UsersId = () => {
  const user = {
    id: "-1",
    name: "Mr User"
  }
  return (
    <Layout
      title={`${
        user ? user.name : 'User Detail'
      } | Next.js + TypeScript Example`}
    >
      {user && <ListDetail user={user} />}
    </Layout>
  );
};
export default UsersId

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: true };
};
