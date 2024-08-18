import styles from './cards.module.css';
import { useSelector } from 'react-redux';
import { SliceUser } from '../../types';
import { StoreRootState, StoreSlice } from '../../store/store';
import { ReactNode } from 'react';

function Cards({ slice }: { slice: StoreSlice }): ReactNode {
  const users = useSelector<StoreRootState, SliceUser[]>((state) => state[slice].users);

  let i = 0;

  return users.map((user) => (
    <div className={styles.card} key={(i += 1)}>
      {Object.entries(user).map(([key, value]: [string, string]) => {
        if (key === 'image') {
          return <img src={value} key={key} />;
        } else
          return (
            <p key={key}>
              {key}: <span>{String(value)}</span>
            </p>
          );
      })}
    </div>
  ));
}

export default Cards;
