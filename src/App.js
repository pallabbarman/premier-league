import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import TeamDetail from './components/TeamDetail/TeamDetail';
import Teams from './components/Teams/Teams';

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Teams />
                </Route>
                <Route path="/team/:idTeam">
                    <TeamDetail />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
