import {useState} from 'react'

function Search(props) {

    const [data, setData] = useState('');

    const updateValue = (e) => {
        setData(e.target.value);
        props.update(e.target.value); 
    }

    return (
        <div className="form-field">
            <label htmlFor="-search">{props.name}</label>
            <br/>
            <input type="text" className="add-user-input" value={data} onChange={e => updateValue(e)}/>
        </div>
  );

}

export default Search;
