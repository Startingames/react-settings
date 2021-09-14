import React from 'react';
import styles from './StartingamesSettingsMenus.module.scss';

import { StartingamesSettingsComponent } from "./StartingamesSettingsTop";

export class StartingamesSettingsLMenuItem extends StartingamesSettingsComponent
{
    render()
    {
        let active=" ";
        if(this.props?.active)
        {
            active+=styles['active'];
        }

        return (
            <div className={styles['link']+active} onClick={() => {this.goto(this.props.link);}}>
                <div className={styles['content']}>
                    <div className={styles['logo']}><div><div>
                        <svg width="100%" height="100%" viewBox="0 0 60 55">
                            {this.props?.icon}
                        </svg>
                    </div></div></div>
                    <div className={styles['title']}>{this.props.title}</div>
                </div>
                <div className={styles['bar']}>

                </div>
            </div>
        );
    }
};

export class StartingamesSettingsBigMenu extends StartingamesSettingsComponent
{
    render()
    {
        return(
            <div className={styles['bigMenuContent']}>
                {React.Children.map(this.props.children, child => {
                    if(child.type.prototype.pagefunction)   //TODO maybe a better solution
                    {
                        let compopath = child.props?.path;
                        if(compopath===undefined) {compopath=""}
                        let link = "/"+ compopath;

                        return (
                            <div className={styles['bigMenuButtonWrapper']}>
                                <div className={styles['bigMenuButton']} onClick={() => {this.goto(link);}}>
                                
                                    <div className={styles['logo']}><div><div>
                                        <svg width="100%" height="100%" viewBox="0 0 60 55">
                                            {child.props?.icon}
                                        </svg>
                                    </div></div></div>
            
                                    <div className={styles['title']}>{child.props?.title}</div>
                                    <div className={styles['desc']}>{child.props?.desc}</div>
                                </div>
                            </div>
                        );
                    }
                })}
            </div>
        );
    }
}