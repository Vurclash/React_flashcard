import React from 'react';
import { Route, Switch, } from 'react-router-dom';
import Home from './components/Home';
import Flash from './components/Flash';
import About from './components/About';
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';
import { Container, } from 'semantic-ui-react';

const App = (props) => (
  <> 
    <Navbar />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/flash" component={Flash} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </>
);




export default App;
