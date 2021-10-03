import { useState } from 'react'

export default function Zoom() {
  const [counter, setCounter] = useState(0)
  const handleCounter = (newCounter) => {
    setCounter(newCounter)
    // use another image or scale zoom
  }

  return (
    <div className="zoom-magnifier">
      <button disabled={counter === 0} onClick={() => handleCounter(counter - 1)} className="minus">
        -
      </button>
      <button disabled={counter === 4} onClick={() => handleCounter(counter + 1)} className="plus">
        +
      </button>
    </div>
  );
}
