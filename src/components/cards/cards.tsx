import styles from './cards.module.css';
import { useSelector } from 'react-redux';
import { User } from '../../types';
import { StoreRootState, StoreSlice } from '../../store/store';
import { ReactNode } from 'react';

function Cards({ slice }: { slice: StoreSlice }): ReactNode {
  const users = useSelector<StoreRootState, User[]>((state) => state[slice].users);

  let i = 0;

  return users.map((user) => (
    <div className={styles.card} key={(i += 1)}>
      {Object.entries(user).map(([key, value]) => (
        <p key={key}>
          {key}: <span>{value}</span>
        </p>
      ))}
    </div>
  ));
}

export default Cards;
