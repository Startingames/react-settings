import React, {Component} from 'react';

import './App.scss';

import StartingamesSettings, { StartingamesSettingsSeparator } from './StartingamesSettings/StartingamesSettings';
import StartingamesSettingsPage, { StartingamesSettingsPageLink } from './StartingamesSettings/StartingamesSettingsPage';
import StartingamesSettingsSwitch from './StartingamesSettings/StartingamesSettingsSwitch';
import StartingamesSettingsSelect from './StartingamesSettings/StartingamesSettingsSelect';
import StartingamesSettingsIPv4 from './StartingamesSettings/StartingamesSettingsIPv4';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import StartingamesSettingsNumber from './StartingamesSettings/StartingamesSettingsNumber';
import StartingamesSettingsText from './StartingamesSettings/StartingamesSettingsText';
import StartingamesSettingsInfo from './StartingamesSettings/StartingamesSettingsInfo';

library.add(fas);

class SettingsSub extends StartingamesSettingsPage
{
    constructor(props)
    {
        super(props);

        this.state={
            ip: [192,168,1,2], mask: 24,
            gateway: [192,168,1,1]};
        
    }

    renderContent()
    {
        return (
            <>
                <StartingamesSettingsIPv4 title="IP address and mask" ip={this.state.ip} mask={this.state.mask} callbackIp={(state) => this.setState({ip: state})} callbackMask={(state) => this.setState({mask: state})} />
                <StartingamesSettingsIPv4 title="Gateway" ip={this.state.gateway} callbackIp={(state) => this.setState({gateway: state})} />
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

        this.state={
            demoSw: false,
            demoSelect: 0,
            demoNumber: 0,
            demoText: "UserName",
            demoText2: "Password",
            
            test: false,
            ip: [192,168,1,2], mask: 24,
            gateway: [192,168,1,1],
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
                <div style={{margin:"auto"}} >
                    <a className="flex flex-none" target="_blank" rel="noopener noreferrer" href="http://startingames.fr" style={{height: "100px", maxHeight: "20vh"}}>
                    <img src="/startingames.png" alt="Startingames" style={{height: "100px", maxHeight: "20vh"}}/>
                    </a>
                    </div>

                <StartingamesSettings genconf={{gotoCallback: this.gotoInternal}} path={this.props.path} title="Settings">

                    <StartingamesSettingsSeparator title="Autres" path="autre">1</StartingamesSettingsSeparator>

                        <StartingamesSettingsPage icon= {(<FontAwesomeIcon icon={["fas", "cog"]} />)} title="System" path="system">
                            <StartingamesSettingsPage icon= {(<FontAwesomeIcon icon={["fas", "cog"]} />)} title="SubMenu 1" path="sub1" >
                                <StartingamesSettingsPage icon= {(<FontAwesomeIcon icon={["fas", "cog"]} />)} title="Sub SubMenu" path="sub" />
                            </StartingamesSettingsPage>
                            <StartingamesSettingsPage icon= {(<FontAwesomeIcon icon={["fas", "cog"]} />)} title="SubMenu 2" path="sub2" />
                            <StartingamesSettingsPage icon= {(<FontAwesomeIcon icon={["fas", "cog"]} />)} title="SubMenu 3" path="sub3" />

                            <StartingamesSettingsSeparator />

                            <StartingamesSettingsInfo value="Some Info" />
                            <StartingamesSettingsSwitch value={this.state.demoSw} callback={(state) => this.setState({demoSw: state})} />
                            <StartingamesSettingsSelect values={[0,1,2]} display={["OPTION 1", "OPTION 2", "OPTION n"]} value={this.state.demoSelect} callback={(state) => this.setState({demoSelect: state})}/>
                            <StartingamesSettingsNumber value={this.state.demoNumber} callback={(state) => this.setState({demoNumber: state})} />
                            <StartingamesSettingsText value={this.state.demoText} callback={(state) => this.setState({demoText: state})} />
                            <StartingamesSettingsText password value={this.state.demoText2} callback={(state) => this.setState({demoText2: state})} title="Text in password mode" />

                            <StartingamesSettingsPageLink title="Goto Network demo" link="network"icon={(<FontAwesomeIcon icon={["fas", "network-wired"]} />)} />

                        </StartingamesSettingsPage>

                        <StartingamesSettingsPage icon={(<image xlinkHref="/startingames-logo.png" width="100%" height="100%" />)} title="About" desc="About Startingames React Settings" path="about">
                            <StartingamesSettingsInfo title="Version" value="0.1.0 - BETA" />
                        </StartingamesSettingsPage>



                        <SettingsSub icon={(<FontAwesomeIcon icon={["fas", "network-wired"]} />)} title="Network & Internet" desc="Network Settings Exemple" path="network" />

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
