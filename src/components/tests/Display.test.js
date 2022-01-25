import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Display from './../Display';
import mockFetchShow from './../../api/fetchShow';
jest.mock('./../../api/fetchShow');

const testShow = {
    name: 'show name',
    summary: 'show summary',
    seasons: [
            {
            id: 1,
            name: 'season 1',
            episodes: []
            },

            {
                id: 2,
                name: 'season 2',
                episodes: []
            },

            {
                id: 3,
                name: 'season 3',
                episodes: []
            },

            {
                id: 4,
                name: 'season 4',
                episodes: []
            },
    ],
}

test('renders without errors with no props', ()=>{
    render(<Display />);
});


test('renders Show component when the button is clicked ', async ()=>{
    mockFetchShow.mockResolvedValueOnce(testShow);
    render(<Display/>) 
    const button = screen.getByText(/Press to Get Show Data/i);
    userEvent.click(button);
    const show = await screen.findByTestId('show-container');
    expect(show).toBeInTheDocument();
});


test('renders show season options matching your data when the button is clicked', async () => {
    mockFetchShow.mockResolvedValueOnce(testShow)
    render(<Display/>) 
    const button = screen.getByText(/Press to Get Show Data/i);
    userEvent.click(button);

    await waitFor(()=> {
        const options = screen.queryAllByTestId('season-option') 
        expect(options).toHaveLength(4);
    });

});
