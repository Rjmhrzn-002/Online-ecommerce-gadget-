import React from "react";
import Header from "./components/Header";
import Container from "./components/Card-container";
import Card from "./components/Card";
import Data from "./components/Data";

function App() {
  const cards = Data.map((item) => {
    <Card key={item.id} item={item} />;
  });
  return (
    <>
      <Header />
      <Container>{cards}</Container>
    </>
  );
}

export default App;
