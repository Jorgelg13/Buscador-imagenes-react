import React from 'react';

const Navegacion = (props) => {
    return ( 
        <div className="row py-5">
            <button onClick={props.paginaAnterior} type="button"  className="btn btn-info mr-1">Atras &larr;</button>
            <button onClick={props.paginaSiguiente} type="button"  className="btn btn-info mr-1">Siguiente &rarr;</button>
        </div>
     );
}
 
export default Navegacion;