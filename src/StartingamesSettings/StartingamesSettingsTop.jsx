import {Component} from 'react';

export class StartingamesSettingsComponent extends Component
{
    constructor(props)
    {
        super(props);
        this.goto = this.goto.bind(this);
        this.makeConfig = this.makeConfig.bind(this);
        this.config = {};

        this.genconf = this.props.genconf;
    }

    goto(link)
    {
        if(this.props?.genconf?.gotoCallback) { this.genconf.gotoCallback(link); }
        else { console.log("Startingames Settings - ALERT : You must set the gotoCallback function !"); }
    }

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