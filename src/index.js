import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import BaseLayout from './components/BaseLayout'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contacts from './components/Contacts'
import References from './components/References'


ReactDOM.render(
  <BrowserRouter>
  <BaseLayout>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route path="/Portfolio" component={Portfolio} />
      <Route path="/About" component={About} />
      <Route path ="/Home" component={Home}/>
      <Route path="/Contacts" component={Contacts} />
      <Route path="/References" component={References} />
    </Switch>
    </BaseLayout>
  </BrowserRouter>

,document.getElementById('root'));
registerServiceWorker();
