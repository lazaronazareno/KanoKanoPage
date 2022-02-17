import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.scss';
import Layout from './Components/Layout';
import Home from './Components/Home/Home';
import Story from './Components/Story/Story';
import Characters from './Components/Characters/Characters';
import IndividualCharacter from './Components/Characters/IndividualCharacter';
import Contact from './Components/Contact/Contact';
import Music from './Components/Music/Music';
import Player from './Components/MusicHook';

function App() {
  const show = useSelector(store => store.kanokano.show)

  return (
    <div className="App d-flex align-items-center background ">
      <div className="triangle t1"></div>
      <div className="triangle t2"></div>
      <div className="triangle t3"></div>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path={["/", "/home"]} component={Home}/>
            <Route exact path="/story" component={Story}/>
            <Route exact path="/characters" component={Characters}/>
            <Route exact path="/character" component={IndividualCharacter}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/music" component={Music}/>
          </Switch>
        </Layout>
      </BrowserRouter>
      {show && (
        <Player />
      )}
    </div>
  );
}

export default App;
