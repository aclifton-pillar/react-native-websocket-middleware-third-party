import React from 'react';
import prepareStore from "../../store/store";
import {Provider} from "react-redux";
import TimeConnector from './time-connector';

const store = prepareStore();

const TimeProvider = () => (
    <Provider store={store}>
        <TimeConnector/>
    </Provider>
);

export default TimeProvider;
