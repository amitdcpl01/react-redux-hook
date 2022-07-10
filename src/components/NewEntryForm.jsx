import React, { useState } from 'react';
import { Checkbox, Form, Segment } from 'semantic-ui-react';
import ButtonSaveOrCancel from './ButtonSaveOrCancel';

function NewEntryForm({ addEntry }) {
    const [description, setDescription] = useState('');
    const [value, SetValue] = useState('');
    const [isExpense, setIsExpense] = useState(true);
    return (
        <div>
            <Form unstackable>
                <Form.Group>
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
                <ButtonSaveOrCancel 
                addEntry={addEntry} 
                description={description} 
                value={value}
                isExpense={isExpense}
                />
            </Form>
        </div>
    );
}

export default NewEntryForm;