import { Link } from 'react-router';

import Logo from './Logo';
import { Bell, Search, Settings } from 'lucide-react';
import IconWrapper from './IconWrapper';
import AvatarIcon from './AvatarIcon';
interface NavbarProps {
  routes: Record<string, string>[];
}

const Navbar = ({ routes }: NavbarProps) => {
  return (
    <div className="hidden items-center justify-between lg:flex">
      <Logo />
      <ul className="item-center flex flex-1 grow justify-center gap-6"></ul>
      <div className="flex gap-2">
        <IconWrapper size="sm" variant="ghost">
          <Bell className="hover:text-primary delay-100" />
        </IconWrapper>
        <IconWrapper size="sm" variant="ghost">
          <Settings className="hover:text-primary delay-100" />
        </IconWrapper>
        <Link to="/login">
          <AvatarIcon imgSrc="" fallback="?" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
