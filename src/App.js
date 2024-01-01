import { useState, useEffect, React } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [multiplyTwo, setMultiplyTwo] = useState(1);

  function insertCount() {
    setCount(count + 1);
  }

  function multiplyTwoFunc() {
    setMultiplyTwo(multiplyTwo * 2);
  }

  useEffect(() => {
    console.log("Component Mounted");
  },[multiplyTwo]);
  return (
    <>
      {/* use effect hook */}
      {/* ye by default may page load may run hota hay */}
      {/* agar ham chahtay hay k har bar ye run na hotw tw isko bhi handle krsaktay hay */}
      {/* uses */}
      {/* 1- data page load may fetch krne k liye
      2- ya tw DOM ko directly update krna hota hay */}

      <h1>Button Clicked {count} Times</h1>
      <button onClick={insertCount}>Click Me To Add</button>
      <h1>Multiply By Two Value {multiplyTwo}</h1>
      <button onClick={multiplyTwoFunc}>Click Me To Multiply</button>
    </>
  );
}

export default App;
