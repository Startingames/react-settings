import { StartingamesSettingsComponent } from "./StartingamesSettingsTop";

import styles from './StartingamesSettingsSelect.module.scss';

export default class StartingamesSettingsSelect extends StartingamesSettingsComponent
{
    constructor(props)
    {
        super(props);

        this.stateChanged = this.stateChanged.bind(this);
        this.makeConfig = this.makeConfig.bind(this);

        this.config = {values:[], display:[], title:"Startingames Settings Select", callback: null, context: null};
    }

    stateChanged(newState)
    {
        if(this.config.callback!==null)
        {
            this.config.callback(newState, this.config?.context);
        }
    }

    render()
    {
        this.makeConfig();

        let self = this;

        return (
            <>
                <div className={styles['select']}>
                    <p>{this.config.title}</p>
                    <div>

                        <select className={styles['selectSelect']} type="select" onChange={event => this.stateChanged(event.target.value)} >
                            {this.config.values.map(function(key, index) {
                                if(key===self.props.value)
                                {
                                    return ( <option value={self.config.values[index]} selected >{self.config.display[index]}</option> );
                                }
                                return ( <option value={self.config.values[index]}>{self.config.display[index]}</option> );
                            })}
                        </select>

                    </div>
                </div>
            </>
        );
    }
};