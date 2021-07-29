import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import Layout from './Components/Layout';
import Home from './Components/Home/Home';
import Story from './Components/Story/Story';
import Characters from './Components/Characters/Characters';
import IndividualCharacter from './Components/Characters/IndividualCharacter';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className="App d-flex align-items-center background ">
      <div class="triangle t1"></div>
      <div class="triangle t2"></div>
      <div class="triangle t3"></div>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path={["/", "/home"]} component={Home}/>
            <Route exact path="/story" component={Story}/>
            <Route exact path="/characters" component={Characters}/>
            <Route exact path="/character" component={IndividualCharacter}/>
            <Route exact path="/contact" component={Contact}/>
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
