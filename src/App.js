import './App.css';
import TournomnentPage from './container/TrounomentPage';
import { Route, BrowserRouter, Switch, Link } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/tournoment/' >
            <TournomnentPage />
          </Route>
          <Route path='/' exact component={() => <Link to='/tournoment/'>tournoment</Link>} />
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
