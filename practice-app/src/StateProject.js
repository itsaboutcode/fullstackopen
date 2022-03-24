import { useState } from "react";

const StateProject = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };
  const reset = () => {
    setCounter(0);
  };

  return (
    <>
      <Display counter={counter} />
      <Button onClick={increment} text="Increment" />
      <Button onClick={decrement} text="Decrement" />
      <Button onClick={reset} text="Reset" />
    </>
  );
};

const Button = ({ onClick, text }) => {
  return (
    <>
      <button onClick={onClick}>{text}</button>
    </>
  );
};

const Display = (props) => {
  return <> {props.counter} </>;
};

export default StateProject;
