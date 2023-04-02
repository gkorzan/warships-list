import React from 'react';

import './atom-icon.css';

type AtomIconProps = {
  baseUrl: string;
  iconUrl: string;
  alt: string;
  backgroundColor?: string;
};

export const AtomIcon = ({ baseUrl, iconUrl, alt, backgroundColor }: AtomIconProps) => {
  const imageUrl = `${baseUrl}${iconUrl}`;
  return <img src={imageUrl} alt={alt} title={alt} className="atomIcon" />;
};
