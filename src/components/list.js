//Model 4 Edit logicalay id will be same // we need state that a user can add some thing
import React from 'react'
import { deleteTodo, editTodo } from '../actions'
import {useDispatch } from "react-redux";
import { useState } from 'react';

const List = ({data}) => {
  const dispatch = useDispatch();
  const [inputData, setInputData] = useState() // to edit 
  const [editState, setEditState] = useState(false)
  console.log("data",data)

  const handleEdit = (task)=>{
    try{
     if (!task) throw "Empty Field" 
       const payload = {
         title: task,
         id : data.id  //as id will be same in Edit
     }
     const action = editTodo(payload);
     dispatch(action);
     console.log("payload", payload)
     setEditState(false);

 } 
    catch(error) {
     console.log("error", error)
   }
}
  return (
    <div>
        <div>
            {data.title}
            <button onClick={()=>dispatch(deleteTodo(data.id))}>
              Delete
            </button>
            <button onClick={()=>setEditState(!editState)}>
              Edit
            </button>
            {

            editState ?
              <>
         <input value={inputData} onChange={(e) => setInputData(e.target.value)} />
              
              <button onClick={()=>handleEdit(inputData)}>Submit</button>

              </>
              :""
            }
          </div>     
    </div>
  )
}

export default List




// // Model 3 (B Delete). 

// import React from 'react'
// import { deleteTodo } from '../actions'
// import {useDispatch } from "react-redux";

// const List = ({data}) => {
//   const dispatch = useDispatch();

//   console.log("data",data)

//   return (
//     <div>
//         <div>
//             {data.title}
//             <button onClick={()=>dispatch(deleteTodo(data.id))}>
//               Delete
//             </button>
            
//         </div>
      
//     </div>
//   )
// }

// export default List


// Model 3 (A Delete).
// import React from 'react'
// import { deleteTodo } from '../actions'
// import {useDispatch } from "react-redux";
// const List = ({data}) => {
//   const dispatch = useDispatch();
 
//   const handleDelete = (id)=>{
//    dispatch(deleteTodo(id))
//   }
//   return (
//     <div>
//         <div>
//             {data.title}
//             <button onClick={()=>handleDelete(data.id)}>
//               Delete
//             </button>
//         </div>
      
//     </div>
//   )
// }

// export default List



// Model 2
// import React from 'react'
// const List = ({data}) => {
//   return (
//     <div>
//         <div>
//             {data.title}
//         </div>
      
//     </div>
//   )
// }

// export default List

// Modle 1
// before maping throughg index.js of components // import list from './list';
// 
// import React from 'react'

// const list = ({data}) => {
//   return (
//     <div>
//         <div>
//             {data.title}
//         </div>
      
//     </div>
//   )
// }

// export default list
