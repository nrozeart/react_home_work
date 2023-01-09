/* globals describe, it */

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Home } from './Home';

describe('Home', () => {
    it('render component Home', () => {
        render(<Home>Home page</Home>);
    });
});
