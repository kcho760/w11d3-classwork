import { Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
function App() {
  return (
    <>
    <Navigation />
    <Switch>
      {/* <Route path="/samplesurvey">
        
      </Route>
      <Route path="/sensorypreferences">
        
      </Route>
      <Route path="/report">
        
      </Route> */}
      <Route path="/">
        <Home />
      </Route>
    </Switch>
    </>
  );
}

export default App;
