import { StartingamesSettingsComponent } from "./StartingamesSettingsTop";

import styles from './StartingamesSettingsText.module.scss';

export default class StartingamesSettingsText extends StartingamesSettingsComponent
{
    constructor(props)
    {
        super(props);

        this.stateChanged = this.stateChanged.bind(this);

        this.config = {password: false, title:"Startingames Settings Text", callback: null, context: null};
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

        return (
            <>
                <div className={styles['text']}>
                    <p>{this.config.title}</p>
                    <div>
                        <input type={this.config.password ? "password" : "text"} value={this.props?.value} onChange={event => this.stateChanged(event.target.value)} />
                    </div>
                </div>
            </>
        );
    }
};