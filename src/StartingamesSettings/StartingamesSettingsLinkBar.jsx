import React, {Component} from 'react';
import styles from './StartingamesSettingsLinkBar.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { StartingamesSettingsComponent } from './StartingamesSettingsTop';
library.add(fas);

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
                    <FontAwesomeIcon icon={["fas", "chevron-left"]} />
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