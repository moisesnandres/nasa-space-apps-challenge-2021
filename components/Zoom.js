import { useState } from 'react'
import ZoomOutIcon from '@mui/icons-material/ZoomOut'
import ZoomInIcon from '@mui/icons-material/ZoomIn'

export default function Zoom() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="zoom-magnifier">
      <button disabled={counter === 0} onClick={() => setCounter(counter - 1)}>
        <ZoomOutIcon />
      </button>
      <span>Zoom</span>
      <button disabled={counter === 4} onClick={() => setCounter(counter + 1)}>
        <ZoomInIcon />
      </button>
    </div>
  );
}
