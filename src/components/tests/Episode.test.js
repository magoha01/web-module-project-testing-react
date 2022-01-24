import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Episode from './../Episode';

const testEpisode = {
    id: 0,
    image: 'string',
    name: 'name',
    season: 0,
    number: 0,
    summary: 'summary',
    runtime: 0,
  }

test("renders without error", () => {

    render(<Episode episode={testEpisode} />);

});


test("renders the summary test passed as prop", ()=>{

    render(<Episode episode={testEpisode.summary}/>);

});


test("renders default image when image is not defined", ()=>{

});
