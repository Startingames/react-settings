/*  Copyright (C) Startingames
    React Settings lib
    http://redirect-from.startingames.fr/
*/


import React from 'react';
import styles from './StartingamesSettings.module.scss';

import { StartingamesSettingsComponent } from './StartingamesSettingsTop';
import StartingamesSettingsLinkBar from './StartingamesSettingsLinkBar';
import { StartingamesSettingsBigMenu, StartingamesSettingsLMenuItem } from './StartingamesSettingsMenus';
import StartingamesSettingsPage from './StartingamesSettingsPage';

export class StartingamesSettingsSeparator extends StartingamesSettingsComponent
{
    render()
    {
        return (
            <>
                <div  className={styles['separator']}></div>
            </>
        );
    }
};

export default class StartingamesSettings extends StartingamesSettingsComponent
{
    constructor(props)
    {
        super(props);

        this.config = {title:"Settings"};

        console.log("Startingames Settings - INFO : version 0.1.0");
    }

    render()
    {
        this.makeConfig();

        if(this.props.path==="")
        {
            return (<>
                <div className={styles['bigMenu']}>
                    <div className={styles['bigMenuTitle']}>
                        <div>{this.config.title}</div>
                    </div>

                    <div className={styles['bigMenuContentPC']}>
                        <StartingamesSettingsBigMenu genconf={this.genconf} >{this.props.children}</StartingamesSettingsBigMenu>
                    </div>

                    <div className={styles['bigMenuContentPhone']}>
                        {React.Children.map(this.props.children, child => {
                            if(child.type.prototype.pagefunction)   //TODO maybe a better solution
                            {
                                let compopath = child.props?.path;
                                if(compopath===undefined) {compopath=""}
                                let link = "/"+ compopath;
                                return (<StartingamesSettingsLMenuItem icon={child.props.icon} genconf={this.genconf} link={link} title={child.props.title} />);
                            }
                        })}
                    </div>
                </div>
            </>);
        }

        //Get the current Path and format it
        let currentPath = this.props.path;
        if(currentPath===undefined) {currentPath="";}
        if(currentPath[0]==="/") {currentPath=this.props.path.substr(1);}
        //Get the currentPathOn (the first path element of the string) and the currentPathNext (the rest of the string)
        let index = currentPath.indexOf("/");
        let currentPathOn=currentPath;
        if(index>-1)
        {
            currentPathOn=currentPath.substr(0, currentPath.indexOf("/"));
        }

        return (
            <>
                <div className={styles['main']}>
                    <div className={styles['menu']}><div className={styles['leftMenu']}><div>
                        {React.Children.map(this.props.children, child => {
                            if(child.type.prototype.pagefunction)   //TODO maybe a better solution
                            {
                                let compopath = child.props?.path;
                                if(compopath===undefined) {compopath=""}
                                let link = "/"+ compopath;
                                return (<StartingamesSettingsLMenuItem active={compopath===currentPathOn ? true : false} icon={child.props.icon} genconf={this.genconf} link={link} title={child.props.title} />);
                            }
                        })}
                    </div></div></div>

                    <div className={styles['page']} >
                        <StartingamesSettingsLinkBar genconf={this.genconf} path={this.props.path} title={this.config.title}>{this.props.children}</StartingamesSettingsLinkBar>

                        <div className={styles['pageContent']} >
                            <StartingamesSettingsPage genconf={this.genconf} link="" currentPath={this.props.path}>{this.props.children}</StartingamesSettingsPage>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};
