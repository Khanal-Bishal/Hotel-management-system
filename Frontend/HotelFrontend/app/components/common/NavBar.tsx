import { Link, useLocation } from 'react-router';

import { cn } from '~/lib/utils';
import Logo from './Logo';
import { Bell, Search, Settings } from 'lucide-react';
import IconWrapper from './IconWrapper';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import AvatarIcon from './AvatarIcon';
interface NavbarProps {
  routes: Record<string, string>[];
}

const Navbar = ({ routes }: NavbarProps) => {
  const currentRoute = useLocation().pathname;
  return (
    <div className="hidden items-center justify-between lg:flex">
      <Logo />
      <ul className="item-center flex flex-1 grow justify-center gap-6">
        {routes.map((route) => {
          return (
            <li className="" key={route.currentRoute}>
              <Link to={route.to}>
                <p
                  className={cn(
                    'text-foreground hover:text-primary cursor-pointer font-medium antialiased transition-all delay-75 hover:ease-in-out',
                    {
                      'after:bg-primary after:m-auto after:block after:size-1 after:rounded-full':
                        currentRoute === route.currentRoute,
                    }
                  )}
                >
                  <span className="text-normal-regular">{route.routeName}</span>
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="flex gap-2">
        <IconWrapper size="sm" variant="ghost">
          <Search className="hover:text-primary delay-100" />
        </IconWrapper>
        <IconWrapper size="sm" variant="ghost">
          <Bell className="hover:text-primary delay-100" />
        </IconWrapper>
        <IconWrapper size="sm" variant="ghost">
          <Settings className="hover:text-primary delay-100" />
        </IconWrapper>
        <Link to="/login">
          <AvatarIcon imgSrc="" fallback="BK" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
