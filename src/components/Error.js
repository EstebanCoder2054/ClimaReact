import React from 'react';

function Error({mensaje}){
    return(
        <div className="card-panel red darken-1 error col s12">
            {mensaje}
        </div>
    )
}

export default Error;