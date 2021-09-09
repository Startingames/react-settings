import React, {Component} from 'react';

import './App.scss';

import StartingamesSettings, { StartingamesSettingsPage, StartingamesSettingsSeparator } from './StartingamesSettings/StartingamesSettings';
import StartingamesSettingsSwitch from './StartingamesSettings/StartingamesSettingsSwitch';
import StartingamesSettingsSelect from './StartingamesSettings/StartingamesSettingsSelect';

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
        this.state={test: false};
    }

    render()
    {
        document.getElementById('reactloaded').value = 1;
        console.log("New Rendering....");

        return (
            <>
                <img src="/startingames.png" style={{height: "100px"}} />


                <StartingamesSettings path={this.props.path} route={this.props.route}>

                    <StartingamesSettingsSwitch value={this.state.test} callback={(state) => this.setState({test: state})} title="ON OFF switch" />

                    <StartingamesSettingsSeparator title="Autres" slug="slug autre" path="autre">1</StartingamesSettingsSeparator>

                    <StartingamesSettingsSelect title="test" values={[0,1]} display={["NO", "YES"]} value={1} />

                    <StartingamesSettingsSeparator title="Autres" slug="slug autre" path="autre">1</StartingamesSettingsSeparator>

                        <StartingamesSettingsPage title="Informations" slug="slug infopage" path="info">

                                <SettingsSub title="Sub" slug="slug subpage" path="sub" />
                            
                                <StartingamesSettingsSeparator slug="info">2</StartingamesSettingsSeparator>

                        </StartingamesSettingsPage>

                        <StartingamesSettingsPage title="Network" slug="slug infopage" path="network">

                                <SettingsSub title="Sub" slug="slug subpage" path="sub" />
                            
                                <StartingamesSettingsSeparator slug="info">2</StartingamesSettingsSeparator>

                        </StartingamesSettingsPage>

                </StartingamesSettings>

            </>
        );
    }
};
