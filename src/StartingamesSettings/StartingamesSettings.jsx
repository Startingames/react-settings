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

export class StartingamesSettingsPage extends Component
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

        //Render in display mode "link"
        if(this.props?.display==="link")
        {
            return (<StartingamesSettingsLink link={this.props.link} title={this.props.title} />);
        }

        //Render in display mode "infoBar"
        if(this.props?.display==="infoBar")
        {
            return(<><div onClick={() => {this.gotoInternal(this.props.link);}}>{this.props.title}</div>
                {React.Children.map(this.renderContent().props.children, child => {
                    if(child.type.prototype.pagefunction)   //TODO maybe a better solution
                    {
                        let compopath = child.props?.path;
                        if(compopath===undefined) {compopath=""}
                        if(compopath===currentPathOn)
                        {
                            return React.cloneElement(child, {display: "infoBar", currentPath: currentPathNext, link: (this.props.link+"/"+compopath)});
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
                            return React.cloneElement(child, {currentPath: currentPathNext, link: (this.props.link+"/"+compopath)});
                        }
                        else
                        {
                            return React.cloneElement(child, {display: "link", currentPath: currentPathNext, link: (this.props.link+"/"+compopath)});
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

export default class StartingamesSettings extends Component
{
    constructor(props)
    {
        super(props);
        this.gotoSection = this.gotoSection.bind(this);
    }

    gotoSection(section)
    {
        startingamesRouteManager.goto('/_settings/'+section);
    }

    gotoInternal(link)
    {
        startingamesRouteManager.goto('/_settings'+link);
    }

    render ()
    {
        let backpath = this.props.path;
        if(backpath[backpath.length-1]==="/") { backpath = backpath.substr(0, backpath.length-1); }
        let backpathIndex = backpath.lastIndexOf("/");
        backpath = backpath.substr(0, backpathIndex);

        return (
            <>
                <div className={styles['infoBar']}>
                    <button onClick={() => {this.gotoInternal(backpath);}}> 
                        <FontAwesomeIcon icon={["fas", "arrow-left"]} />
                    </button>
                    <div>
                        <StartingamesSettingsPage slug="slug infobar" link="" path="_settings" title="Settings" display="infoBar" currentPath={this.props.path}>{this.props.children}</StartingamesSettingsPage>
                    </div>
                </div>


                <div className={styles['main']}>

                    <div className={styles['page']} >
                        <StartingamesSettingsPage slug="slug content" link="" currentPath={this.props.path}>{this.props.children}</StartingamesSettingsPage>
                    </div>
                </div>
            </>
        );
    }
};
