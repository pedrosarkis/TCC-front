import React from 'react';

import { Switch } from './styles';
import { transparentize } from 'polished';

function SwitchToggle(props) {


        return (

                <Switch onClick={props.click}>
                        <label class="toggle" for="myToggle">
                                <input class="toggle__input" name="" type="checkbox" id="myToggle" />
                                <div class="toggle__fill"></div>
                        </label>
                </Switch>

        )
}

export default SwitchToggle;