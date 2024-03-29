import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addEntryRedux, updateEntryRedux } from '../actions/entries.actions';
import { v4 as uuidv4 } from 'uuid';
import { closeEditModal } from "../actions/modals.actions";


function useEntryDetails(desc = "", val = "", isExp = true) {
    const [description, setDescription] = useState(desc);
    const [value, SetValue] = useState(val);
    const [isExpense, setIsExpense] = useState(isExp);
    const dispatch = useDispatch();

    useEffect(() => {
        setDescription(desc);
        SetValue(val);
        setIsExpense(isExp);
    }, [desc, val, isExp]);

    function updateEntry(id) {
        dispatch(
            updateEntryRedux(
                id,
                {
                    id,
                    description,
                    value,
                    isExpense
                }
            )
        );
        dispatch(
            closeEditModal()
        );
        resetValues();
    }

    function addEntry() {
        dispatch(addEntryRedux({
            id: uuidv4(),
            description,
            value,
            isExpense
        })
        );
        resetValues();
    }

function resetValues(){
    setDescription('');
    SetValue('');
    setIsExpense(true);
}

    return {
        description, setDescription, value, SetValue, isExpense, setIsExpense, addEntry, updateEntry
    }
}

export default useEntryDetails;