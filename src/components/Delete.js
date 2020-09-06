import React from 'react';
import Delete_Logo from './icons/delete.svg';

const Delete =({clearAllTodo}) => {


    // const deleteEverything = () =>{

    // }
return(
    <div className = 'delete' onClick = {()=>clearAllTodo()}>
        <div> Delete  </div>
        <div> <img src = {Delete_Logo} alt = ""/></div>
    </div>
)

// const Prompt = () => {
//     return (
//         <div className='delete-prompt'>
//             <p>Are you sure ?</p>
//             <div>
//                 <div>🚫</div>
//                 <div>👍🏽</div>
//             </div>
//         </div>
//     )
// }

}

export default Delete