import React from 'react';

interface Props {
    name: string;
    className?: string;
}

const Avatar: React.FC<Props> = ({className, name}) => (
  <img {...{
    src: `https://ui-avatars.com/api/?name=${name.replace(/\s/g, '+')}&format=svg&rounded=true&background=random`,
    alt: name,
    className,
  }} />
);

export default Avatar;
