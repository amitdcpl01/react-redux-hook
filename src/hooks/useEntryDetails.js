import { useState } from "react";
import { useDispatch } from "react-redux";
import { addEntryRedux } from '../actions/entries.actions';
import {v4 as uuidv4} from 'uuid';


function useEntryDetails() {
    const [description, setDescription] = useState('');
    const [value, SetValue] = useState('');
    const [isExpense, setIsExpense] = useState(true);
    const dispatch = useDispatch();

    function addEntry() {
        dispatch(addEntryRedux({
            id: uuidv4(),
            description,
            value,
            isExpense
        })
        );
        setDescription('');
        SetValue('');
        setIsExpense(true);
    }
    return {
        description, setDescription, value, SetValue, isExpense, setIsExpense, addEntry
    }
}

export default useEntryDetails;