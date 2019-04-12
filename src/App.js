import React, { Component } from 'react';
import Buscador from './componentes/Buscador';
import Resultado from './componentes/Resultado';

class App extends Component {
  state ={
    termino : '',
    imagenes : [],
    pagina : ''
  }

  consultarApi = () =>{
    const termino = this.state.termino;
    const pagina = this.state.pagina;
    const url = `https://pixabay.com/api/?key=12170363-0419548aefdeb704d5df21712&q=${termino}&per_page=30&page=${pagina}`;
    
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(resultado => this.setState({
      imagenes : resultado.hits
    }))
  }

  datosBusqueda =(termino) =>{
    this.setState({
        termino : termino,
        pagina: 1
    },() => {
      this.consultarApi();
    })
  }

  paginaSiguiente = () =>{
    let pagina = this.state.pagina;
    pagina +=1;
    this.setState({
      pagina: pagina
    }, () =>{
      this.consultarApi();
      this.scroll();
    })
  }

  paginaAnterior = () =>{
    let pagina = this.state.pagina;
    pagina -=1;
    this.setState({
      pagina: pagina
    }, () =>{
      this.consultarApi();
      this.scroll();
    })
  }

  scroll = () =>{
    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView('auto','start');
  }

  render() {
    return (
      <div className="app container">
         <div className="jumbotron">
           <p className="lead text-center">Buscador de imagenes</p>
           <Buscador
           datosBusqueda={this.datosBusqueda}
           />
         </div>
         <div className="row justify-content-center">
          <Resultado
            imagenes ={this.state.imagenes}
            paginaAnterior = {this.paginaAnterior}
            paginaSiguiente = {this.paginaSiguiente}
          />
         </div>
      </div>
    );
  }
}

export default App;
