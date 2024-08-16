import styles from './cards.module.css';
import { useSelector } from 'react-redux';
import { User } from '../../types';
import { StoreRootState } from '../../store/store';

function Cards() {
  const users = useSelector<StoreRootState, User[]>((state) => state.uncontrolledFormSlice.users);

  let i = 0;

  return users.map((user) => {
    return (
      <div className={styles.card} key={(i += 1)}>
        <p>
          name: <span>{user.name}</span>
        </p>
        <p>
          age: <span>{user.age}</span>
        </p>
      </div>
    );
  });
}

export default Cards;
