import { TbLocationSearch } from "react-icons/tb";
import styles from "./searchButton.module.css";

export default function SearchButton() {
  return (
    <button type="submit" role="searchBtn" className={styles.searchIconContainer}>
      <TbLocationSearch className={styles.searchIcon} />
    </button>
  );
}
