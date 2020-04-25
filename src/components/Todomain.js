import React , {useState , useEffect} from 'react';
import Item from './Item';
import Additem from './Additem';
import '../App.css';
import '../Todo.css';

function Todomain() {

   
    const initialState = () => {
        const savedItem = JSON.parse(localStorage.getItem('todolist'));
        return savedItem || []
    };

    //Dark or Light mode
    const SavedMode = () => {
        const savedmode = JSON.parse(localStorage.getItem('mode'));
        return savedmode
      };

    const [tog, settog] = useState(SavedMode());

    const [todos, settodo] = useState(initialState());

    useEffect(() => {
        document.title = `Todo 🤓`
        alert("⚠️ All 💾 will be removed if you clear the cache ⚠️")
      },[])


    //useEffect for dark/light mode
    useEffect(() => {
        localStorage.setItem('mode' , JSON.stringify(tog));
      },[tog])
    

    useEffect(() => {
        localStorage.setItem('todolist' , JSON.stringify(todos));
    }, [todos]);

    
  

       

    //here value parameter is used from Additem component function
    const addtodo = (value) => {
        const newitem = [...todos, {message:value , iscompleted:false} ];
        
        settodo( newitem );
    };

    //to update todos value after removing
    const handletoremove = (index) => {
        const newtodos = [...todos];

        newtodos.splice(index,1);

        settodo( newtodos );
    };

    //to update value of iscompleted
    const handleitemtoclick = ( index ) => {
        
        const newtodos = [...todos];
        
        newtodos[index].iscompleted = !newtodos[index].iscompleted;

        settodo( newtodos );
    };
   
    
    
    return (
        
        <div className =  {tog? 'light-mode' : 'dark-mode'} >
            
            <div >
                <span className = 'change-bg'  onClick = {() => settog(prev => !prev)}>🖐<p style = {{fontSize:'10px' , color:'rgb(116, 116, 116)'}} >(High-Five here)</p></span>
                
             </div>



            <h1 style = {{display:"flex" , justifyContent: "center" , fontSize:'40px'}}>Todo List 📑</h1>
            <Additem addtodo = {addtodo}/>
            <div>
                {todos.length ? (
                    todos.map((item,index) => (

                        <Item 
                        key = {`${item.message}-${index}`}
                        todo = {item}
                        index = {index}
                        handletoremove = {handletoremove}
                        handleitemtoclick = {handleitemtoclick}
                  
                        />
                        
                    ) )
                ): ''
                }
            </div>

        </div>
    )
}

export default Todomain
