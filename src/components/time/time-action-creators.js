import {connect} from "@giantmachines/redux-websocket/dist";
import {Platform} from 'react-native';

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
        dispatch(connect(Platform.OS === 'ios' ? "ws://localhost:3000": "ws://10.0.2.2:3000"));
        return null;
    }
};
