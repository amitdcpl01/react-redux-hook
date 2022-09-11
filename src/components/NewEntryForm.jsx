import React from 'react';
import { Form } from 'semantic-ui-react';
import ButtonSaveOrCancel from './ButtonSaveOrCancel';
import EntryForm from './EntryForm';

function NewEntryForm({ addEntry, description, value, isExpense, setDescription, SetValue, setIsExpense }) {
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
                description={description} 
                value={value}
                isExpense={isExpense}
                />
            </Form>
        </div>
    );
}

export default NewEntryForm;