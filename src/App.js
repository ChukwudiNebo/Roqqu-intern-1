import { Fragment} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Categories from './Components/Categories';
import Faqs from './pages/Faqs';
import Roqqu from './pages/Roqqu';

const App = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path='/' exact component={Roqqu} />
          <Route path='/faqs' exact component={Faqs} />
            {/* <Route path='categories' exact element={Categories}/> */}
          {/* </Route> */}
        </Switch>
      </Router>
    </Fragment>
    
  );
}

export default App;
