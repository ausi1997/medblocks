import './App.css';

import { BrowserRouter as Router , Route } from 'react-router-dom';

import Home from "./components/home/home";
import Register from "./components/registration/register";
import Upload from './components/upload/upload';

function App() {
  return (
    <div className="App">
    <Router>
    <Route exact path='/' component={Home}></Route>
    <Route path='/register' component={Register}></Route>
    <Route path='/upload' component={Upload}></Route>
    </Router>
    </div>
  );
}

export default App;
