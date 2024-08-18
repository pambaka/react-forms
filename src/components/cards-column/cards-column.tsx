import styles from './cards-column.module.css';
import { ReactNode } from 'react';
import { StoreFormSlice } from '../../store/store';
import Cards from '../cards/cards';

function CardsColumn({ title, slice }: { title: string; slice: StoreFormSlice }): ReactNode {
  return (
    <section className={styles['cards-column']}>
      <h2>{title}</h2>
      <div className={styles.cards}>
        <Cards slice={slice} />
      </div>
    </section>
  );
}

export default CardsColumn;
