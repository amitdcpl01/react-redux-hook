import { combineReducers, createStore } from "redux";
import entriesReducer from "../reducers/entries.reducers";
import { composeWithDevTools } from 'redux-devtools-extension';
import modalsReducers from '../reducers/modals.reducers';


const configureStore = () => {
    return createStore(
        combineReducers({
            entries: entriesReducer,
            modals: modalsReducers,
        }),
        composeWithDevTools()
    );
};
export default configureStore;
