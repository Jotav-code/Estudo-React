import React from 'react';
import Card from 'react-bootstrap/Card';
/*IMportando o react bootstrap*/

const App = () => {
  return (
    <div className="card bg-dark text-white m-5">
      <div className="card-header">Notebook</div>
      <div className="card-body">
        <h5 className="card-title"> $5000</h5>
      </div>
      <h2>///////////////////////////////////////////////////</h2>
      <Card bg="dark" text="white" className="m-5">
        <Card.Header>Notebook</Card.Header>
        <Card.Body>
          <Card.Title>$5000</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default App;
