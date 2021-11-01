import React from 'react'
import { v4 as uuidv4} from 'uuid';

const Form = ({input,setInput, todos,setTodos}) => {
    const onInputChange = (event) => {
        setInput(event.target.value);

    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        setTodos([...todos,{id:uuidv4() , title: input, completed:false}])
        setInput("")
    }
    return (
        <form onSubmit={onFormSubmit}>
            <input type="text" placeholder="Enter a Todo..." className="input-form" value={input} required onChange={onInputChange}/>
            <button>Submit</button>

        </form>

    )
}

export default Form
