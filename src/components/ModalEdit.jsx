import React from 'react';
import { Button, Modal } from 'semantic-ui-react';
import EntryForm from './EntryForm';

function ModalEdit({ isOpen, setIsOpen, addEntry, description, value, isExpense, setDescription, SetValue, setIsExpense  }) {
    return (
        <Modal open={isOpen}>
            <Modal.Header>Edit Entry</Modal.Header>
            <Modal.Content>
                {/* <Modal.Description>Something here</Modal.Description> */}
                {/* <NewEntryForm /> */}
                <EntryForm 
                 description={description}
                 value={value}
                 isExpense={isExpense}
                 setDescription={setDescription}
                 SetValue={SetValue}
                 setIsExpense={setIsExpense}
                />
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={() => setIsOpen(false)}>Close</Button>
            </Modal.Actions>
        </Modal>
    );
}

export default ModalEdit;