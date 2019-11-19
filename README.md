# React Native Websocket Using Redux Websocket Third-Party Library

This is a simplistic implementation of a websocket
client using a Redux-oriented third-party library.
The app can connect to a simple backend server, 
and receive and display messages from it.

## Installation

In the project root, `npm install`.

In the project server directory, `npm install`.

## Running

To run and use the application, you'll first start
the backend server:  `node server/index.js`

Then, run Metro Bundler and the application:
`npm run ios` or `npm run android`

Click the `Auto` button and the app will connect
via websocket and begin receiving the updated
time from the backend.

## Discussion

Using Redux middleware to manage websocket connections
is easy to maintain, fits well into managing state
in a React app, and is fast to implement.

In our example, a few pieces are required to make it
work:

The middleware is applied in `src/store/store.js`.
Also, the reducer used to accept messages and
store them in state, in this case the time, is
combined and provided to the store.

```
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
```

An action creator is added, that is fired when the
`Auto` button is pressed, resulting in a connection
to the websocket server.

```
import {connect} from "@giantmachines/redux-websocket/dist";
import {Platform} from 'react-native';

...

export const startAutoTime = () => {
    return dispatch => {
        dispatch(connect(Platform.OS === 'ios' ? "ws://localhost:3000": "ws://10.0.2.2:3000"));
        return null;
    }
};
```

And a reducer is added that takes inbound websocket
messages and stores them in state, so that the
updated time can be displayed in the view.

```
import moment from "moment";

const updateTime = (state, action) => {
    return "the time is" + moment().toString();
};

const updateTimeRemote = (state, action) => {
    return action.payload.message;
};

const unknown = (state, action) => {
    return action.type;
};

const timeReducer = (state = null, action) => {
    const reducers = {
        "SOMETHING": updateTime,
        "REDUX_WEBSOCKET::MESSAGE": updateTimeRemote
    };

    const reducer = reducers[action.type];

    return reducer ? reducer(state, action): unknown(state, action);
};

export default timeReducer;
```
