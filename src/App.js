import './App.scss';

import { Component } from 'react';
import Settings from './Settings';
import history from 'history/browser'

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

      return(<Settings myHistory={history} path={this.state.path.substring(10)}></Settings>);
    }
};
