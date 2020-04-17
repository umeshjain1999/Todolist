import React , {useState} from 'react';
import Todomain from './components/Todomain';
import './App.css';
import './Todo.css';

function App(){
  const [tog, settog] = useState(true);
 
  const [bg, setbg] = useState('rgb(211, 182, 214)');

  const changecolor = () =>{

      console.log(tog);
      let changebg = '';
      tog? changebg = 'rgb(68, 68, 68)': changebg = 'rgb(211, 182, 214)' ;
      
      settog(!tog);
      setbg(changebg);
  
      
  };

  
  return(
<div className= 'app' style = {{ background:bg}}  >
<span className = 'change-bg'  onClick = {changecolor}>🖐<p style = {{fontSize:'10px' , color:'rgb(116, 116, 116)'}} >(High-Five here)</p></span>
    <Todomain/>
</div>
  );
}

export default App;