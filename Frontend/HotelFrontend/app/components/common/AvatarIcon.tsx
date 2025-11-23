import React from 'react';
import IconWrapper from './IconWrapper';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';

interface AvatarIconProps {
  imgSrc: string;
  fallback: string;
}

const AvatarIcon = ({ imgSrc, fallback }: AvatarIconProps) => {
  return (
    <IconWrapper size="sm">
      <Avatar className="cursor-pointer">
        <AvatarImage src={imgSrc} />
        <AvatarFallback>{fallback}</AvatarFallback>
      </Avatar>
    </IconWrapper>
  );
};

export default AvatarIcon;
