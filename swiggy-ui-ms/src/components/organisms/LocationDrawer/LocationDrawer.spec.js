import React from 'react';
import { render } from 'src/test-utils';

import LocationDrawer from '.';

describe('LocationDrawer', () => {
  it('should render correctly', () => {
    const { asFragment } = render(
      <LocationDrawer />);
    expect(asFragment()).toMatchSnapshot();
  });
});