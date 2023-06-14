import React from "react";

import Container from "react-bootstrap/Container";
import FakePeople from "./fakerDataGenerator";

import "./App.css";

const App = () => (
  <Container className="p-2">
    <FakePeople />
  </Container>
);

export default App;
