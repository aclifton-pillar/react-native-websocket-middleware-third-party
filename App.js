import React from 'react';
import PropTypes from 'prop-types';
import {Button, StyleSheet, Text, View} from 'react-native';

const App = props => (
    <View style={styles.container}>
        <Text testID="welcome" style={styles.welcome}>Hello!</Text>
        <Button
            onPress={props.getCurrentTime}
            title="Click for Time"
            testID="getTime"
        />
        {props.currentTime &&
        <Text testID="time">{'Current Time: ' + props.currentTime}</Text>
        }
    </View>
);

App.propTypes = {
    currentTime: PropTypes.string
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});
