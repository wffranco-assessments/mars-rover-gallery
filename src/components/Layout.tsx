import React from 'react';

interface Props extends React.PropsWithChildren {
  className?: string;
}

const Layout: React.FC<Props> = ({children, className}) => (
  <main>
    <aside>
    </aside>
    <section className={className}>
      {children}
    </section>
  </main>
);

export default Layout;
