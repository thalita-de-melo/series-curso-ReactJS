import React, {useState,useEffect} from 'react';
import Header from './Header'
import{
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Generos from './Generos'
import NovoGenero from './novoGenero'
import EditarGenero from './EditarGenero'
import Series from './Series'
import NovaSerie from './NovaSerie'
import InfoSerie from './InfoSerie'

const Home = () => {
  return <h1>Home</h1>
}

function App() {

  return (
    <Router>
      <div >
        <Header/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Generos' exact component={Generos} />
          <Route path='/Generos/novo' exact component={NovoGenero} />
          <Route path='/Generos/:id' exact component={EditarGenero} />   
          <Route path='/series' exact component={Series} />   
          <Route path='/series/novo' exact component={NovaSerie} /> 
          <Route path='/series/:id' exact component={InfoSerie} /> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;
