import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/search/:keywords" component={SearchResults}/>
      </Switch>
    </Router> 
  )
}

export default App;