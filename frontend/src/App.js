import React from 'react';
import './App.css';

import { Header } from './components/header';
import Card from './components/card/';

function App() {
  return (
    <>
      <Header title="React estacionamento"></Header>
      <div className="main-container">

        {
          [1, 2, 3, 4, 5, 6].map(x => (

            <Card key={x}>
              <div className="identifier-container">
                <h2>AACD-2581{x}</h2>
              </div>
              <div className="vehicle-container">
                <span>Veiculo</span>
                <h2>Corolla Branco</h2>
              </div>
              <div className="times-container">
                <span>14/08 - 15:01</span>
                <span>--/-- - --:--</span>
              </div>
            </Card>

          ))
        }

        <Card className="card-add">
          +
        </Card>

      </div>
    </>
  );
}

export default App;
