import React from 'react';
import { render } from 'src/test-utils';

import RestaurantCard from '.';

describe('RestaurantCard', () => {
  it('should render correctly', () => {
    const { asFragment } = render(
      <RestaurantCard />);
    expect(asFragment()).toMatchSnapshot();
  });
});