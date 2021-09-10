/*  Copyright (C) Startingames
    React Settings lib
    http://redirect-from.startingames.fr/
*/


import React, {Component} from 'react';
import styles from './StartingamesSettings.module.scss';

import '../App.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import startingamesRouteManager from '../startingames/startingamesRouteManager';
import { StartingamesSettingsComponent } from './StartingamesSettingsTop';
library.add(fas);

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

export class StartingamesSettingsLink extends StartingamesSettingsComponent
{
    gotoInternal(link)
    {
        startingamesRouteManager.goto('/_settings'+link);
    }

    render()
    {
        return (
            <>
                <div className={styles['link']} onClick={() => {this.gotoInternal(this.props.link);}}>
                    <p>{this.props.title}</p>
                    <div><FontAwesomeIcon icon={["fas", "angle-right"]} /></div>
                </div>
            </>
        );
    }
};

export class StartingamesSettingsPage extends StartingamesSettingsComponent
{
    pagefunction() { return true; }

    gotoInternal(link)
    {
        startingamesRouteManager.goto('/_settings'+link);
    }

    render()
    {
        //Get the current Path and format it
        let currentPath = this.props.currentPath;
        if(currentPath===undefined) {currentPath="";}
        if(currentPath[0]==="/") {currentPath=this.props.currentPath.substr(1);}

        //Get the currentPathOn (the first path element of the string) and the currentPathNext (the rest of the string)
        let index = currentPath.indexOf("/");
        let currentPathOn=currentPath;
        let currentPathNext="";
        if(index>-1)
        {
            currentPathOn=currentPath.substr(0, currentPath.indexOf("/"));
            currentPathNext=currentPath.substr(currentPath.indexOf("/"));
        }

        //Generating current link
        let link = this.props.link;
        if(this.props?.path) { link = link +"/"+ this.props.path; }

        //Render in display mode "bigMEnu"
        if(this.props?.display==="bigMenu")
        {
            return (
                <>
                    <div onClick={() => {this.gotoInternal(link);}}>
                        <p>{this.props.title}</p>
                    </div>
                </>
            );
        }

        //Render in display mode "link"
        if(this.props?.display==="link")
        {
            return (<StartingamesSettingsLink link={link} title={this.props.title} />);
        }

        //Render in display mode "infoBar"
        if(this.props?.display==="infoBar")
        {
            return(<><div onClick={() => {this.gotoInternal(link);}}>{this.props.title}</div>
                {React.Children.map(this.renderContent().props.children, child => {
                    if(child.type.prototype.pagefunction)   //TODO maybe a better solution
                    {
                        let compopath = child.props?.path;
                        if(compopath===undefined) {compopath=""}
                        if(compopath===currentPathOn)
                        {
                            return React.cloneElement(child, {display: "infoBar", currentPath: currentPathNext, link: link});
                        }
                    }
                })}
                </>
                );
        }

        //Render in display mode "Content" (Normal mode)
        return(
            <>
                {React.Children.map(this.renderContent().props.children, child => {
                    if(child.type.prototype.pagefunction)   //TODO maybe a better solution
                    {
                        let compopath = child.props?.path;
                        if(compopath===undefined) {compopath=""}
                        if(compopath===currentPathOn)
                        {
                            return React.cloneElement(child, {currentPath: currentPathNext, link: link});
                        }
                        else if(""===currentPathOn)
                        {
                            return React.cloneElement(child, {display: "link", currentPath: currentPathNext, link: link});
                        }
                    }
                    else
                    {
                        if(""===currentPathOn)
                        {
                            return React.cloneElement(child, {currentPath: currentPathNext});
                        }
                    }
                })}
            </>
        );
    }

    //Content Rendering Function for Customer Page Class
    renderContent()
    {
        return (<>{this.props.children}</>);
    }
};

export default class StartingamesSettings extends StartingamesSettingsComponent
{
    constructor(props)
    {
        super(props);

        this.config = {title:"Settings"};
    }

    gotoInternal(link)
    {
        startingamesRouteManager.goto('/_settings'+link);
    }

    render()
    {
        this.makeConfig();

        let backpath = this.props.path;
        if(backpath[backpath.length-1]==="/") { backpath = backpath.substr(0, backpath.length-1); }
        let backpathIndex = backpath.lastIndexOf("/");
        backpath = backpath.substr(0, backpathIndex);

        if(this.props.path==="")
        {
            return (<>
                <div className={styles['bigMenu']}>
                    <div className={styles['bigMenuTitle']}>
                        <div>{this.config.title}</div>
                    </div>

                    <div className={styles['bigMenuContent']}>
                        {React.Children.map(this.props.children, child => {
                            if(child.type.prototype.pagefunction)   //TODO maybe a better solution
                            {
                                return React.cloneElement(child, {display: "bigMenu", currentPath: "", link: ("")});
                            }
                        })}
                    </div>
                </div>
            </>);
        }

        return (
            <>
                <div className={styles['main']}>
                    <div className={styles['menu']}>

                        {React.Children.map(this.props.children, child => {
                            if(child.type.prototype.pagefunction)   //TODO maybe a better solution
                            {
                                return React.cloneElement(child, {display: "link", currentPath: "", link: ""});
                            }
                        })}

                    </div>

                    <div className={styles['page']} >

                        <div className={styles['infoBar']}>
                            <button onClick={() => {this.gotoInternal(backpath);}}>
                                <FontAwesomeIcon icon={["fas", "chevron-left"]} />
                            </button>
                            <div>
                                <div className={styles['infoBarL1']}>
                                    <StartingamesSettingsPage link="" title={this.config.title} display="infoBar" currentPath={this.props.path}>{this.props.children}</StartingamesSettingsPage>
                                </div>
                                <div className={styles['infoBarL2']}>
                                    <StartingamesSettingsPage link="" title={this.config.title} display="infoBar" currentPath={this.props.path}>{this.props.children}</StartingamesSettingsPage>
                                </div>
                            </div>
                            
                        </div>

                        <div className={styles['pageContent']} >
                            <StartingamesSettingsPage link="" currentPath={this.props.path}>{this.props.children}</StartingamesSettingsPage>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};
