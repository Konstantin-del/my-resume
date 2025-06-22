import React from "react";
import styles from "./Header.module.css";
import { PrintText } from "../print-text/PrintText";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({}) => {
  return (
    <div className={styles.main_container}>
      <div className={styles.input_container}>
        <PrintText />
      </div>
    </div>
  );
};
