import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import {BrowserRouter as Router,
  Switch, Route} from 'react-router-dom';
import routes from './routes';
import Navigation from './Navbar';
import React from 'react';

function App(){
  return(
    <Router>
      <Navigation/>
        <div className='container'> 
          <Switch>
            { routes.map((route) => {
              return <Route key={route.path}
              exact path={route.path}
              component={route.component}/>
            })} 
          </Switch>
        </div>
    </Router>
  )
}

export default App;