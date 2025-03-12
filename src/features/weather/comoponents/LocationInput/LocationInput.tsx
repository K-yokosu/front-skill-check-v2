"use client";

import { useState } from "react";
import styles from "./location.module.css";
import SearchButton from "../SearchButton/SearchButton";

export default function LocationInput({ q, disable = false }: { q: string; disable?: boolean }) {
  const [locationName, setLocationName] = useState<string>(q);

  return (
    <div className={styles.locationInputContainer}>
      <input
        disabled={disable}
        value={locationName}
        onChange={e => setLocationName(e.target.value)}
        role="locationInput"
        type="text"
        placeholder="地名 or 緯度経度(35, 139)を入力して下さい"
      />
      {!disable && <SearchButton q={locationName} />}
    </div>
  );
}
