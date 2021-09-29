import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
/*IMPORTAR LAYOUTS*/
import Layout from 'layouts/Layout'
/*IMPORTAR COMPONENTES*/ 
import Index from 'pages/Index';
import Manufacturing from 'pages/Manufacturing';
import Packaging from 'pages/Packaging';
import Figma from 'pages/Figma'
import Delivery from 'pages/Delivery'


function App() {
  return (
    <div className="App">
        <Router>
        <Layout>
                <Switch>
                    <Route path="/Manufacturing">
                        <Manufacturing/>
                    </Route>
                    <Route path="/Packaging">
                        <Packaging/>
                    </Route>
                    <Route path="/Figma">
                        <Figma/>
                    </Route>
                    <Route path="/Delivery">
                        <Delivery/>
                    </Route>
                    <Route path='/'>
                        <Index/>
                    </Route>
                </Switch>
            </Layout>
        </Router>
       
    </div>
  );
}

export default App;
