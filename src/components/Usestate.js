import React , {useState} from 'react';


function Usestate() {

    const initial = 0;
    const [count, setcount] = useState(0)


    return (
        <div style = {{display:'flex',justifyContent:"space-around"}}>
            <button onClick = {() => setcount(prev => prev + 1)}> Increase </button>
            <button onClick = {() => setcount(prev => prev - 1)}> Decrease </button>
            <h3>{count}</h3>
            <button onClick = {() => setcount(initial)}> Reset </button>
        </div>
  )
}

export default Usestate
