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

import { StartingamesSettingsComponent } from './StartingamesSettingsTop';
import StartingamesSettingsLinkBar from './StartingamesSettingsLinkBar';
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
    render()
    {
        return (
            <>
                <div className={styles['link']} onClick={() => {this.goto(this.props.link);}}>
                    <div className={styles['content']}>
                        <div className={styles['logo']}>

                                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                            viewBox="0 0 491.52 491.52">
                                        <g>
                                            <g>
                                                <path d="M491.52,285.15v-78.78l-57.55-9.6c-4.49-17.3-11.375-33.86-20.525-49.41l33.95-47.53l-55.715-55.7l-47.53,33.95
                                                    c-15.545-9.16-32.11-16.04-49.405-20.53L285.155,0h-78.79l-9.59,57.55c-17.295,4.49-33.86,11.37-49.405,20.53L99.84,44.13
                                                    l-55.715,55.7l33.95,47.53c-9.15,15.55-16.035,32.11-20.525,49.41L0,206.37v78.78l57.55,9.6c4.49,17.3,11.375,33.86,20.525,49.41
                                                    l-33.95,47.53l55.715,55.7l47.53-33.95c15.545,9.16,32.11,16.04,49.405,20.53l9.59,57.55h78.79l9.59-57.55
                                                    c17.295-4.49,33.86-11.37,49.405-20.53l47.53,33.95l55.715-55.7l-33.95-47.53c9.15-15.55,16.035-32.11,20.525-49.41L491.52,285.15
                                                    z M415.6,283.55c-4.35,19.65-12.11,38.34-23.065,55.54l-3.715,5.83l31.825,44.55l-31.175,31.18l-44.56-31.83l-5.825,3.71
                                                    c-17.205,10.96-35.89,18.72-55.54,23.07l-6.75,1.5l-8.99,53.94h-44.09l-8.99-53.94l-6.75-1.5
                                                    c-19.65-4.35-38.335-12.11-55.54-23.07l-5.825-3.71l-44.56,31.83l-31.175-31.18l31.825-44.55l-3.715-5.83
                                                    C88.03,321.89,80.27,303.2,75.92,283.55l-1.495-6.75l-53.945-8.99v-44.1l53.945-8.99l1.495-6.75
                                                    c4.35-19.65,12.11-38.34,23.065-55.54l3.715-5.83l-31.825-44.55l31.175-31.18l44.56,31.83l5.825-3.71
                                                    c17.205-10.96,35.89-18.72,55.54-23.07l6.75-1.5l8.99-53.94h44.09l8.99,53.94l6.75,1.5c19.65,4.35,38.335,12.11,55.54,23.07
                                                    l5.825,3.71l44.56-31.83l31.175,31.18L388.82,146.6l3.715,5.83c10.955,17.2,18.715,35.89,23.065,55.54l1.495,6.75l53.945,8.99
                                                    v44.1l-53.945,8.99L415.6,283.55z"/>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path d="M245.76,143.36c-56.465,0-102.4,45.94-102.4,102.4s45.935,102.4,102.4,102.4s102.4-45.94,102.4-102.4
                                                    S302.225,143.36,245.76,143.36z M245.76,327.68c-45.17,0-81.92-36.75-81.92-81.92s36.75-81.92,81.92-81.92
                                                    s81.92,36.75,81.92,81.92S290.93,327.68,245.76,327.68z"/>
                                            </g>
                                        </g>
                                </svg>

                        </div>
                        <div className={styles['title']}>{this.props.title}</div>
                    </div>
                    <div className={styles['bar']}>

                    </div>
                </div>
            </>
        );
    }
};

export class StartingamesSettingsPage extends StartingamesSettingsComponent
{
    pagefunction() { return true; }

    render()
    {
        let self = this;
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
                <div className={styles['bigMenuButtonWrapper']}>
                    <div className={styles['bigMenuButton']} onClick={() => {this.goto(link);}}>
                    
                        <div className={styles['logo']}>

                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                    viewBox="0 0 491.52 491.52">
                                <g>
                                    <g>
                                        <path d="M491.52,285.15v-78.78l-57.55-9.6c-4.49-17.3-11.375-33.86-20.525-49.41l33.95-47.53l-55.715-55.7l-47.53,33.95
                                            c-15.545-9.16-32.11-16.04-49.405-20.53L285.155,0h-78.79l-9.59,57.55c-17.295,4.49-33.86,11.37-49.405,20.53L99.84,44.13
                                            l-55.715,55.7l33.95,47.53c-9.15,15.55-16.035,32.11-20.525,49.41L0,206.37v78.78l57.55,9.6c4.49,17.3,11.375,33.86,20.525,49.41
                                            l-33.95,47.53l55.715,55.7l47.53-33.95c15.545,9.16,32.11,16.04,49.405,20.53l9.59,57.55h78.79l9.59-57.55
                                            c17.295-4.49,33.86-11.37,49.405-20.53l47.53,33.95l55.715-55.7l-33.95-47.53c9.15-15.55,16.035-32.11,20.525-49.41L491.52,285.15
                                            z M415.6,283.55c-4.35,19.65-12.11,38.34-23.065,55.54l-3.715,5.83l31.825,44.55l-31.175,31.18l-44.56-31.83l-5.825,3.71
                                            c-17.205,10.96-35.89,18.72-55.54,23.07l-6.75,1.5l-8.99,53.94h-44.09l-8.99-53.94l-6.75-1.5
                                            c-19.65-4.35-38.335-12.11-55.54-23.07l-5.825-3.71l-44.56,31.83l-31.175-31.18l31.825-44.55l-3.715-5.83
                                            C88.03,321.89,80.27,303.2,75.92,283.55l-1.495-6.75l-53.945-8.99v-44.1l53.945-8.99l1.495-6.75
                                            c4.35-19.65,12.11-38.34,23.065-55.54l3.715-5.83l-31.825-44.55l31.175-31.18l44.56,31.83l5.825-3.71
                                            c17.205-10.96,35.89-18.72,55.54-23.07l6.75-1.5l8.99-53.94h44.09l8.99,53.94l6.75,1.5c19.65,4.35,38.335,12.11,55.54,23.07
                                            l5.825,3.71l44.56-31.83l31.175,31.18L388.82,146.6l3.715,5.83c10.955,17.2,18.715,35.89,23.065,55.54l1.495,6.75l53.945,8.99
                                            v44.1l-53.945,8.99L415.6,283.55z"/>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path d="M245.76,143.36c-56.465,0-102.4,45.94-102.4,102.4s45.935,102.4,102.4,102.4s102.4-45.94,102.4-102.4
                                            S302.225,143.36,245.76,143.36z M245.76,327.68c-45.17,0-81.92-36.75-81.92-81.92s36.75-81.92,81.92-81.92
                                            s81.92,36.75,81.92,81.92S290.93,327.68,245.76,327.68z"/>
                                    </g>
                                </g>
                            </svg>

                        </div>

                        <div className={styles['title']}>{this.props.title}</div>
                        <div className={styles['desc']}>{this.props.desc}</div>
                    </div>
                </div>
            );
        }

        //Render in display mode "link"
        if(this.props?.display==="link")
        {
            return (<StartingamesSettingsLink genconf={this.genconf} link={link} title={this.props.title} />);
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
                            return React.cloneElement(child, {genconf: self.genconf, currentPath: currentPathNext, link: link});
                        }
                        else if(""===currentPathOn)
                        {
                            return React.cloneElement(child, {genconf: self.genconf, display: "link", currentPath: currentPathNext, link: link});
                        }
                    }
                    else
                    {
                        if("" === currentPathOn)
                        {
                            return React.cloneElement(child, {genconf: self.genconf, currentPath: currentPathNext});
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

                    <div className={styles['bigMenuContent']}>
                        {React.Children.map(this.props.children, child => {
                            if(child.type.prototype.pagefunction)   //TODO maybe a better solution
                            {
                                return React.cloneElement(child, {genconf: this.genconf, display: "bigMenu", currentPath: "", link: ("")});
                            }
                        })}
                    </div>

                    <div className={styles['bigMenuContentPhone']}>
                        {React.Children.map(this.props.children, child => {
                            if(child.type.prototype.pagefunction)   //TODO maybe a better solution
                            {
                                return React.cloneElement(child, {genconf: this.genconf, display: "link", currentPath: "", link: ""});
                            }
                        })}
                    </div>
                </div>
            </>);
        }

        return (
            <>
                <div className={styles['main']}>
                    <div className={styles['menu']}><div><div>
                        {React.Children.map(this.props.children, child => {
                            if(child.type.prototype.pagefunction)   //TODO maybe a better solution
                            {
                                return React.cloneElement(child, {genconf: this.genconf, display: "link", currentPath: "", link: ""});
                            }
                        })}
                    </div></div></div>

                    <div className={styles['page']} >
                        <StartingamesSettingsLinkBar genconf={this.genconf} path={this.props.path} title={this.props.title}>{this.props.children}</StartingamesSettingsLinkBar>

                        <div className={styles['pageContent']} >
                            <StartingamesSettingsPage genconf={this.genconf} link="" currentPath={this.props.path}>{this.props.children}</StartingamesSettingsPage>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};
