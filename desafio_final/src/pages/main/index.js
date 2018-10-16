import React from 'react';
import Title from '../../components/Title';
import Form from '../../components/Form';
import Weather from '../../components/Weather';

const App = () => (
      <div>
         <div className="wrapper">
            <div className="main">
              <div className="container">
                <div className="row">
                  <div className="col-xs-5 title-container">
                    <Title title={"Weather Application"} subtitle={"Discover the weather in your country"}/>
                  </div>
                  <div className="col-xs-7 form-container">
                    <Form />
                    <Weather/>
                  </div>
                </div>
              </div>
            </div>
         </div>
      </div>
);

export default App;
