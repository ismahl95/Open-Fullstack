const Header = (props) => {
  return <h2>{props.courseName}</h2>
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
  return (
    <div>
      <h1>Web development curriculum</h1>
      {props.course.map(course => (
        <div key={course.id}>
          <Header courseName={course.name} />
          <Content parts={course.parts} />
          <Total sumOfExercises={course.parts.reduce((sum, part) => sum + part.exercises, 0)} />
        </div>
      ))}
    </div>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1,
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2,
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3,
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1,
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2,
        },
      ],
    },
  ]

  return (
    <div>
      <Course course={courses} />
    </div>
  )
}

export default App
