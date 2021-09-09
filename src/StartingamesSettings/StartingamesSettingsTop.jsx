import React, {Component} from 'react';

export class StartingamesSettingsComponent extends Component
{
    makeConfig()
    {
        let self = this;
        Object.keys(this.config).map(function(key) {                                                                //For each config entry
            if(self.props?.config) { if(self.props.config[key]) { self.config[key] = self.props.config[key]; } }    //Check if entry exist in props config. If exist => get it
            if(self.props[key]) { self.config[key] = self.props[key]; }                                             //Check if entry exist in props. If exist => get it
            return 0;
        })
    }
}