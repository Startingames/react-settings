import './App.scss';

import { Component } from 'react';
import startingamesRouteManager  from './startingames/startingamesRouteManager';
import Settings from './Settings';
import history from 'history/browser'

startingamesRouteManager.init(history);

export class AppComponent extends Component
{
    constructor(props)
    {
      super(props);
      this.state = {path: "/"};
      this.historyUpdate = this.historyUpdate.bind(this);
    }

    historyUpdate({action, location}) {
      this.setState({path: history.location.pathname});
    }

    render ()
    {
      document.getElementById('reactloaded').value = 1;
      history.listen(this.historyUpdate);

      console.log({"Rendering route " : this.state.path});
      let routesplit = this.state.path.split('/');
      routesplit.shift(); //Remove the first element (useless)

      return(<Settings path={this.state.path.substring(10)} route={routesplit}></Settings>);
    }
};
