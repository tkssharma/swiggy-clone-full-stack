import React from 'react';
import { render } from 'src/test-utils';

import NavHeader from '.';

describe('NavHeader', () => {
  it('should render correctly', () => {
    const { asFragment } = render(
      <NavHeader />);
    expect(asFragment()).toMatchSnapshot();
  });
});