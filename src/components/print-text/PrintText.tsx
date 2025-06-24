import React from "react";
import styles from "./PrintText.module.css";

type Props = {};

const arr = "Welcome to my resume side.";

interface item {
  words: string;
  letter: string;
}

export const PrintText = (props: Props) => {
  const [countLetter, setCountLetter] = React.useState(-0.5);
  const [item, setItem] = React.useState<item>({
    words: "",
    letter: arr[0],
  });
  const [currentMargin, setCurrentMargin] = React.useState("start");

  React.useEffect(() => {
    if (arr.length - 1 > countLetter) {
      setTimeout(() => {
        if (countLetter % 1 === 0) {
          setCurrentMargin("start");
          setItem((prevItem) => {
            return {
              words: prevItem.words + arr[countLetter],
              letter: arr[countLetter + 1] ?? ".",
            };
          });
        } else {
          setCurrentMargin("end");
        }
        setCountLetter((prev) => (prev += 0.5));
      }, 100);
    } else if (arr.length - 1 == countLetter) {
      setCurrentMargin("long_end");
    }
  });

  return (
    <h1 className={styles.container}>
      {item.words}
      <span className={styles[currentMargin]}>{item.letter}</span>
    </h1>
  );
};

// if (arr.length + 5 > countLetter) {
//       setTimeout(() => {
//         if (countLetter % 1 === 0) {
//           setCurrentMargin("start");
//           if (arr.length == countLetter) {
//             setItem((prevItem) => {
//               return {
//                 words:
//                   prevItem.words[prevItem.words.length - 1] === "."
//                     ? prevItem.words.slice(0, -1)
//                     : prevItem.words,
//                 letter: ".",
//               };
//             });
//           }
//         } else {
//           setCurrentMargin("long_end");
//         }

//         setCountLetter((prev) => (prev += 0.5));
//       }, 300);
//     }
