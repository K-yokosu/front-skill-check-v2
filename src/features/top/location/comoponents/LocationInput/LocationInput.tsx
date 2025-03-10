import styles from "./location.module.css";
import SearchButton from "../SearchButton/SearchButton";

export default function LocationInput() {
  return (
    <div className={styles.locationInputContainer}>
      <input role="locationInput" type="text" placeholder="地名 or 緯度経度(35, 139)を入力して下さい" />
      <SearchButton />
    </div>
  );
}
