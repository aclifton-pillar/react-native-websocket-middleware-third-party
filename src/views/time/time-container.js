import React from 'react';
import {Button, Text, View} from 'react-native';
import PropTypes from 'prop-types';

const TimeContainer = (props) => (
        <View>
            <Text>Hello</Text>
            <Button onPress={() => props.startSocket()} title={"Manual"}/>
            <Button onPress={() => props.startAutoTime()} title={"Auto"}/>
            <Text>{props.time}</Text>
        </View>
);

TimeContainer.propTypes = {
    time: PropTypes.string,
    startSocket: PropTypes.func,
    startAutoTime: PropTypes.func
};

export default TimeContainer;