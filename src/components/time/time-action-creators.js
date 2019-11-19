import {connect} from "@giantmachines/redux-websocket/dist";

export const getTime = () => {
    return dispatch => {
        return null;
    };
};

export const startSocket = () => {
    return dispatch => {
        dispatch({
            type: 'SOMETHING'
        });
        return null;
    }
};

export const startAutoTime = () => {
    return dispatch => {
        dispatch(connect("ws://10.0.2.2:3000"));
        return null;
    }
};
