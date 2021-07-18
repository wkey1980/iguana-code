// Global Styles
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import GlobalStyle from '../../styles/index'
import Navbar from '../Navbar/index'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <h1>App Hello World!</h1>
        <Navbar />
    </div>
  );
}

export default App;
