import { type PropsWithChildren, type ReactNode } from 'react';
import { Spacer } from '../common/Spacer';
interface LoginFormWrapperProps extends PropsWithChildren {
  children: ReactNode;
  title: string;
  footer: string;
}
const LoginFormWrapper = ({
  children,
  title,
  footer,
}: LoginFormWrapperProps) => {
  return (
    <div className="w-1/2">
      <div className="w-5/6">
        <header className="flex cursor-default flex-col gap-2">
          <h3 className="text-primary text-2xl font-bold capitalize">
            {title}
          </h3>
          <span className="text-xs font-light">
            Please enter your credential
          </span>
        </header>
        <Spacer size="4xs" />
        <section className="">{children}</section>
        <Spacer size="lg" />
        <footer className="hover:text-primary cursor-pointer text-xs font-light underline">
          {footer}
        </footer>
      </div>
    </div>
  );
};

export default LoginFormWrapper;
