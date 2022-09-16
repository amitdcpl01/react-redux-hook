import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Modal } from 'semantic-ui-react';
import { closeEditModal } from '../actions/modals.actions';
import EntryForm from './EntryForm';

function ModalEdit({ isOpen, setIsOpen, addEntry, description, value, isExpense, setDescription, SetValue, setIsExpense  }) {
    const dispatch = useDispatch();
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
                <Button onClick={() => dispatch(closeEditModal())}>Close</Button>
                <Button onClick={() => setIsOpen(false)} primary>Ok</Button>
            </Modal.Actions>
        </Modal>
    );
}

export default ModalEdit;