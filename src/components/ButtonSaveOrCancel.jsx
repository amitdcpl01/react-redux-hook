import React from 'react';
import { Button } from 'semantic-ui-react';

function ButtonSaveOrCancel(props) {
    return (
        <div>
            <Button.Group style={{ marginTop: 20 }}>
                <Button>Cancel</Button>
                <Button.Or />
                <Button primary>Ok</Button>
            </Button.Group>
        </div>
    );
}

export default ButtonSaveOrCancel;