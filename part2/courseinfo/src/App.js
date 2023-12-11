const Header = (props) => {
  return <h1>{props.courseName}</h1>
}

const Total = (props) => {
  return <p><strong>Number of exercises {props.sumOfExercises}</strong></p>
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      {props.parts.map(part => (
        <Part key={part.id} part={part} />
      ))}
    </div>
  )
}

const Course = (props) => {
  const { name, parts } = props.course
  const total = parts.reduce((sum, part) => sum + part.exercises, 0)

  return (
    <div>
      <Header courseName={name} />
      <Content parts={parts} />
      <Total sumOfExercises={total} />
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      { id: 1, name: 'Fundamentals of React', exercises: 10 },
      { id: 2, name: 'Using props to pass data', exercises: 7 },
      { id: 3, name: 'State of a component', exercises: 14 },
      { id: 4, name: 'Redux', exercises: 11 }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App
