import React from "react";
import logo from "../assets/logo_resume.png";
import { Link } from "react-router-dom";
import styles from "./StartPage.module.css";

type Props = {};

export const StartPage = (props: Props) => {
  return (
    <div className={styles.start}>
      <header className={styles.start_header}>
        <img
          src={logo}
          className={styles.start_logo}
          width={"250px"}
          alt="logo"
        />
        <img
          src={logo}
          className={styles.start_logo}
          height={"100px"}
          alt="logo"
        />
        <Link className={styles.start_link} to="main">
          My resume
        </Link>
      </header>
    </div>
  );
};
