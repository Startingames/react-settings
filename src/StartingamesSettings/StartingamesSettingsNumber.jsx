import { StartingamesSettingsComponent } from "./StartingamesSettingsTop";

import styles from './StartingamesSettingsNumber.module.scss';

export default class StartingamesSettingsNumber extends StartingamesSettingsComponent
{
    constructor(props)
    {
        super(props);

        this.stateChanged = this.stateChanged.bind(this);

        this.config = {min: null, max: null, title:"Startingames Settings Number", callback: null, context: null};
    }

    stateChanged(newState)
    {
        if(newState<this.config.min && this.config.max) { return; }
        if(this.config.min && newState>this.config.max) { return; }
        if(this.config.callback!==null)
        {
            this.config.callback(newState, this.config?.context);
        }
    }

    render()
    {
        this.makeConfig();

        return (
            <>
                <div className={styles['number']}>
                    <p>{this.config.title}</p>
                    <div>
                        <input type="number" value={this.props?.value} onChange={event => this.stateChanged(event.target.value)} />
                    </div>
                </div>
            </>
        );
    }
};