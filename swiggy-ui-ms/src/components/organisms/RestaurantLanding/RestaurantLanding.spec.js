import React from 'react';
import { render } from 'src/test-utils';

import RestaurantLanding from '.';

describe('RestaurantLanding', () => {
  it('should render correctly', () => {
    const { asFragment } = render(
      <RestaurantLanding />);
    expect(asFragment()).toMatchSnapshot();
  });
});