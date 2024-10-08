

import React, { useState } from "react";

// import { useState } from "react"

function App() {
  const [todos, setTodos] = useState([
    {
      title: "Go to GYM",
      description: "Go to gym from 7-9",
      completed: false
    },
    {
      title: "Study DSA",
      description: "Study DSA from 9-10",
      completed: true
    }
  ]);
  



  function addTodo(){
    setTodos([...todos,{
      title : "new Todo",
      description : "desc of new todo"
    }])
  }
  return (
    <div>
    <button onClick = {addTodo} > Add a random todo</button>
    {/* {
    <Todo title = {todos[0].title} description = {todos[0].description}/>
    <Todo title= {todos[1]. title}  description = {todos[1].description} />
    } */}

 
{
  todos.map(function(todo){
    return <Todo title = {todo.title} description = {todo.description} />
  })
}
    </div>
  );
}
function Todo (props){
  return <div>
  <h1>{props.title}</h1>
  <h2>{props.description}</h2>
  </div>
}
export default App;




































// 1 way of todo application to render into that  return into that 

// import React, { useState } from "react";

// function App() {
//   const [todos, setTodos] = useState([
//     {
//       title: "Go to GYM",
//       description: "Go to gym from 7-9",
//       completed: false
//     },
//     {
//       title: "Study DSA",
//       description: "Study DSA from 9-10",
//       completed: true
//     }
//   ]);

//   return (
//     <div>
//       // easily and dump way of doing thing that
//       {JSON.stringify(todos)}
//     </div>
//   );
// }

// export default App;




// 1 thinks


// react seen there is state or not that is called hook 
// import  { useState } from "react";
// function App(){
//   const [count,setcount] = useState()[0];
//   function onClickedHandler(){
//     setcount(count+1);
//   }
//   return (
//     <div> 
//       <button onClick= {onClickedHandler}>Counter {count}</button>
//     </div>
//   )
// }
// export default App;
// 


// 2 thinks 
// import React, { useState } from 'react';

// function App() {
//   const [count, setCount] = useState(0);

//   function onClickedHandler() {
//     setCount(count + 1);
//   }

//   return (
//     <div>
//       <CustomButton onClick={onClickedHandler} count={count} />
//     </div>
//   );
// }

// function CustomButton(props) {
//   return (
//     <div>
//       <button onClick={props.onClick}>Counter {props.count}</button>
//     </div>
//   );
// }

