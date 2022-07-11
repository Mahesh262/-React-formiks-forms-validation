// import React from "react";
// import Products from "./ShoppingCart/Products";
// import CartView from "./ShoppingCart/CartView";
// import { Routes, Route } from "react-router";
// const App = () => {
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<Products />} />
//         <Route path="/CartView/:id" element={<CartView />} />
//       </Routes>
//     </>
//   );
// };

// export default App;

import React from "react";
import { Routes, Route } from "react-router";
import Signup from "./Signup";
import SignIn from "./SignIn";
import Deatils from "./Deatils";
import Errror from "./Errror";
import Header from "./Header";
const App = () => {
  return (
    <>
      <Header />
      <h2>Hello</h2>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Deatils" element={<Deatils />} />
        <Route path="*" element={<Errror />} />
      </Routes>
    </>
  );
};

export default App;
