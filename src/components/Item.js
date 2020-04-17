import React from 'react';

const Item = ({todo , index , handletoremove , handleitemtoclick}) => {
    
    
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    return (
        <div className = 'item-list'>
            <h4>
            <span className={todo.iscompleted ? 'strike-through':''} onClick={ () => handleitemtoclick(index) }>{todo.message} 
            </span>
            {' '}
            <span className = 'date'>{date + ' ' + time}</span>
            {' '}
            <span onClick = { () => handletoremove(index) }>🙅</span>
            </h4>
        </div>
    )
}

export default Item
