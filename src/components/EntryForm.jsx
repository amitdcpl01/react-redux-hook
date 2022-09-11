import React, { Fragment } from 'react';
import { Checkbox, Form, Segment } from 'semantic-ui-react';

function EntryForm({description, value, isExpense, setDescription, SetValue, setIsExpense}) {
    return (
        <Fragment>
            <Form.Group widths={3}>
                <Form.Input
                    icon='tags'
                    width={12}
                    label='Description'
                    placeholder='New Shinny thing'
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />
                <Form.Input
                    width={4}
                    label='Value'
                    placeholder='100.00'
                    icon='dollar'
                    iconPosition='left'
                    value={value}
                    onChange={(event) => SetValue(event.target.value)}
                />
            </Form.Group>
            <Segment compact>
                    <Checkbox 
                    toggle 
                    label='is expense' 
                    checked={isExpense}
                    onChange={()=> setIsExpense ((oldState) => !oldState)}
                    />
                </Segment>
        </Fragment>
    );
}

export default EntryForm;