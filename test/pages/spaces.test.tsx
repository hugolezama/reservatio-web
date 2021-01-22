import React from 'react';
import { render, fireEvent } from '../testUtils';
import Spaces from '../../src/pages/spaces';

describe('<Spaces>', () => {
    it('matches snapshot', () => {
        const { asFragment } = render(<Spaces />, {});
        expect(asFragment()).toMatchSnapshot();
    });

    // it('clicking button triggers alert', () => {
    //     const { getByText } = render(<ListSpaces />, {});
    //     window.alert = jest.fn();
    //     fireEvent.click(getByText('Test Button'));
    //     expect(window.alert).toHaveBeenCalledWith('With typescript and Jest');
    // });
});
