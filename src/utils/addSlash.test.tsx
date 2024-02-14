import React from 'react';
import { addSlash } from './addRemoveSlash';
import {cleanup, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';

afterEach(cleanup);

describe('addSlash function tests', () => {

    test('checks if the correct class is added when 0,1,2 is passed', () => {
        render(<App />);
        const testStr = "0,1,2";
        addSlash(testStr);
        const element = screen.getByTestId("slash-cont")
        expect((element?.classList.contains("slash-row1-across"))).toBe(true);
    });

    test('checks if the correct class is added when 3,4,5 is passed', () => {
        render(<App />);
        const testStr = "3,4,5";
        addSlash(testStr);
        const element = screen.getByTestId("slash-cont")
        expect((element?.classList.contains("slash-row2-across"))).toBe(true);
    });

    // Continue with all the input cases in similar fashion...
});