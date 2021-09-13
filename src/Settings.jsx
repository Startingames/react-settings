import React, {Component} from 'react';

import './App.scss';

import StartingamesSettings, { StartingamesSettingsPage, StartingamesSettingsSeparator } from './StartingamesSettings/StartingamesSettings';
import StartingamesSettingsSwitch from './StartingamesSettings/StartingamesSettingsSwitch';
import StartingamesSettingsSelect from './StartingamesSettings/StartingamesSettingsSelect';
import StartingamesSettingsIPv4 from './StartingamesSettings/StartingamesSettingsIPv4';
import TestContextParent, { TestContextChild } from './TestContext';
import startingamesRouteManager from './startingames/startingamesRouteManager';

class SettingsSub extends StartingamesSettingsPage
{
    renderContent()
    {
        console.log("test title my : "+this.props.title);
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
        this.state={test: false, ip: [0,0,0,0], mask: 16};

        
    }

    gotoInternal(link)
    {
        startingamesRouteManager.goto("/_settings"+link);
    }

    render()
    {
        document.getElementById('reactloaded').value = 1;
        console.log("New Rendering....");

        return (
            <>

                <div style={{display: "flex", flexDirection: "column", height: "100%"}}>

                <div><img src="/startingames.png" style={{height: "100px", maxHeight: "20vh"}}/></div>




                <StartingamesSettings genconf={{gotoCallback: this.gotoInternal}} path={this.props.path} route={this.props.route} title="Parametres">

                    <StartingamesSettingsSwitch value={this.state.test} callback={(state) => this.setState({test: state})} title="ON OFF switch" />

                    <StartingamesSettingsSeparator title="Autres" slug="slug autre" path="autre">1</StartingamesSettingsSeparator>

                    <StartingamesSettingsSelect title="test" values={[0,1]} display={["NO", "YES"]} value={1} />


                    <StartingamesSettingsSeparator title="Autres" slug="slug autre" path="autre">1</StartingamesSettingsSeparator>

                        <StartingamesSettingsPage title="System" desc="My amazing description" slug="slug infopage" path="info">

                                <SettingsSub title="Sub" slug="slug subpage" path="sub" />
                            
                                <StartingamesSettingsSeparator slug="info">2</StartingamesSettingsSeparator>


                                


                                <StartingamesSettingsIPv4 ip={this.state.ip} mask={this.state.mask} callbackIp={(state) => this.setState({ip: state})} callbackMask={(state) => this.setState({mask: state})} />

                        </StartingamesSettingsPage>

                        <StartingamesSettingsPage title="Devices" slug="slug infopage" path="devices"></StartingamesSettingsPage>

                        <StartingamesSettingsPage title="Network & Internet" slug="slug infopage" path="network">

                                <SettingsSub title="Sub" slug="slug subpage" path="sub" />
                            
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

                        <StartingamesSettingsPage title="Accounts" slug="slug infopage" path="accounts"></StartingamesSettingsPage>
                        <StartingamesSettingsPage title="Update & Saves" slug="slug infopage" path="update-saves"></StartingamesSettingsPage>
                </StartingamesSettings>

                </div>
            </>
        );
    }
};
