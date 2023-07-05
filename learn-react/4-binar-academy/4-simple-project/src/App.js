import React from 'react';

import { Container, Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";
import './App.css';

function App() {
  return (
    <Container className="App my-3">
      <Card>
        <CardBody>
          <CardTitle tag="h5">
            Card title
          </CardTitle>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
          >
            Card subtitle
          </CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the bulk of the card‘s content.
          </CardText>
          <Button>
            Button
          </Button>
        </CardBody>
      </Card>
    </Container>
  );
}

export default App;