import { useState, type PropsWithChildren } from 'react';

import { IconUserBolt } from '@tabler/icons-react';
import { motion } from 'motion/react';
import { cn } from '~/lib/utils';
import { Link, useLocation } from 'react-router';
import HotelLogo from '~/components/common/Logo';
import {
  Hotel,
  LayoutDashboard,
  Settings,
  Trophy,
  UserRoundSearch,
  UsersRound,
} from 'lucide-react';
import { Sidebar, SidebarBody, SidebarLink } from '../ui/sidebar';

interface LayoutProps extends PropsWithChildren {}

export function Layout({ children }: LayoutProps) {
  const links = [
    {
      label: 'Dashboard',
      href: '/dashboard',
      icon: <LayoutDashboard className="text-primary size-5 shrink-0" />,
    },
    {
      label: 'Attendance',
      href: '/attendance',
      icon: <IconUserBolt className="text-primary size-5 shrink-0" />,
    },

    {
      label: 'Performance',
      href: '/performance',
      icon: <Trophy className="text-primary size-5 shrink-0" />,
    },
    {
      label: 'Employee Management',
      href: '/emanagement',
      icon: <UsersRound className="text-primary size-5 shrink-0" />,
    },
    {
      label: 'Employee Details',
      href: '/edetails',
      icon: <UserRoundSearch className="text-primary size-5 shrink-0" />,
    },
  ];

  const [open, setOpen] = useState(false);
  const currentRoute = useLocation().pathname;

  return (
    <div className="relative bg-black/96">
      <div
        className={cn(
          'pointer-events-none absolute inset-0 bg-size-[40px_40px] select-none',
          'bg-[linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.07)_1px,transparent_1px)]'
        )}
      />
      <div
        className={cn(
          'flex w-full flex-1 flex-col rounded-md border md:flex-row',
          'min-h-screen'
        )}
      >
        <Sidebar open={open} setOpen={setOpen}>
          <SidebarBody className="justify-between gap-10">
            <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
              {open ? <Logo /> : <LogoIcon />}
              <div className="mt-8 flex flex-col gap-2">
                {links.map((link, idx) => (
                  <SidebarLink
                    key={idx}
                    link={link}
                    className={cn('text-white', {
                      'text-primary': currentRoute === link.href,
                    })}
                  />
                ))}
              </div>
            </div>

            <div>
              <SidebarLink
                className="text-primary"
                link={{
                  label: 'BISHAL 柯大龙',

                  href: '/login',
                  icon: (
                    <img
                      src="https://images3.alphacoders.com/119/1197821.jpg"
                      className="text-primary h-7 w-7 shrink-0 rounded-full"
                      width={50}
                      height={50}
                      alt="Avatar"
                    />
                  ),
                }}
              />
            </div>
          </SidebarBody>
        </Sidebar>
        <div className="mx-auto w-5/6">{children}</div>
      </div>
    </div>
  );
}
export const Logo = () => {
  return (
    <Link
      to="/"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal"
    >
      <Hotel className="text-primary size-2" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-lg font-medium whitespace-pre"
      >
        <HotelLogo />
      </motion.span>
    </Link>
  );
};
export const LogoIcon = () => {
  return (
    <Link
      to="/"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm" />
    </Link>
  );
};
