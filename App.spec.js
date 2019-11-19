import React from 'react';
import {Button} from 'react-native';
import {shallow} from 'enzyme';
import Chance from 'chance';
import * as sinon from "sinon";
import App from "./App";

const chance = new Chance();

describe("App", () => {
    let app;

    const getTimeAC = sinon.spy();

    const properties = {
        currentTime: chance.string(),
        getCurrentTime: getTimeAC
    };

    beforeEach(() => {
        app = shallow(<App {...properties} />);
    });

    describe("get time button", () => {
        test("should call getCurrentTime action creator when button is clicked", () => {
            const getTimeButton = app.find(Button);

            getTimeButton.simulate("press");

            expect(getTimeAC.calledWithExactly()).toEqual(true);
        });
    });
});
