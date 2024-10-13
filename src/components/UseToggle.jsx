/*Create a custom React hook, useToggle, that toggles a boolean state value.*/
 
import {useState, useCallback} from 'react'

function UseToggle() {

    const useToggle = ((initial) =>{
    const [value, setValue] = useState(initial);
    const toggleValue = useCallback(()=>{
        setValue(!value)
    },[value]);
    return [value, toggleValue];
    })
  const [isToggle, toggle] = useToggle(false);

  const backgroundColor = isToggle ? 'green' : 'red';
  const color = isToggle ? 'white' : 'black';

  return (
    <>
    <div style={{ backgroundColor, color, padding: '20px', width: '100vw  ', height: "100vh"}}>
        <h1>{isToggle ? "ON": "OFF"}</h1>
        <button onClick ={toggle}>Toggle</button>
    </div>
    </>
  )
}

export default UseToggle