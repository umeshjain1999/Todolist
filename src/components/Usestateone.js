import React , {useState} from 'react'

function Usestateone() {
    
    const initialState = {name:'',age:''};
    const [obj, setobj] = useState(initialState)

    
    return (
        <div>
            <h3>Testing object in useSate</h3>
            <input type="text" placeholder='name'  value = {obj.name} onChange= {
                e => setobj({...obj, name : e.target.value})
            }/> {' '}
             <input type="number" placeholder='your age' value = {obj.age}  onChange= {
                e => setobj({...obj, age : e.target.value})
            }/>
                {' '}
            <input type="text" placeholder='your interest'  value = {obj.interest} onChange= {
                e => setobj({...obj, interest : e.target.value})
            }/>
           
            <h4>Name is : {obj.name}</h4>
            <h4>Age is : {obj.age}</h4>
            <h4>Interest is : {obj.interest}</h4>
        <h4>JSON format - {JSON.stringify(obj)}</h4>
         </div>
    )
}

export default Usestateone
