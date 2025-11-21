import { TransitionLayout } from '~/components/common/TransitionLayout';
import LoginLayout from '~/components/login';
import { cn } from '~/lib/utils';

const login = () => {
  return (
    <div className="relative h-full bg-black/[0.96]">
      <div
        className={cn(
          'pointer-events-none absolute inset-0 [background-size:40px_40px] select-none',
          '[background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]'
        )}
      />
      <div className="overflow-x-hidden">
        <TransitionLayout>
          <LoginLayout />
        </TransitionLayout>
      </div>
    </div>
  );
};

export default login;
