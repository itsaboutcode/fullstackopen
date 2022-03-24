const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content
        content={[
          { part: part1, exercise: exercises1 },
          { part: part2, exercise: exercises2 },
          { part: part3, exercise: exercises3 },
        ]}
      />
      <Total exercises={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
};

const Content = (props) => {

  return (
    <>
      <Part part={props.content[0].part} exercise={props.content[0].exercise} />
      <Part part={props.content[1].part} exercise={props.content[1].exercise} />
      <Part part={props.content[2].part} exercise={props.content[2].exercise} />
    </>
  );
};

const Part = (props) => {
  return (
    <>
      <p>
        {props.part} {props.exercise}
      </p>
    </>
  );
};

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.exercises}</p>
    </>
  );
};

export default App;
