import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {AddInputPage} from "../components/AddInputsPage"
import {ResultPage} from "../components/ResultPage"

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={AddInputPage} exact={true} />
        <Route path="/result" component={ResultPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;