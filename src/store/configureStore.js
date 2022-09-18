import { applyMiddleware, combineReducers, createStore } from "redux";
import entriesReducer from "../reducers/entries.reducers";
import { composeWithDevTools } from 'redux-devtools-extension';
import modalsReducers from '../reducers/modals.reducers';
import createSagaMiddleware from 'redux-saga';
import { testSaga } from "../sagas/testSaga";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const configureStore = () => {
    const store = createStore(
        combineReducers({
            entries: entriesReducer,
            modals: modalsReducers,
        }),
        composeWithDevTools(
            applyMiddleware(...middleware)
        )
    );
    // sagaMiddleware.run(testSaga);
    return store;
};
export default configureStore;
