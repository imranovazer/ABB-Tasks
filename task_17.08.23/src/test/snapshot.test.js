import React from 'react';
import { render } from '@testing-library/react';

import Button from '../components/Button';


test('renders Button correctly', () => {
    const { asFragment } = render(<Button />);


    expect(asFragment()).toMatchSnapshot();
});
