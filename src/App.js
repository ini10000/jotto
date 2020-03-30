// import React, { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);
//   return (
//     <div data-test="component-app">
//       <h1 data-test="counter-display" className={`click-${count}`}>
//         The counter is currently {count}
//       </h1>
//       {count < 0 && <p data-test="error-message">Counter cannot go below 0</p>}
//       <button data-test="increment-button" onClick={() => setCount(count + 1)}>
//         Increment Button
//       </button>
//       <button data-test="zero-button" onClick={() => setCount(0)}>
//         Zero Button
//       </button>
//       <button
//         data-test="decrement-button"
//         onClick={() => {
//           setCount(count - 1);
//           if (count < 0) {
//             setCount(0);
//           }
//         }}
//       >
//         Decrement Button
//       </button>
//     </div>
//   );
// }

// export default App;
