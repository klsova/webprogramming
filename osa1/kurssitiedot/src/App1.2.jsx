const App = () => {
  const Header = (props) => {
    console.log(props)
    return (
      <div>
        <h1>{props.course}</h1>
      </div>
    )
  }
  const Part = (props) => {
    console.log(props)
    return (
      <p>
      {props.part} {props.exercises}
      </p>
    )
  }

  const Content = (props) => {
    console.log(props)
    return (
    <div>
      <Part part="Fundamentals of React" exercises={10} />
      <Part part = "Using props to pass data" exercises = {7}/>
      <Part part = "State of a component" exercises = {14}/>
    </div>
    )
  }

  const Total = (props) => {
    console.log(props)
    return (
      <p>
        {props.total} {props.exercises}
      </p>
    )
  }

  return (
    <div>
      <Header course ="Half Stack application development"/>
      <Content />
      <Total total = "Number of exerises" exercises = {10 + 7 + 14}/>
    </div>
  )
}

export default App