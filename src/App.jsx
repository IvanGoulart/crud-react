import './App.css';
import './css/style.css'

import { BrowserRouter as Router, 
        Route,
        Switch,
        Link
      } from 'react-router-dom';


import Form from './components/Form'
import ListCustomer from './components/ListCustomer';

import Nav from './components/Nav';

function App() {
  return (

  <Router>

    <div className="App">
      <header className="App-header">
        <div className="container">
        <Nav/>    
          <Switch>
            <Route path="/" exact component={Form} />
            <Route path="/list" component={ListCustomer} />
          </Switch>
        </div>
      </header>

    </div>


  </Router>  

  );
}

export default App;
