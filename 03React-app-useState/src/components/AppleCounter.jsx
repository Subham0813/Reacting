import Button from "./Button";
import image from "../assets/arrow.png";
import Busket from "./Busket";
import { useState } from "react";

const AppleCounter = () => {
  const totalApples = 10;
  const [countLeft, setCountLeft] = useState(10);
  const [countRight, setCountRight] = useState(totalApples - countLeft);

  const leftclickHandler = () => {
    console.log("hello left");
    if (countLeft > 0) {
      setCountLeft(countLeft - 1);
      setCountRight(countRight + 1);
    }
  };
  const rightclickHandler = () => {
    console.log("hello right");
    if (countRight > 0) {
      setCountRight(countRight - 1);
      setCountLeft(countLeft + 1);
    }
  };

  return (
    <div className="apple-counter">
      <Busket busketName="Busket 1" count={countLeft} />
      <Button
        url={image}
        name={"right"}
        title={"right arrow"}
        clickHandler={leftclickHandler}
      />
      <Button
        url={image}
        name={"left"}
        title={"left arrow"}
        clickHandler={rightclickHandler}
      />
      <Busket busketName="Busket 2" count={countRight} />
    </div>
  );
};

export default AppleCounter;
