import React, {Component} from 'react';
import styles from './StartingamesSettingsLinkBar.module.scss';

import { StartingamesSettingsComponent } from './StartingamesSettingsTop';

export default class StartingamesSettingsLinkBar extends StartingamesSettingsComponent
{
    constructor(props)
    {
        super(props);

        this.generate = this.generateItems.bind(this);
        this.items = [];
    }

    generateItems(childrens, currentPath = "", link = "")
    {
        //Get the current Path and format it
        if(currentPath[0]==="/") {currentPath=currentPath.substr(1);}

        //Get the currentPathOn (the first path element of the string) and the currentPathNext (the rest of the string)
        let index = currentPath.indexOf("/");
        let currentPathOn=currentPath;
        let currentPathNext="";
        if(index>-1)
        {
            currentPathOn=currentPath.substr(0, currentPath.indexOf("/"));
            currentPathNext=currentPath.substr(currentPath.indexOf("/"));
        }

        let self = this;

        React.Children.map(childrens, child => {
            if(child.type.prototype.pagefunction)   //TODO maybe a better solution
            {
                let compopath = child.props?.path;
                if(compopath===undefined) {compopath=""}
                if(compopath===currentPathOn)
                {
                    link = link +"/"+ compopath;
                    self.items.push({link: link, title: child.props.title});
                    self.generateItems(child.props.children, currentPathNext, link);
                }
            }
        })
    }

    render()
    {
        this.items = []; this.items.push({link: "", title: this.props.title});
        this.generateItems(this.props.children, this.props.path);

        return(
            <div className={styles['linkBar']}>
                <div className={styles['linkBarButton']} onClick={() => {this.goto(this.items[this.items.length-2].link);}}>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" role="img"  width="25px" viewBox="0 0 320 512"><path fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>
                </div>
                <div>
                    <div className={styles['linkBarL1']}>
                        {this.items.map((item, index) => {
                            if(index < this.items.length-1) {
                                return (<div onClick={() => {this.goto(item.link);}}>{item.title}</div>)
                            }
                        })}
                    </div>
                    <div className={styles['linkBarL2']}>
                        {this.items[this.items.length-1].title}
                    </div>
                </div>
            </div>
        );
    }
}