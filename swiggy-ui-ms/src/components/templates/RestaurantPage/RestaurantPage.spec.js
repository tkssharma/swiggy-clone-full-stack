import React from 'react';
import { render } from 'src/test-utils';

import RestaurantPage from '.';

describe('RestaurantPage', () => {
  it('should render correctly', () => {
    const { asFragment } = render(
      <RestaurantPage />);
    expect(asFragment()).toMatchSnapshot();
  });
});