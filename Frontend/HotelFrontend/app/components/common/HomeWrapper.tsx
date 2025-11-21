import { type PropsWithChildren } from 'react';

import Routes from 'public/data/Routes';
import Navbar from './NavBar';
import { cn } from '~/lib/utils';

interface HomeWrapperProps extends PropsWithChildren {}

const HomeWrapper = ({ children }: HomeWrapperProps) => {
  return (
    <div className="relative min-h-full bg-black/[0.96]">
      <div
        className={cn(
          'pointer-events-none absolute inset-0 [background-size:40px_40px] select-none',
          '[background-image:linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.07)_1px,transparent_1px)]'
        )}
      />
      <div className="m-2 w-full lg:m-auto lg:w-3/4">
        <div className="my-4">
          <Navbar routes={Routes} />
        </div>
        <div className="mx-auto mt-10 w-11/12">{children}</div>
      </div>
    </div>
  );
};

export default HomeWrapper;
