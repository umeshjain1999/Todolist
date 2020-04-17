import React , {useState} from 'react';

function Usestatetwo() {
    const initialState = []
    const [arr, setarr] = useState(initialState)
    
    //function
    const additems = () =>{
        
        setarr(
            [
                ...arr, { id : arr.length , value: Math.floor(Math.random()*10)+1}
            ]
        )
    }
    console.log(arr);
    
    return (
        <div>

            <h2>Component for Arrays</h2>

            <button onClick= {additems}>Add Item</button>

            <ul> 
                
                { arr.map(ar =>( 
                <li key = {ar.id}> 
                    <input type="checkbox" /> {" "} {ar.value} 
                </li>) ) }
            </ul>

        </div>
    )
}

export default Usestatetwo
