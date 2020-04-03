import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import Blogs from "./components/Blogs";
import NoMatch from "./components/NoMatch";
// import News from './components/News'
import BaseLayout from './components/layout/baseLayout'
import Forms from './components/Forms'
import LiftingState from "./components/liftingState";

import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'


ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Redirect from="/AboutUs" to="/" />
        <Route exact path="/" component={App} />
        <Route path="/AboutUs" component={AboutUs} />
        {/* <Route exact path="/News" component={News} /> */}
        {/* <Route path="/News/:BlogID" component={Blogs} /> */}
        <Route path="/ContactUs" component={ContactUs} />
        <Route exact path="/Blogs" component={Blogs} />
        <Route path="/Blogs/:BlogID" component={Blogs} />
        <Route path="/Forms" component={Forms} />
        <Route path="/LiftingState" component={LiftingState} />

        <Route component={NoMatch} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>,

  document.getElementById("root")
);
