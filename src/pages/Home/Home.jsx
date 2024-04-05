import styles from './Home.module.css';

export default function HomePage() {
  return (
    <div>
      <h1 className={styles.title}>Welcome to PhoneBook</h1>
      <p className={styles.text}>Be sure of the reliability of your contacts</p>
    </div>
  );
}
