import Link from "next/link";
import { TbLocationSearch } from "react-icons/tb";
import styles from "./searchButton.module.css";

export default function SearchButton({ q }: { q: string }) {
  return (
    <Link href={`${q ? `?q=${q}` : "/"}`}>
      <button type="button" role="searchBtn" className={styles.searchIconContainer}>
        <TbLocationSearch className={styles.searchIcon} />
      </button>
    </Link>
  );
}
