import { StartingamesSettingsComponent } from "./StartingamesSettingsTop";

import styles from './StartingamesSettingsIPv4.module.scss';

export default class StartingamesSettingsIPv4 extends StartingamesSettingsComponent
{
    constructor(props)
    {
        super(props);

        this.ipChanged = this.ipChanged.bind(this);
        this.maskChanged = this.maskChanged.bind(this);

        this.config = {ip:null, mask:null, title:"Startingames Settings IPv4", callbackIp: null, contextIp: null, callbackMask: null, contextMask: null};
    }

    ipChanged(index, newIp)
    {
        if(newIp<0 || newIp>255) { return; }
        let ip = this.config.ip;
        ip[index]=newIp;
        if(this.config.callbackIp!==null)
        {
            this.config.callbackIp(ip, this.config?.contextIp);
        }
    }

    maskChanged(newMask)
    {
        if(newMask<0 || newMask>255) { return; }
        if(this.config.callbackMask!==null)
        {
            this.config.callbackMask(newMask, this.config?.contextMask);
        }
    }

    render()
    {
        this.makeConfig();

        return (
            <>
                <div className={styles['ipv4']}>
                    <p>{this.config.title}</p>
                    <div>

                        {this.config.ip!==null &&
                        <><input type="number" min="0" max="255" onChange={event => this.ipChanged(0, event.target.value)} value={this.config.ip[0]}></input>
                        .
                        <input type="number" min="0" max="255" onChange={event => this.ipChanged(1, event.target.value)} value={this.config.ip[1]}></input>
                        .
                        <input type="number" min="0" max="255" onChange={event => this.ipChanged(2, event.target.value)} value={this.config.ip[2]}></input>
                        .
                        <input type="number" min="0" max="255" onChange={event => this.ipChanged(3, event.target.value)} value={this.config.ip[3]}></input></>
                        }

                        {this.config.mask!==null &&
                        <>/
                        <input type="number" min="0" max="32" onChange={event => this.maskChanged(event.target.value)} value={this.config.mask}></input></>
                        }

                    </div>
                </div>
            </>
        );
    }
};