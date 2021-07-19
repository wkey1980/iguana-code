// Global Styles
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import GlobalStyle from '../../styles/index'
import Navbar from '../Navbar/index'

import NotFound from '../../components/NotFound/NotFound'

// Import Pages
import About from '../../pages/About/About';
import Blog from '../../pages/Blog/Blog';
import Contact from '../../pages/Contact/Contact';
import Home from '../../pages/Home/Home';
import Portfolio from '../../pages/Portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <h1>App Hello World!</h1>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/blog">
            <Blog />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio />
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
