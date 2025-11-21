import React from 'react';
import { cn } from '~/lib/utils';
import { Button } from '../ui/button';

type CommonProps = {
  children: React.ReactNode;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  rounded?: 'full' | 'lg' | 'md' | 'none';
  variant?: 'default' | 'secondary' | 'solid' | 'ghost';
  className?: string;
};

type ButtonIconWrapperProps = CommonProps & {
  asButton: true;
};

type DivIconWrapperProps = CommonProps &
  React.HTMLAttributes<HTMLDivElement> & {
    asButton?: false;
  };

type IconWrapperProps = ButtonIconWrapperProps | DivIconWrapperProps;

const IconWrapper = ({
  children,
  size = 'md',
  rounded = 'full',
  variant = 'default',
  className,
  asButton = false,
  ...props
}: IconWrapperProps) => {
  const sizeStyles = {
    xs: 'w-6 h-6',
    sm: 'w-10 h-10',
    md: 'w-12 h-12',
    lg: 'w-14 h-14',
  };

  const baseStyles =
    variant === 'default'
      ? 'relative bg-[#1a1a1a] transition-colors overflow-hidden group'
      : variant === 'solid'
        ? 'relative bg-[#1a1a1a] transition-colors overflow-hidden'
        : 'relative transition-colors overflow-hidden bg-secondary-light';

  const commonClassNames = cn(
    baseStyles,
    sizeStyles[size],
    rounded === 'full' ? 'rounded-full' : `rounded-${rounded}`,
    'flex items-center justify-center',
    className
  );

  const content = (
    <>
      {variant === 'default' ? (
        <>
          <div className="absolute inset-[1px] rounded-full bg-gradient-to-b from-[#2a2a2a] to-[#323232]" />
          <div className="absolute inset-0 rounded-full shadow-[inset_0px_1px_3px_rgba(255,255,255,0.3),inset_0px_0px_2px_rgba(255,255,255,0.2),inset_0px_-2px_4px_rgba(255,255,255,0.2)]" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent via-transparent to-white/10" />
        </>
      ) : variant === 'solid' ? (
        <div className="absolute inset-[1px] rounded-full bg-gradient-to-b from-[#2a2a2a] to-[#323232]" />
      ) : null}
      <div className="relative z-10">{children}</div>
    </>
  );

  if (asButton) {
    return (
      <Button
        size="icon"
        variant="ghost"
        className={commonClassNames}
        {...(props as any)}
      >
        {content}
      </Button>
    );
  }

  return (
    <div
      className={commonClassNames}
      {...(props as React.HTMLAttributes<HTMLDivElement>)}
    >
      {content}
    </div>
  );
};

export default IconWrapper;
