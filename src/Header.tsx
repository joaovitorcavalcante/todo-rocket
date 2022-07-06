import { Rocket as RocketIcon } from 'phosphor-react';
import styles from './Header.module.css';

export function Header() {
  return (
    <div className={styles['Header__container']}>
      <RocketIcon size={32} color="#4ea8de" />
      <h1 className={styles['Header__title']}>
        <span className={styles['title--blue']}>to</span>
        <span className={styles['title--purple']}>do</span>
      </h1>
    </div>
  );
}
