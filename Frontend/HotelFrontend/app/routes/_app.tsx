import { Outlet } from 'react-router';
import { Layout } from '~/components/common/Layout';
import { TransitionLayout } from '~/components/common/TransitionLayout';

export default function AppLayout() {
  return (
    <Layout>
      <div className="m-4 overflow-x-hidden">
        <TransitionLayout>
          <Outlet />
        </TransitionLayout>
      </div>
    </Layout>
  );
}
