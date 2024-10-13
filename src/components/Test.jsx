import {useState} from 'react'

function Test() {
    const[isOn, setIsOn] = useState('');
    
    return (
   <>
      <div
        style={{
          backgroundColor : isOn ? "green": "yellow",
          color: 'white',
        padding: '20px',
        textAlign: 'center',
        width: '100px',
        height : '100px', 
        }}
      >
     

      <h1>{isOn ? 'On': 'OFF'}</h1>
      <button onClick={() => setIsOn(!isOn)}>Toggle</button>
        
      </div>  
   </>
  )
}

export default Test