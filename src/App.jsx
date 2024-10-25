import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";
import { useState } from "react";
import MainHeading from "./components/MainHeading";
function App() {
  const [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "Back") {
      setCalVal(calVal.slice(0, -1));
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <>
      <div className={styles.calculator}>
        <MainHeading></MainHeading>
        <Display displayValue={calVal} />
        <ButtonContainer onButtonClick={onButtonClick} />
      </div>
    </>
  );
}

export default App;
