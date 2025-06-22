import React from "react";
import styles from "./MainPage.module.css";
import { Header } from "../components/header/Header";
import { MainRectangle } from "../components/main-rectangle/MainRectangle";

type Props = {};

export const MainPage = (props: Props) => {
  return (
    <div className={styles.main_container}>
      <Header />
      <MainRectangle />
    </div>
  );
};
