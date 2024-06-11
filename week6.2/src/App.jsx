import React, { useState, useCallback, memo, useEffect } from "react";



// function useTodo(){
//   const [todos, setTodos] = useState([]);
//   useEffect(()=> {
// axios.get("").then((res) => {
//   setTodos(res.data.todos);
// })
//   },[])

//   return todos;
// }
// function App(){
//   const todos = useTodo();
//   return <div>
//     {todos}
//   </div>
// }
// export default App;









































// 2


// function App() {
//   const [count, setCount] = useState(0);

//   const inputFunction = useCallback(() => {
//     console.log("hi there");
//   }, []);

//   return (
//     <div>
//       <ButtonComponent inputFunction={inputFunction} />
//       <button onClick={() => setCount(count + 1)}>
//         Click me {count}
//       </button>
//     </div>
//   );
// }

// const ButtonComponent = memo(({ inputFunction }) => {
//   console.log("child render");
//   return (
//     <>
//       <button onClick={inputFunction}>Button Clicked</button>
//     </>
//   );
// });

// export default App;























                                       
















// 1ways

// import React, { useState, useMemo, useEffect } from "react";

// function App() {
//   const [counter, setCounter] = useState(0);
//   const [number, setNumber] = useState(1);

//   const count = useMemo(() => {
//     let finalCount = 0;
//     for (let i = 0; i <= number; i++) {
//       finalCount += i;
//     }
//     return finalCount;
//   }, [number]);

  // useEffect(() => {
  //   let finalCount = 0;
  //   for (let i = 1; i <= number; i++) {
  //     finalCount += i;
  //   }
  //   setNumber(finalCount);
  // }, [number]);

//   return (
//     <div>
//       <input
//         type="number"
//         onChange={(e) => setNumber(parseInt(e.target.value, 10))}
//         placeholder={"Enter the value "}
//       />
//       <div>The Sum 1 to {number} is {count}</div>
//       <br />
//       <button onClick={() => setCounter(counter + 1)}>
//         Value ({counter})
//       </button>
//     </div>
//   );
// }

// export default App;
