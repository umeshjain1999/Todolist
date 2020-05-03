import React, { useState } from 'react'
import '../Todo.css';

const Additem = ( {addtodo} ) => {

    const [value_, setvalue] = useState('');

    const onFormSubmit = (event) => {

        event.preventDefault();

        const resetvalue = () => setvalue(" ")

        if(!value_) return;

        addtodo(value_);

        resetvalue();
       
    }
    const handleonchange = (event) => {
        setvalue(event.target.value);
    

        }
    return (
        <div >
            <form onSubmit = {onFormSubmit} className = 'form-input' >
                <label >
                    <input name = 'list' className = 'input-field'  value = {value_} type="text" placeholder = "write and press enter 🖖 click on '🙅' to remove "  onChange = {handleonchange}/>
                </label>
            </form>
        </div>
    )
}

export default Additem;
