import { useState } from 'react'
import plus from "../assets/images/icon-plus.svg";
import minus from "../assets/images/icon-minus.svg";

const Questions = (props) => {
    const[isShowing, setIsShowing] = useState(false);

  return (
    <div className='questions-container'>
        <div onClick={() => setIsShowing(!isShowing)} className='questions-head'>
            <h2>{props.questions}</h2>
            <button>
                {isShowing ? <img src={minus} alt='minus image' /> : <img src={plus} alt='plus image' />} 
            </button>
        </div>
            {isShowing && <p>{props.answers}</p>}
    </div>
  )
}

export default Questions