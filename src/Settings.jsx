import React, {Component} from 'react';

import './App.scss';

import StartingamesSettings, { StartingamesSettingsSeparator } from './StartingamesSettings/StartingamesSettings';
import StartingamesSettingsPage from './StartingamesSettings/StartingamesSettingsPage';
import StartingamesSettingsSwitch from './StartingamesSettings/StartingamesSettingsSwitch';
import StartingamesSettingsSelect from './StartingamesSettings/StartingamesSettingsSelect';
import StartingamesSettingsIPv4 from './StartingamesSettings/StartingamesSettingsIPv4';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas);

class SettingsSub extends StartingamesSettingsPage
{
    renderContent()
    {
        return (
            <>
                <StartingamesSettingsSeparator slug="sub" >3</StartingamesSettingsSeparator>
            </>
        );
    }
};

export default class Settings extends Component
{
    constructor(props)
    {
        super(props);
        this.gotoInternal= this.gotoInternal.bind(this);

        this.state={test: false,
            ip: [0,0,0,0], mask: 16,
            gestUser: true,
            autoUpdate: false,
            updateChannel: 1};
        
    }

    gotoInternal(link)
    {
        this.props.myHistory.push("/_settings"+link);
    }

    render()
    {
        document.getElementById('reactloaded').value = 1;

        return (
            <div style={{display: "flex", flexDirection: "column", height: "100%"}}>
                <div style={{margin:"auto"}} ><img src="/startingames.png" alt="Startingames" style={{height: "100px", maxHeight: "20vh"}}/></div>

                <StartingamesSettings genconf={{gotoCallback: this.gotoInternal}} path={this.props.path} title="Settings">

                    <StartingamesSettingsSeparator title="Autres" path="autre">1</StartingamesSettingsSeparator>

                        <StartingamesSettingsPage icon= {(<FontAwesomeIcon icon={["fas", "cog"]} />)} title="System" slug="slug infopage" path="info">

                                <SettingsSub icon= {(<FontAwesomeIcon icon={["fas", "cog"]} />)} title="Sub" slug="slug subpage" path="sub" />
                            
                                <StartingamesSettingsSeparator slug="info">2</StartingamesSettingsSeparator>


                        </StartingamesSettingsPage>

                        <StartingamesSettingsPage icon={(<image xlinkHref="/startingames-logo.png" width="100%" height="100%" />)} title="About" desc="About Startingames React Settings" path="devices"></StartingamesSettingsPage>

                        <StartingamesSettingsPage icon={(<FontAwesomeIcon icon={["fas", "network-wired"]} />)} title="Network & Internet" desc="Network Settings Exemple" path="network">

                                <SettingsSub title="Sub" slug="slug subpage" path="sub" />

                                <StartingamesSettingsIPv4 ip={this.state.ip} mask={this.state.mask} callbackIp={(state) => this.setState({ip: state})} callbackMask={(state) => this.setState({mask: state})} />
                            
                                <StartingamesSettingsSeparator slug="info">2</StartingamesSettingsSeparator>

                                <StartingamesSettingsSeparator slug="info">2</StartingamesSettingsSeparator>

                                <StartingamesSettingsSwitch value={this.state.test} callback={(state) => this.setState({test: state})} title="ON OFF switch 1" />
                                <StartingamesSettingsSwitch value={this.state.test} callback={(state) => this.setState({test: state})} title="ON OFF switch 2" />
                                <StartingamesSettingsSwitch value={this.state.test} callback={(state) => this.setState({test: state})} title="ON OFF switch 3" />
                                <StartingamesSettingsSwitch value={this.state.test} callback={(state) => this.setState({test: state})} title="ON OFF switch 4" />
                                <StartingamesSettingsSwitch value={this.state.test} callback={(state) => this.setState({test: state})} title="ON OFF switch 5" />
                                <StartingamesSettingsSwitch value={this.state.test} callback={(state) => this.setState({test: state})} title="ON OFF switch 6" />
                                <StartingamesSettingsSwitch value={this.state.test} callback={(state) => this.setState({test: state})} title="ON OFF switch 7" />
                                <StartingamesSettingsSwitch value={this.state.test} callback={(state) => this.setState({test: state})} title="ON OFF switch 8" />
                                <StartingamesSettingsSwitch value={this.state.test} callback={(state) => this.setState({test: state})} title="ON OFF switch 9" />
                                <StartingamesSettingsSwitch value={this.state.test} callback={(state) => this.setState({test: state})} title="ON OFF switch 10" />
                                <StartingamesSettingsSwitch value={this.state.test} callback={(state) => this.setState({test: state})} title="ON OFF switch 11" />
                                <StartingamesSettingsSwitch value={this.state.test} callback={(state) => this.setState({test: state})} title="ON OFF switch 12" />
                                <StartingamesSettingsSwitch value={this.state.test} callback={(state) => this.setState({test: state})} title="ON OFF switch 13" />
                                <StartingamesSettingsSwitch value={this.state.test} callback={(state) => this.setState({test: state})} title="ON OFF switch 14" />
                                <StartingamesSettingsSwitch value={this.state.test} callback={(state) => this.setState({test: state})} title="ON OFF switch 15" />
                                <StartingamesSettingsSwitch value={this.state.test} callback={(state) => this.setState({test: state})} title="ON OFF switch 16" />
                                <StartingamesSettingsSwitch value={this.state.test} callback={(state) => this.setState({test: state})} title="ON OFF switch 17" />
                                <StartingamesSettingsSwitch value={this.state.test} callback={(state) => this.setState({test: state})} title="ON OFF switch 18" />
                                <StartingamesSettingsSwitch value={this.state.test} callback={(state) => this.setState({test: state})} title="ON OFF switch 19" />

                        </StartingamesSettingsPage>

                        <StartingamesSettingsPage icon={(<FontAwesomeIcon icon={["fas", "user"]} />)} title="Accounts" path="accounts">
                            <StartingamesSettingsSwitch title="Allow Guest users" value={this.state.gestUser} callback={(state) => this.setState({gestUser: state})} />
                        </StartingamesSettingsPage>

                        <StartingamesSettingsPage icon={(<FontAwesomeIcon icon={["fas", "sync-alt"]} />)} title="Update & Saves" path="update-saves">
                            <StartingamesSettingsSwitch title="Auto update" value={this.state.autoUpdate} callback={(state) => this.setState({autoUpdate: state})} />
                            <StartingamesSettingsSelect title="Update Channel" values={[0,1]} display={["Production ready", "Developpement"]} value={this.state.updateChannel} callback={(state) => this.setState({updateChannel: state})}/>
                        </StartingamesSettingsPage>

                </StartingamesSettings>

                <div style={{margin:"auto"}} >© Startingames - React Settings Demo</div>
            </div>
        );
    }
};
