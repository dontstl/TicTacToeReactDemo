import React from 'react';
import { render, fireEvent, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

afterEach(cleanup);

describe('App', () => {

    test('renders Tic Tac Toe game labels & values', () => {
        render(<App />);
        expect(screen.getByTestId("header")).toBeInTheDocument();
        expect(screen.getByTestId("header").innerHTML).toBe("Tic Tac Toe");
        expect(screen.getByTestId("xScore")).toBeInTheDocument();
        expect(screen.getByTestId("xScore").innerHTML).toBe("0");
        expect(screen.getByTestId("oScore")).toBeInTheDocument();
        expect(screen.getByTestId("oScore").innerHTML).toBe("0");
        expect(screen.getByTestId("reset")).toBeInTheDocument();
        expect(screen.getByTestId("reset").innerHTML).toBe("Reset");
    });

    test('initially renders with correct default state', () => {
        render(<App />);
        for (let index = 0; index < 8; index++) {
            const button = screen.getByTestId(`item${index.toString()}`);
            expect(button.innerHTML).toBe('');
        }
    });

    test('renders the game board', () => {
        render(<App />);
        expect(screen.getByTestId("item0")).toBeInTheDocument();
        expect(screen.getByTestId("item1")).toBeInTheDocument();
        expect(screen.getByTestId("item2")).toBeInTheDocument();
        expect(screen.getByTestId("item3")).toBeInTheDocument();
        expect(screen.getByTestId("item4")).toBeInTheDocument();
        expect(screen.getByTestId("item5")).toBeInTheDocument();
        expect(screen.getByTestId("item6")).toBeInTheDocument();
        expect(screen.getByTestId("item7")).toBeInTheDocument();
        expect(screen.getByTestId("item8")).toBeInTheDocument();
    });
    test('checks button click functionality', () => {
        render(<App />);
        const button = screen.getByTestId('item0');
        fireEvent.click(button);
        expect(button.innerHTML).toBe('X');
    });

    test('checks winning condition', () => {
        render(<App />);
        const buttons = screen.getAllByTestId(/item/);
        fireEvent.click(buttons[0]);
        fireEvent.click(buttons[3]);
        fireEvent.click(buttons[1]);
        fireEvent.click(buttons[4]);
        fireEvent.click(buttons[2]);
        expect(screen.getByTestId("snack-bar")).toBeInTheDocument();
        expect(screen.getByTestId("alert").innerHTML).toBe('<div class="MuiAlert-message css-1pxa9xg-MuiAlert-message">The winner is X</div><div class="MuiAlert-action css-ki1hdl-MuiAlert-action"><button class="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit MuiIconButton-sizeSmall css-1e0d89p-MuiButtonBase-root-MuiIconButton-root" tabindex="0" type="button" aria-label="Close" title="Close"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-ptiqhd-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CloseIcon"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg><span class="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"></span></button></div>');
    });

    test('can reset the score', () => {
        render(<App />);
        const resetButton = screen.getByTestId("reset");
        fireEvent.click(resetButton);
        expect(screen.getByTestId("xScore")).toBeInTheDocument();
        expect(screen.getByTestId("xScore").innerHTML).toBe("0");
        expect(screen.getByTestId("oScore")).toBeInTheDocument();
        expect(screen.getByTestId("oScore").innerHTML).toBe("0");
    });

});