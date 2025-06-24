import React from "react";
import styles from "./GeodataModal.module.css";

type Props = {
  hiddenGeodata: () => void;
};

export const GeodataModal = ({ hiddenGeodata }: Props) => {
  const [value, setValue] = React.useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (value.length > 1) {
      const regex = /^[A-Za-zа-яА-ЯёЁ]+$/;
      if (regex.test(value)) {
        console.log("submit");
      } else {
        console.log("the name must contain only letter");
      }
    } else {
      console.log("the name must contain more letters");
    }
  };

  return (
    <>
      <div className={styles.blackout}></div>
      <div className={styles.main_container}>
        <button className={styles.btn_close} onClick={hiddenGeodata}>
          x
        </button>

        <form onSubmit={handleSubmit}>
          <label>
            enter region
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button type="submit">Submit</button>
          </label>
        </form>
      </div>
    </>
  );
};
