import React from 'react';
import { Header } from './components';
import { Form } from './containers';

function App() {
  return (
    <React.Fragment>
      <Header title="Clima React App" />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Form />
            </div>
            <div className="col m6 s12">
              2
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
