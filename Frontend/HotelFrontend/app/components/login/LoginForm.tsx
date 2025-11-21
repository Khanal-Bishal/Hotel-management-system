import { Button } from '../ui/button';
import InputWithLabel from '../common/InputWithLabel';

const LoginForm = () => {
  return (
    <div className="">
      <InputWithLabel
        htmlFor="email"
        type="email"
        label="Work Email"
        placeholder="Enter your email"
      />
      <InputWithLabel
        htmlFor="password"
        type="password"
        label="Password"
        placeholder="Enter your password"
      />
      <Button variant={'default'} className="w-1/3">
        Login
      </Button>
    </div>
  );
};

export default LoginForm;
