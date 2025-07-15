import React from "react";
import styles from "./GeodataModal.module.css";

type Props = {
  hiddenGeodata: () => void;
  submitLocation: (value: string) => void;
};

export const GeodataModal = ({ hiddenGeodata, submitLocation }: Props) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (value.length > 1) {
      const regex = /^[A-Za-zа-яА-ЯёЁ -]+$/;
      if (regex.test(value)) {
        submitLocation(value);
      } else {
        setError("the name must contain only letter");
      }
    } else {
      setError("the name must contain more letters");
    }
    hiddenGeodata();
    setValue("");
  };

  return (
    <>
      <div className={styles.blackout}></div>
      <div className={styles.main_container}>
        <button className={styles.btn_close} onClick={hiddenGeodata}>
          x
        </button>

        <form className={styles.form_container} onSubmit={handleSubmit}>
          <label>enter region</label>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
        <div className={styles.error_text}>{error}</div>
      </div>
    </>
  );
};
