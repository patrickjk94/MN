import {useState} from 'react'

import './Toggle.css';

function Toggle(props) {

  const [switchState, setSwitchState] = useState(null); 

  const toggleValue = (value) => {
    return (e) => {
      const newState = ((switchState === null) || (switchState === !value)) ? value : null;

      setSwitchState(newState);
      props.update(newState);   
    }
  }

  return (
    <label className="toggle">
        <span>{props.name}</span>

        <label class="toggle-container"> True 
          <input type="checkbox" checked={ !!switchState } onChange={toggleValue(true)} />
          <span class="checkmark"></span>
        </label>

        <label class="toggle-container"> False 
          <input type="checkbox" checked={ switchState !== null ? !switchState : false } onChange={toggleValue(false)} />
          <span class="checkmark"></span>
        </label>

    </label>
  );
}

export default Toggle;
