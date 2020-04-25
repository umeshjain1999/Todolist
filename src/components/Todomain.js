import React , {useState , useEffect} from 'react';
import Item from './Item';
import Additem from './Additem';
function Todomain({chg}) {

   
    const initialState = () => {
        const savedItem = JSON.parse(localStorage.getItem('todolist'));
        return savedItem || []
    };

    const [todos, settodo] = useState(initialState());



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
        
        <div className='todomain' >
            
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
                        chg = {chg}
                        />
                        
                    ) )
                ): ''
                }
            </div>

        </div>
    )
}

export default Todomain
