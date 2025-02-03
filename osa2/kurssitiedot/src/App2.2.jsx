const App = () => {
    const course = {
      name: "Half Stack application development",
      id: 1,
      parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3
      },
    ],
    };


  return (
    <div>
      <Course course={course} />
    </div>
  )
}

const Course = ({course}) => {
  return (
    <div>
      <Header name={course.name}/>
      <Content parts={course.parts}/>
    </div>
  )
}

const Header = ({name}) => {
  return (
    <h1>{name}</h1>
  )
}

const Content = ({parts}) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0)
  
  return (
    <div>
      {parts.map(part => (
        <Part key={part.id} part={part} />
      ))}
      <p> Total of {total} exercises</p>
    </div>
  )
}

const Part = ({part}) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

export default App