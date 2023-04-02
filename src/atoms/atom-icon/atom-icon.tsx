import React from 'react';
import cn from 'classnames';

import './atom-icon.css';

type AtomIconProps = {
  baseUrl: string;
  iconUrl: string;
  alt: string;
  backgroundColor?: string;
  iconType: 'flag' | 'ship';
};

export const AtomIcon = ({ baseUrl, iconUrl, alt, backgroundColor, iconType }: AtomIconProps) => {
  const imageUrl = `${baseUrl}${iconUrl}`;
  return (
    <img
      src={imageUrl}
      alt={alt}
      title={alt}
      className={cn('atomIcon', {
        flagIcon: iconType === 'flag',
        shipIcon: iconType === 'ship'
      })}
    />
  );
};
