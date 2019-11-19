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