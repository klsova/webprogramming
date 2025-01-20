const App = () => {
  const Header = (props) => {
    console.log(props)
    return (
      <div>
        <h1>{props.course}</h1>
      </div>
    )
  }

  const Content = (props) => {
    console.log(props)
    return (
    <p>
      {props.part} {props.exercises}
    </p>
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
      <Content part="Fundamentals of React" exercises={10} />
      <Content part="Using props to pass data" exercises={10} />
      <Total total = "Number of exerises" exercises = {21}/>
    </div>
  )
}

export default App