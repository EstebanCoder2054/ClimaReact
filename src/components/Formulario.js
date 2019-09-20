import React,{useState} from 'react';

function Formulario({datosConsulta}){

    //state del componente
    //busqueda = state
    //guardarBusqueda = this.setState({}) - modificador del state
    const [busqueda, guardarBusqueda] = useState({
        ciudad: '',
        pais: ''
    });

    const handleChange = (e) => {
        //cambiar el state
        guardarBusqueda({
            ...busqueda, //creando copia del state actual -> para que no pierda la referencia
            [e.target.name] : e.target.value    
        })
    }
    
    const consultarClima = (e) => {
        e.preventDefault();

        //pasando al componente pricipal la búsqueda que realizó el usuario
        datosConsulta(busqueda);
    }
    

    return(
        
        <form
            onSubmit={consultarClima}
        >
            <div className="input-field col s12">
                <input 
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    onChange={handleChange}
                />
                <label htmlFor="ciudad">Ciudad: </label>
            </div>

            <div className="input-field col s12">
                <select onChange={handleChange} name="pais">
                    <option value="">Selecciona un país</option>
                    <option value="CO">Colombia</option>
                    <option value="US">United States</option>
                    <option value="MX">Mexico</option>
                    <option value="AR">Argentina</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
            </div>

            <div className="input-field col s12">
                <input type="submit" className="waves-effect waves-light btn-large
                 btn-block #f57c00 orange darken-2 accent-4" value="Buscar Clima"/>
            </div>

            
        </form>
        
    );
}

export default Formulario;