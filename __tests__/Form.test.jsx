/**
 * @group unit
 */


import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Form from '../src/components/Form';


describe('Form Component', () => {
  it('renders without crashing', () => {
    const { getByPlaceholderText } = render(<Form onChange={() => {}} onFilter={() => {}} />);
    expect(getByPlaceholderText('Search')).toBeInTheDocument();
  });
});





