import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import reduxWebsocket from '@giantmachines/redux-websocket';
import timeReducer from "../components/time/time-reducers";

const reduxWebsocketMiddleware = reduxWebsocket();

function prepareStore(state) {
    return createStore(
        combineReducers({time: timeReducer}),
        state,
        applyMiddleware(thunk, reduxWebsocketMiddleware));
}

export default prepareStore;