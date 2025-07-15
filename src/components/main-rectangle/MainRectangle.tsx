import React from "react";
import styles from "./MainRectangle.module.css";
import face from "../../assets/face.png";
import glasses from "../../assets/sunglasses.png";
import rigth_eye from "../../assets/rigth_eye.png";
import left_eye from "../../assets/left_eye.png";

type Props = {};

export const MainRectangle = (props: Props) => {
  return (
    <div className={styles.main_container}>
      <div className={styles.portrait_container}>
        <img className={styles.portrait} src={face} alt="eye" />
        <img className={styles.glasses} src={glasses} alt="glasses" />
        <img className={styles.left_eye} src={left_eye} alt="left_eye" />
        <img className={styles.rigth_eye} src={rigth_eye} alt="rigth_eye" />
      </div>
      <div className={styles.text_container}>
        <h2 className={styles.h2_first}>Pukhov Konstantin</h2>
        <h2 className={styles.h2_second}>fullstack developer</h2>
        {/* <div className={styles.light}></div> */}
      </div>
    </div>
  );
};
