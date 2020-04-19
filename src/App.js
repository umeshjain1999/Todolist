import React , {useState} from 'react';
import Todomain from './components/Todomain';
import './App.css';
import './Todo.css';

function App(){

  const [tog, settog] = useState(true);
  
  const [chg, setchg] = useState({changebgd : 'rgb(211, 182, 214)' , changecol : 'black'})
  const [bg, setbg] = useState('rgb(211, 182, 214)');

  const changecolor = () =>{

      let changebg = {};
      tog? changebg = {changebgd:'rgb(68, 68, 68)', changecol : 'white'} : changebg = {changebgd : 'rgb(211, 182, 214)' , changecol : 'black'} ;
      
      settog(!tog);
      setchg(changebg);    
  };

  
  return(
<div className= 'app' style = {{ background:chg.changebgd}}  >
<span className = 'change-bg'  onClick = {changecolor}>🖐<p style = {{fontSize:'10px' , color:'rgb(116, 116, 116)'}} >(High-Five here)</p></span>
    <Todomain  chg = {chg.changecol}/>
</div>
  );
}

export default App;
