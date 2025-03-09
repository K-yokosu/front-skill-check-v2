import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <h1 className={styles.h1}>Teck Challenge</h1>
      </Link>
    </header>
  );
}
