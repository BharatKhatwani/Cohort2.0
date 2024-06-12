import React, { createContext, useContext, useState } from "react";

// Create the CountContext
const CountContext = createContext();

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* Provide the count and setCount to the entire tree */}
      <CountContext.Provider value={{ count, setCount }}>
        <Count />
      </CountContext.Provider>
    </div>
  );
}

function Count() {
  return (
    <div>
      <CountRender /> {/* No need to pass count and setCount as props */}
      <Buttons /> {/* No need to pass count and setCount as props */}
    </div>
  );
}

function CountRender() {
  const { count } = useContext(CountContext); // Destructure count from context

  return (
    <div>
      count = {count}
    </div>
  );
}

function Buttons() {
  const { count, setCount } = useContext(CountContext); // Destructure count and setCount from context

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

export default App;








// 3. 

// 2.     // code of prop drilling :-  https://gist.github.com/BharatKhatwani/38b04d6e81be63a9dfe06459d95c5849
 
//  1. The code of React route learn in it 
// Code :- https://gist.github.com/BharatKhatwani/99b5412de727f5c1b711ae92bd1da7cd
