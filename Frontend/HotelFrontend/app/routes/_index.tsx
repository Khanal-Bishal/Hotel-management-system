import HomeLayout from '~/components/home';
import type { Route } from './+types/_index';
import HomeWrapper from '~/components/common/HomeWrapper';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'NUIST Hotel System' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export default function Home() {
  return (
    <HomeWrapper>
      <HomeLayout />
    </HomeWrapper>
  );
}
