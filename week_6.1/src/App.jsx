// import React, { useEffect, useState } from 'react';

import { useState } from "react";

// function App() {
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       fetch("https://sum-server.100xdevs.com/todos")
//         .then(async (res) => {
//           const json = await res.json();
//           setTodos(json.todos);
//         });
//     }, 10000);

   
//   }, []);

//   return (
//     <div>
//       {todos.map(todo => (
//         <Todo key={todo.id} title={todo.title} description={todo.description} />
//       ))}
//     </div>
//   );
// }

// function Todo ({ title, description }) {
//   return (
//     <div>
//       <h1>{title}</h1>
//       <p>{description}</p>
//     </div>
//   );
// }

// export default App;




// const { useEffect } = require("react");

// function App(){
//   useEffect(function(){
//     alert("hi")
//   },[])
//   return (
//   <div>
//     hi there 
//     </div>
//   )
// }

// export default App;

























// function App(){
// return (
//   <div style = {{display : "flex"}}>
//     <Card >
//       hi there 
//     </Card>
//     <Card>
//       <div>
//         Hello From the 2nd Card 
//       </div>
//     </Card>
//   </div>
// )
// }
// function Card ({children}){
// return   <div style =  {{
//     border : "1px solid red",
//     padding : 50,
//     margin : 10
//   }}>
//     {children}

//   </div>

// }


// export default App;







// function App(){
//   return <div>
//   <CardWrapper innerComponent = {TextComponents}></CardWrapper>
//   </div>
// }

// function TextComponents(){
//   return <div>
//   hi there
//   </div>
// }

// function CardWrapper({}){
// return(
//   <div style={{border : "2px solid black"}}>
//    {innerComponent}
//   </div>
// )
// }
// export default App
























// import React, { useState } from "react";
// let counter =4;
// function App() {
//   const [todos, setTodos] = useState([
//     {
//       id: 1,
//       title: "go to gym",
//       description: "go to gym today"
//     },
//     {
//       id: 2,
//       title: "eat food",
//       description: "eat food"
//     },
//     {
//       id: 3,
//       title: "go to class",
//       description: "go to class"
//     }
//   ]);

//   function addTodo() {
//     setTodos([
//       ...todos,
//       {
//         id: counter++,
//         title: Math.random().toString(),
//         description: Math.random().toString()
//       }
//     ]);
//   }

//   return (
//     <div>
//       <button onClick={addTodo}>Add a New Todo</button>
//       {todos.map(todo => (
//         <Todo key={todo.id} title={todo.title} description={todo.description} />
//       ))}
//     </div>
//   );
// }

// function Todo({ title, description }) {
//   return (
//     <div>
//       <h1>{title}</h1>
//       <h5>{description}</h5>
//     </div>
//   );
// }

// export default App;


























// import React, { Fragment, useState } from "react";

// function App() {
//   const [title, setTitle] = useState("my name is harkirat1");

//   function updateTitle() {
//     setTitle("my name is " + Math.random());
//   }

//   return (
//     <Fragment>
//       <button onClick={updateTitle}>Click me to change the title</button>
//       <Header title={title} />
//       <Header title="harkirat2" />
//     </Fragment>
//   );
// }

// const Header = React.memo(function Header({ title }) {
//   return <div>{title}</div>;
// });

// export default App;
 
// //function Headerwithbutton(){
//   //   const [title, setTitle] = useState("my name is harkirat1");
  
//   //   function updateTitle() {
//   //     setTitle("my name is " + Math.random());
//   //   }
//   //   return (
//   //     <Fragment>
//   //       <button onClick={updateTitle}>Click me to change the title</button>
//   //       <Header title={title} />
//   //       <Header title="harkirat2" />
//   //     </Fragment>
//   //   );
//   // }

function App(){
  const[firsttitle,setFirsttitle] = useState("my name is harkirat")
  function updateTitle (){
    setFirsttitle(" the answer is " + Math.random())
  }

return(
  <div>
<button onClick={updateTitle}>Click me to change the title</button>
<Header title ={firsttitle}/>
<Header title= "MY NAME IS BHARAT"/>
  </div>
)

}


function Header({title}){
  return(
    <div>
      {title}
    </div>
  )
}


export default App






