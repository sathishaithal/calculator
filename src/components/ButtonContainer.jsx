import styles from "./ButtonContainer.module.css";

const ButtonContainer = ({ onButtonClick }) => {
  const buttonNames = [
    "(",
    ")",
    "%",
    "C",

    "7",
    "8",
    "9",
    "/",

    "4",
    "5",
    "6",
    "*",

    "1",
    "2",
    "3",
    "-",

    "0",
    ".",
    "=",
    "+",
  ];

  return (
    <div className={styles.buttonsContainer}>
      {buttonNames.map((buttonName) => (
        <button
          key={buttonName}
          className={`${styles.button} ${
            buttonName === "C"
              ? styles.clearButton
              : buttonName === "+" ||
                buttonName === "-" ||
                buttonName === "*" ||
                buttonName === "/"
              ? styles.operatorButton
              : buttonName === "="
              ? styles.equalsButton
              : buttonName === "%"
              ? styles.percentageButton
              : buttonName === "(" || buttonName === ")"
              ? styles.parenthesisButton
              : ""
          }`}
          onClick={() => onButtonClick(buttonName)}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};

export default ButtonContainer;
