import React from 'react';

const Imagen = (props) => {
    const {largeImageURL, likes,previewURL, tags,views} = props.imagen;
    return ( 
        <div className="col-6 col-sm4 col-md-3 mb-4">
            <div className="card">
                <img className="card-img-top" src={previewURL} alt ={tags}/>
            </div>
            <div className="card-body">
                <p className="card-text">{likes} Me gusta</p>
                <p className="card-text">{views} Vistas</p>
                <a href={largeImageURL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-block">Ver Imagen</a>
            </div>
            
        </div>
     );
}
 
export default Imagen;
