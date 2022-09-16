import React from 'react';
import { Form } from 'semantic-ui-react';
import ButtonSaveOrCancel from './ButtonSaveOrCancel';
import EntryForm from './EntryForm';
import useEntryDetails from '../hooks/useEntryDetails';

function NewEntryForm() {
    const { description, setDescription, value, SetValue, isExpense, setIsExpense, addEntry} = useEntryDetails();
    return (
        <div>
            <Form unstackable>
                <EntryForm
                    description={description}
                    value={value}
                    isExpense={isExpense}
                    setDescription={setDescription}
                    SetValue={SetValue}
                    setIsExpense={setIsExpense}
                />
                <ButtonSaveOrCancel
                    addEntry={addEntry}
                />
            </Form>
        </div>
    );
}

export default NewEntryForm;