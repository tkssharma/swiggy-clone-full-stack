import React from 'react';
import { render } from 'src/test-utils';

import Grid from '.';

describe('Grid', () => {
  it('should render correctly', () => {
    const { asFragment } = render(
      <Grid />);
    expect(asFragment()).toMatchSnapshot();
  });
});