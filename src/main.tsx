import * as React from 'react';
import * as ReactDOM from 'react-dom';

const holaMundo = React.createElement('h1', {}, 'Hola, Mundo!');

export const App: React.StatelessComponent<{}> = () => {
  return (
    <div className="jumbotron">
    <img src="src\content\img\logo-solbooking-white.png"/>
    <p>
      "Porque siempre es verano en algún lugar del mundo"
    </p>
  </div>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('Cabecera')
);

ReactDOM.render(
  holaMundo,
  document.getElementById('Cuerpo')
);
