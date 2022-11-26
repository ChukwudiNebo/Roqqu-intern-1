import { Fragment} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Categories from './Components/Categories';
import LatestRelease from './Components/LatestRelease';
import Faqs from './pages/Faqs';
import Roqqu from './pages/Roqqu';

const App = () => {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path='/' exact element={<Roqqu />} />

          <Route path='/faqs' exact element={<Faqs />} >
            <Route path='categories' exact element={<Categories />} />
            <Route path='latest-releases' exact element={<LatestRelease />} />
          </Route>
        </Routes>
      </Router>
    </Fragment>
    
  );
}

export default App;
