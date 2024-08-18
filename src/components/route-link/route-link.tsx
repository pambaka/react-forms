import styles from './route-link.module.css';
import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

function RouteLink({ path, text }: { path: string; text: string }): ReactNode {
  return (
    <NavLink to={path} className={({ isActive }) => (isActive ? styles.active : styles.inactive)}>
      {text}
    </NavLink>
  );
}

export default RouteLink;
