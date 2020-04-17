import React, { useState } from 'react'

const Additem = ( {addtodo} ) => {

    const [value, setvalue] = useState('');

    const onFormSubmit = (event) => {
        event.preventDefault();

        if(!value) return;

        addtodo(value);
    }
    const handleonchange = (event) => {
        setvalue(event.target.value);
    }
    return (
        <div >
            <form onSubmit = {onFormSubmit} className = 'form-input' >
                <label >
                    <input className = 'input-field' type="text" placeholder = "write and press enter 🖖 click on '🙅' to remove " value = {value} onChange = {handleonchange}/>
                </label>
            </form>
        </div>
    )
}

export default Additem
