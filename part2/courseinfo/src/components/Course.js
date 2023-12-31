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

export default Course