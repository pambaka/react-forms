import styles from './header.module.css';
import { ReactNode } from 'react';
import RouteLink from '../route-link/route-link';
import { PATH } from '../../const';

function Header(): ReactNode {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.links}>
          <li>
            <RouteLink path="" text="Main"></RouteLink>
          </li>
          <div>
            <li>
              <RouteLink path={PATH.uncontrolledForm} text="Uncontrolled Form"></RouteLink>
            </li>
            <li>
              <RouteLink path={PATH.reactHookForm} text="React Hook Form"></RouteLink>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
