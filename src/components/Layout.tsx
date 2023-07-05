import React from 'react';
import { NavLink } from 'react-router-dom';

import Avatar from './Avatar';
import DarkMode from './DarkMode';
import LogoGitHub from './LogoGitHub';
import LogoNasa from './LogoNasa';

interface Props extends React.PropsWithChildren {
  className?: string;
}

const Layout: React.FC<Props> = ({children, className}) => (
  <main className="min-w-[300px] flex flex-col sm:flex-row min-h-screen text-gray-700 dark:text-gray-200">
    <aside className="p-4 border-b sm:border-b-0 sm:border-r dark:border-gray-500 bg-white dark:bg-black">
      <nav className="flex sm:flex-col items-center md:items-start gap-4 md:min-w-[8em]">
        <h1>
          <NavLink to={'/'} className="flex gap-2 items-center" title="Home">
            <LogoNasa className="w-8 md:w-6" />
            <span className="hidden md:inline">Home</span>
          </NavLink>
        </h1>
        <ul className="flex sm:flex-col gap-2">
          <li>
            <NavLink to={'/curiosity'} className="flex gap-2 items-center" title="Curiosity">
              <Avatar name="Curiosity" className="w-6" />
              <span className="hidden md:inline">Curiosity</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={'/opportunity'} className="flex gap-2 items-center" title="Opportunity">
              <Avatar name="Opportunity" className="w-6" />
              <span className="hidden md:inline">Opportunity</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={'/spirit'} className="flex gap-2 items-center" title="Spirit">
              <Avatar name="Spirit" className="w-6" />
              <span className="hidden md:inline">Spirit</span>
            </NavLink>
          </li>
        </ul>
        <a href="https://github.com/wffranco-assessments/mars-rover-gallery" target="_blank" className="flex gap-2 items-center" rel="noreferrer">
          <LogoGitHub className="w-8 md:w-6" />
          <span className="hidden md:inline">Source Code</span>
        </a>
        <DarkMode />
      </nav>
    </aside>
    <section className={`grow p-4 ${className||''} bg-white dark:bg-black transition-[background-color] delay-100 ease-linear`.trim()}>
      {children}
    </section>
  </main>
);

export default Layout;
