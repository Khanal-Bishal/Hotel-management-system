import { useState, type PropsWithChildren } from 'react';

import { IconUserBolt } from '@tabler/icons-react';
import { motion } from 'motion/react';
import { cn } from '~/lib/utils';
import { Sidebar, SidebarBody, SidebarLink } from 'components/ui/sidebar';
import { Link } from 'react-router';
import {
  ArrowLeft,
  Hotel,
  House,
  LayoutDashboard,
  Settings,
  Trophy,
  UserRoundSearch,
  UsersRound,
} from 'lucide-react';

interface LayoutProps extends PropsWithChildren {}

export function Layout({ children }: LayoutProps) {
  const links = [
    {
      label: 'Home',
      href: '/',
      icon: <House className="size-5 shrink-0 text-neutral-100" />,
    },
    {
      label: 'Dashboard',
      href: '/dashboard',
      icon: <LayoutDashboard className="size-5 shrink-0 text-neutral-100" />,
    },
    {
      label: 'Attendance',
      href: '/attendance',
      icon: <IconUserBolt className="size-5 shrink-0 text-neutral-100" />,
    },

    {
      label: 'Performance',
      href: '/performance',
      icon: <Trophy className="size-5 shrink-0 text-neutral-100" />,
    },
    {
      label: 'Employee Management',
      href: '/emanagement',
      icon: <UsersRound className="size-5 shrink-0 text-neutral-100" />,
    },
    {
      label: 'Employee Details',
      href: '/edetails',
      icon: <UserRoundSearch className="size-5 shrink-0 text-neutral-100" />,
    },
    {
      label: 'Settings',
      href: '/settings',
      icon: <Settings className="size-5 shrink-0 text-neutral-100" />,
    },
    // {
    //   label: 'Logout',
    //   href: '/login',
    //   icon: <ArrowLeft className="size-5 shrink-0 text-neutral-100" />,
    // },
  ];

  const [open, setOpen] = useState(false);
  return (
    <div className="relative min-h-full bg-black/[0.96]">
      <div
        className={cn(
          'pointer-events-none absolute inset-0 [background-size:40px_40px] select-none',
          '[background-image:linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.07)_1px,transparent_1px)]'
        )}
      />
      <div
        className={cn(
          'flex w-full flex-1 flex-col overflow-hidden rounded-md border md:flex-row',
          'h-screen'
        )}
      >
        <Sidebar open={open} setOpen={setOpen}>
          <SidebarBody className="justify-between gap-10">
            <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
              {open ? <Logo /> : <LogoIcon />}
              <div className="mt-8 flex flex-col gap-2">
                {links.map((link, idx) => (
                  <SidebarLink key={idx} link={link} />
                ))}
              </div>
            </div>

            <div>
              <SidebarLink
                link={{
                  label: 'BISHAL 柯大龙',
                  href: '/login',
                  icon: (
                    <img
                      src="https://images3.alphacoders.com/119/1197821.jpg"
                      className="h-7 w-7 shrink-0 rounded-full text-white"
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
        {children}
      </div>
    </div>
  );
}
export const Logo = () => {
  return (
    <Link
      to="/"
      className="text-primary relative z-20 flex items-center space-x-2 py-1 text-sm font-normal"
    >
      <Hotel className="size-2 text-white" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-lg font-medium whitespace-pre text-white"
      >
        南宿云
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
