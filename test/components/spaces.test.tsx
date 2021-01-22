import React from 'react';
import { render, fireEvent } from '../testUtils';
import ListSpaces from '../../src/components/ListSpaces';

describe('<ListSpaces>', () => {
    it('matches snapshot', () => {
        const { asFragment } = render(<ListSpaces />, {});
        expect(asFragment()).toMatchSnapshot();
    });

    // it('clicking button triggers alert', () => {
    //     const { getByText } = render(<ListSpaces />, {});
    //     window.alert = jest.fn();
    //     fireEvent.click(getByText('Test Button'));
    //     expect(window.alert).toHaveBeenCalledWith('With typescript and Jest');
    // });
});
