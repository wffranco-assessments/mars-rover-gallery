import React from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
  prev?: string;
  page?: number;
  next?: string;
}

export default function Paginator({prev, page = 1, next}: Props) {
  return (
    <nav className="flex gap-2">
      {prev ? <NavLink to={prev}>⏪</NavLink> : <span className="opacity-70">⏪</span>}
      <span>{page}</span>
      {next ? <NavLink to={next}>⏩</NavLink> : <span className="opacity-70">⏩</span>}
    </nav>
  );
}
