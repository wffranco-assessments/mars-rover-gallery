import React from 'react';

interface Props {
  className?: string;
}

const Loader: React.FC<Props> = ({className}) => (
  <div className={`bars-loader ${className||'w-16'}`.trim()}>
    <div />
    <div />
    <div />
  </div>
);
  
export default Loader;
  