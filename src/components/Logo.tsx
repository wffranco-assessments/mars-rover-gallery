import React from 'react';

export default function Logo({className}: {className?: string}) {
  return (
    <span className={`relative aspect-square ${className || 'w-6'}`.trim()}>
      <span className="absolute aspect-square bg-contain bg-no-repeat inset-0" style={{
        backgroundImage: 'url(/nasa-logo.svg)',
        top: '-6%',
        left: '-12%',
        width: '136%',
      }} />
    </span>
  );
}
