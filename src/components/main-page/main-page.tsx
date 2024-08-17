import styles from './main-page.module.css';
import CardsColumn from '../cards-column/cards-column';
import { ReactNode } from 'react';

function MainPage(): ReactNode {
  return (
    <main className={styles.main}>
      <CardsColumn title="Uncontrolled form users:" slice="uncontrolledFormSlice" />
      <CardsColumn title="React hook form users:" slice="reactHookFormSlice" />
    </main>
  );
}

export default MainPage;
