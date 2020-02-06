import React from 'react';
import { Header } from './components';
import { Form, Clima } from './containers';
import { formDefault } from './constants/docs';
import { apiKey } from './config';

function App() {

  const [data, setData] = React.useState(formDefault);
  const [result, setResult] = React.useState({});
  const [consult, setConsult] = React.useState(false);

  const { city, country } = data;

  React.useEffect(() => {
    const consultApi = async () => {
      if (consult) {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`;
        const response = await fetch(url);
        const res = await response.json();
        setResult(res);
        setConsult(false);
      }
    }
    consultApi();
  }, [consult])

  return (
    <React.Fragment>
      <Header title="Clima React App" />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Form data={data} setData={setData} setConsult={setConsult} />
            </div>
            <div className="col m6 s12">
              <Clima result={result} />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
