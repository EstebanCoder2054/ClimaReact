import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Error from './components/Error';
import Clima from './components/Clima';


function App() {

  const [ciudad, guardarCiudad] = useState('');
  const [pais, guardarPais] = useState('');
  const [error, guardarError] = useState(false);
  const [resultado, guardarResultado] = useState({});

  useEffect(() => {

    //prevenir ejecución
    if(ciudad==='') return;

    //consultando a la API
    const consultarAPI = async () => {

    const appId = '5e6536afb035e2ea1e4c84232cc16b6e';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`
  
    //consultar la URL
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();

    guardarResultado(resultado);
  }

  consultarAPI();  

  }, [ciudad,pais]);

  const datosConsulta = (datos) => {
    console.log(datos.pais);

    //validando que ambos campos se encuentren llenos
    if(datos.ciudad === '' || datos.pais === ''){
      guardarError(true);
      return;
    }

    //si la ciudad y pais existen, guardarlos en el state principal
    guardarCiudad(datos.ciudad);
    guardarPais(datos.pais);
    guardarError(false);
  }

  
  //cargando componentes condicionalmente
  let componente;

  //llamando el state error
  if(error){
    //Hay un error, mostrarlo
    componente = <Error mensaje='Ambos campos son obligatorios'/>
  } else if(resultado.cod === "404"){
    componente = <Error mensaje="La ciudad no existe en nuestro registro" />
  }
  
  
  else{
    //mostrar el clima
    componente = <Clima 
                    resultado={resultado}
                  />;
  }


  return (
    
<div className="App">

    <Header 
      titulo = 'App del clima con React | ClimaApp'
    />

    <div className="contenedor-form">
      <div className="container"> 
        <div className="row">
          <div className="col s12 m6">
            <Formulario
              datosConsulta = {datosConsulta}
            />
          </div>

          <div className="col s12 m6">
            {componente}
          </div>
        </div>
      </div>  
    </div>
</div>
    
    
  );
}

export default App;
