import './App.css';
import '../src/components/Nav.css'

import { BrowserRouter as Router, 
        Route,
        Switch,
        Link
      } from 'react-router-dom';

import Form from './components/Formulary'
import ListCustomer from './components/ListCustomer';

import { Nav } from 'reactstrap';
import { NavItem } from 'reactstrap';

const App  = props => {

  return (

  <Router>
    <div className="App">
      <header className="App-header">
        <div className="container">

          <Nav>
              <NavItem>
                <Link to="/" className="menu-text">Formulário</Link>              
              </NavItem>
              <NavItem>
                <Link to="/list" className="menu-text">Listar</Link>              
              </NavItem>
          </Nav>

          <Switch>
            <Route path="/" exact component={Form} />
            <Route path="/list" exact component={ListCustomer} />
            <Route path="/update" exact component={Form} />
          </Switch>
        </div>
      </header>

    </div>
  </Router>  

  );
}

export default App;
