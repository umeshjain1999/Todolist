import React , {useState} from 'react';
import Item from './Item';
import Additem from './Additem';
function Todomain() {


    const initialState = [] ;


    const [todos, settodo] = useState(initialState);


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
    console.log(todos);
    
    
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
                        />
                        
                    ) )
                ): ''
                }
            </div>

        </div>
    )
}

export default Todomain
