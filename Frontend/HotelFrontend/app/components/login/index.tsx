import Banner from './Banner';
import LoginForm from './LoginForm';
import LoginFormWrapper from './LoginFormWrapper';

const LoginLayout = () => {
  return (
    <div className="flex">
      <div className="flex w-1/2 items-center justify-center">
        <LoginFormWrapper
          title="welcome back!"
          footer="Don't have a workable account?"
        >
          <LoginForm />
        </LoginFormWrapper>
      </div>
      <Banner />
    </div>
  );
};

export default LoginLayout;
