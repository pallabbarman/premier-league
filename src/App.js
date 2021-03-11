import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NotFound from './components/NotFound/NotFound';
import TeamDetail from './components/TeamDetail/TeamDetail';
import Teams from './components/Teams/Teams';

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Teams />
                    </Route>
                    <Route path="/teams">
                        <Teams />
                    </Route>
                    <Route path="/team/:idTeam">
                        <TeamDetail />
                    </Route>
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
