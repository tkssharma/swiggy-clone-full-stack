import React from 'react';
import { render } from '../../../test-utils';

import GlobalHead from '.';

describe('GlobalHead', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<GlobalHead />);
    expect(asFragment()).toMatchSnapshot();
  });
});
