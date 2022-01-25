import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Show from './../Show';

//Build an example data structure that contains the show data in the correct format. A show should contain a name, a summary and an array of seasons, each with a id, name and an (empty) list of episodes within them. Use console.logs within the client code if you need to to verify the structure of show data.
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

test('renders without errors', ()=>{

    render(<Show />);

});

test('renders Loading component when prop show is null', () => {

    render(<Show show={null}/>);

    const loadingComp = screen.queryByTestId('loading-container');

    expect(loadingComp).toBeInTheDocument();
    expect(loadingComp).toBeTruthy();
    expect(loadingComp).toBeVisible();

});


test('renders same number of options seasons are passed in', ()=>{

    render(<Show show={testShow} selectedSeason={'none'} />);

    const seasonOptions = screen.queryAllByTestId('season-option')
    expect(seasonOptions).toHaveLength(4);

});

test('handleSelect is called when an season is selected', () => {
    
    const handleSelect = jest.fn();

    render(<Show  handleSelect={handleSelect} show={testShow} selectedSeason={'none'} />);
    const selectASeason = screen.getByLabelText('Select A Season')
    userEvent.selectOptions(selectASeason, ['1'] );

    expect(handleSelect).toBeCalled();

});

test('component renders when no seasons are selected and when rerenders with a season passed in', () => {

    const { rerender } = render(<Show show={testShow} selectedSeason={'none'} />);
   let seasonEpisodes = screen.queryByTestId('episodes-container');
    expect(seasonEpisodes).not.toBeInTheDocument();

    rerender(<Show show={testShow} selectedSeason={1}/>);
    seasonEpisodes = screen.queryByTestId('episodes-container');
    expect(seasonEpisodes).toBeInTheDocument();

});
