import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <>
      <h1>give feedback</h1>
      <Button
        clickHanlder={() => {
          setGood(good + 1);
        }}
        text="good"
      />
      <Button
        clickHanlder={() => {
          setNeutral(neutral + 1);
        }}
        text="neutral"
      />
      <Button
        clickHanlder={() => {
          setBad(bad + 1);
        }}
        text="bad"
      />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={good + neutral + bad}
        average={(good - bad)/(good + neutral + bad)}
        positive={(good / (good + neutral + bad)) * 100}
      />
    </>
  );
};

const Statistics = (props) => {
  if (props.good !== 0 || props.neutral !== 0 || props.bad !== 0) {
    return (
      <>
        <h1>statistics</h1>
        <table>
          <tbody>
            <StatisticLine text="good" value={props.good} />
            <StatisticLine text="neutral" value={props.neutral} />
            <StatisticLine text="bad" value={props.bad} />
            <StatisticLine text="all" value={props.all} />
            <StatisticLine text="avarge" value={props.average} />
            <StatisticLine text="positive" value={props.positive + " %"} />
          </tbody>
        </table>
      </>
    );
  } else {
    return (
      <>
        <h1>statistics</h1>
        No feedback given
      </>
    );
  }
};

const StatisticLine = ({ text, value }) => {
  return (
    <>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </>
  );
};

const Button = ({ clickHanlder, text }) => {
  return <button onClick={clickHanlder}>{text}</button>;
};

export default App;
