import {useState} from 'react'

function Hide_Show() {
  const [isVisible, setIsVisible] = useState();

  return (
    <div>
     <button onClick={() => setIsVisible(!isVisible)}>
      {isVisible ? 'hide-content': 'show content'}
      
    </button>
    {isVisible &&
        <p>Text is visible</p>
    }
    </div>
  )
}

export default Hide_Show