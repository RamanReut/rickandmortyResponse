import { combineReducers, createStore, applyMiddleware} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';


import createSagaMiddleware from 'redux-saga'
import CharListReducer from "./CharList/CharListReducer";
import {sagaWatcher} from "./sagaWatcher";



const reducer = combineReducers({
    charList: CharListReducer,


})




const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
export const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(sagaMiddleware)
    )
);

// then run the saga
sagaMiddleware.run(sagaWatcher)



export type AppRootStateType = ReturnType<typeof reducer>
// render the application
//@ts-ignore
window.store = store;