import { Fragment} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Roqqu from './pages/Roqqu';

const App = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
            <Route path='/' exact component={Roqqu} />
        </Switch>
      </Router>
    </Fragment>
    
  );
}

export default App;
