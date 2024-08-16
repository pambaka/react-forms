import styles from './main-page.module.css';
import Cards from '../cards/cards';

function MainPage() {
  return (
    <main className={styles.main}>
      <div className={styles['uncontrolled-form']}>
        <h2>Uncontrolled form users:</h2>
        <div className={styles.cards}>
          <Cards />
        </div>
      </div>
      <div className={styles['react-hook-form']}>
        <h2>React hook form users:</h2>
        <div className={styles.cards}></div>
      </div>
    </main>
  );
}

export default MainPage;
