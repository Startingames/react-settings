import { StartingamesSettingsComponent } from "./StartingamesSettingsTop";

import styles from './StartingamesSettingsInfo.module.scss';

export default class StartingamesSettingsInfo extends StartingamesSettingsComponent
{
    constructor(props)
    {
        super(props);

        this.config = {title: "Startingames Settings Informations"};
    }

    render()
    {
        this.makeConfig();

        return (
            <>
                <div className={styles['info']}>
                    <p>{this.config.title}</p>
                    <div>
                        {this.props?.value}
                    </div>
                </div>
            </>
        );
    }
};