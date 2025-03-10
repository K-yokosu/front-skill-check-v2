import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header>
      <Link role="logoLink" href="/">
        <h1 className={styles.h1}>Teck Challenge</h1>
      </Link>
    </header>
  );
}
