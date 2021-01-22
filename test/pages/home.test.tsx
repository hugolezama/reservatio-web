import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import Home from '../../src/pages/index';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
    __esModule: true,
    useRouter: jest.fn()
}));

describe('<Home>', () => {
    it('should redirect to ListSpaces', async () => {
        const { getByText } = render(<Home />, {});
        const expectedRouterPush = jest.fn();
        (useRouter as jest.Mock).mockImplementation(() => ({
            push: expectedRouterPush
        }));
        try {
            await act(async () => fireEvent.click(getByText('List Spaces')));
            expect(expectedRouterPush).toHaveBeenCalledTimes(1);
            expect(expectedRouterPush).toHaveBeenCalledWith('/spaces');
        } catch (error) {
            console.error(error);
        }
    });
});
