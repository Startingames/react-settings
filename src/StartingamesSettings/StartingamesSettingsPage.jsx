import React from "react";
import styles from './StartingamesSettingsPage.module.scss';

import { StartingamesSettingsComponent } from "./StartingamesSettingsTop";

export class StartingamesSettingsPageLink extends StartingamesSettingsComponent
{
    render()
    {
        return (
            <div className={styles['link']} onClick={() => {this.goto(this.props.link);}}>
                <div className={styles['content']}>
                    <div className={styles['logo']}><div><div>
                        <svg width="100%" height="100%" viewBox="0 0 60 55">
                            {this.props?.icon}
                        </svg>
                    </div></div></div>
                    <div className={styles['title']}>{this.props.title}</div>
                </div>
            </div>
        );
    }
};

export default class StartingamesSettingsPage extends StartingamesSettingsComponent
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
                            return (<StartingamesSettingsPageLink icon={child.props?.icon} genconf={this.genconf} link={link+"/"+child.props?.path} title={child.props?.title} />);
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