const App = () => {
  const Course = ({course}) => {
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

    const Header = ({course}) => {
      return (
        <div>
          <h1>{course}</h1>
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
  
    const Content = ({parts}) => {
      return (
      <div>
        <Part part={parts[0]} />
        <Part part={parts[1]} />
        <Part part={parts[2]} />
      </div>
      )
    }
  }
  
  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App