import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
/*IMPORTAR COMPONENTES*/ 
import Index from 'pages/Index';
import Manufacturing from 'pages/Manufacturing';


function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route path="/Manufacturing">
                    <Manufacturing/>
                </Route>
                <Route path='/'>
                    <Index/>
                </Route>
            </Switch>
        </Router>
       
    </div>
  );
}

export default App;
