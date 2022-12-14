import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import App from './App';
import Mentions from './Mentions';


const Root = () => {
  return (
    <Router>
        <Switch>
          <Route exact path="/WebSite/" component={App} />
          <Route exact path="/WebSite/mentions" component={Mentions} />
        </Switch>
    </Router>
  )
}

ReactDOM.render(<Root />,document.querySelector('#page-top'));

