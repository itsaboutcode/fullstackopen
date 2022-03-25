const Course = (props) => {

    const total = props.course.parts.reduce(
        (total, part) => {
          total.sum += part.exercises;
          return total;
        },
        { sum: 0 }
      )
  return (
    <>
      <Header course={props.course.name} />
      <Content parts={props.course.parts} />
      <Total
        sum={total.sum}
      />
    </>
  );
};

export default Course;

const Header = ({ course }) => <h2>{course}</h2>;

const Content = ({ parts }) => {
  console.log(parts);
  return parts.map((part) => <Part part={part} key={part.id} />);
};

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Total = ({ sum }) => <h4>total of {sum} exercises</h4>;
