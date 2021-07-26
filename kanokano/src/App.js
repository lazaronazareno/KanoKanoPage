import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import Layout from './Components/Layout';
import Home from './Components/Home/Home';
import Menu from './Components/MainMenu/Menu';
import Story from './Components/Story/Story';
import Characters from './Components/Characters/Characters';
import IndividualCharacter from './Components/Characters/IndividualCharacter';

function App() {
  return (
    <div className="App container-fluid d-flex justify-content-center align-items-center background ">
      <div class="triangle"></div>
      <div class="triangle t2"></div>
      <div class="triangle t3"></div>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path={["/", "/home"]} component={Home}/>
            <Route exact path="/menu" component={Menu}/>
            <Route exact path="/story" component={Story}/>
            <Route exact path="/characters" component={Characters}/>
            <Route exact path="/character" component={IndividualCharacter}/>
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
