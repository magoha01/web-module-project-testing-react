import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { queryByAltText, render, screen } from '@testing-library/react';
import Episode from './../Episode';

const testEpisode = {
    id: 0,
    image: 'https://i.ibb.co/2FsfXqM/stranger-things.png',
    name: 'name',
    season: 0,
    number: 0,
    summary: 'A specific Summary Statement.',
    runtime: 0,
  }

  const imgTestEpisode = {
    id: 0,
    image: null,
    name: 'name',
    season: 0,
    number: 0,
    summary: 'A specific Summary Statement.',
    runtime: 0,
  }

test("renders without error", () => {

    render(<Episode episode={testEpisode} />);

});


test("renders the summary test passed as prop", ()=>{

    render(<Episode episode={testEpisode}/>);

    const summaryText = screen.queryByText(/A specific Summary Statement./i);

    expect(summaryText).toBeInTheDocument();
    expect(summaryText).toHaveTextContent(/A specific Summary Statement./i);
    expect(summaryText).toBeTruthy();
    expect(summaryText).toBeVisible();

});


test("renders default image when image is not defined", ()=>{

    render(<Episode episode={imgTestEpisode}/>);

    const episodeImgAlt = screen.queryByAltText('https://i.ibb.co/2FsfXqM/stranger-things.png');

    expect(episodeImgAlt).toBeInTheDocument();
    expect(episodeImgAlt).toBeTruthy();
  

});
