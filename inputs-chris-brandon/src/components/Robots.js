
const Robots = (props) => {

  const badRobot = (input) => {
    return input.split("").map((value, index) => {
      if (index % 4 === 0) 
        {return "B"}
      else if(index % 4 === 1)
        {return "L"} 
      else if (index % 4 === 2) 
        {return "A"} 
      else { return ""}
    })
  } 
    
  
    return(
      <>
        <h1>Good Robot</h1>
          <p>{props.robotTranslator}</p>
        <h1>Bad Robot</h1>
          <p>{badRobot(props.robotTranslator)}</p>

        <h1>SkyNet Robot</h1>
          <p>{props.robotTranslator}</p>
      </>

    )
}
export default Robots