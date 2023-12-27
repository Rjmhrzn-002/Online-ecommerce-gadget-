import React from "react";
import Header from "./components/Header";
import Container from "./Pages/Shop-container";
import Card from "./Pages/Card";
import Data from "./assets/Data";
import Footer from "./components/Footer";
import { Routes, Route, BrowserRouter } from "react-dom";
import Newsletter from "./components/Newsletter";

function App() {
  const cards = Data.map((item) => (
    <Card key={item.id} item={item} />
    //spread object literals could also be used here however not prolifict on it yet, use later.//
  ));

  return (
    <div>
      <Header />
      <Container children={cards}></Container>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;

{
  /*
  * This block of code is from YT video from -GreatStack:Ecommerce website using React js
  
   <BrowserRouter>
    <Header />
    <Routes>
          <Route path="/" element={<Shop category="All" />}></Route>
          <Route path="/Laptop" element={<Shop category="Laptop" />}></Route>
          <Route path="/Mobile" element={<Shop category ="Mobile" />}></Route>
          <Route path="/Pc Builds" element={<Shop category="Pc Builds/>}></Route>
          <Route path="/Accessories" element={<Shop  category ="Accessories"/>}></Route>
          <Route path="/Login" element={<LoginSign   />}></Route>
          <Route path="/myCart" element={<Cart />}></Route>
          <Route path="/Product" element={<Product />}></Route>


        </Routes>
        <Container children={cards} />
    <Footer />
</BrowserRouter>
 */
}
