import { StartingamesSettingsComponent } from "./StartingamesSettingsTop";

import styles from './StartingamesSettingsSwitch.module.scss';

export default class StartingamesSettingsSwitch extends StartingamesSettingsComponent
{
    constructor(props)
    {
        super(props);

        this.stateChanged = this.stateChanged.bind(this);
        this.makeConfig = this.makeConfig.bind(this);

        this.config = {values:[false,true], title:"Startingames Settings Switch", callback: null, context: null};
    }

    stateChanged(newState)
    {
        let state = this.config.values[0];
        if(newState) { state = this.config.values[1]; }

        if(this.config.callback!==null)
        {
            this.config.callback(state, this.config?.context);
        }
    }

    render()
    {
        this.makeConfig();

        return (
            <>
                <div className={styles['switch']}>
                    <p>{this.config.title}</p>
                    <div>
                        <label className={styles['button']}>
                            <input type="checkbox" checked={(this.props?.value===this.config.values[1])} onChange={event => this.stateChanged(event.target.checked)} />
                            <span className={styles['slider']+" "+styles['round']}></span>
                        </label>
                    </div>
                </div>
            </>
        );
    }
};