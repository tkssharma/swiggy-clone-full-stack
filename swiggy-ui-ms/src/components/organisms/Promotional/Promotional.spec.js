import React from 'react';
import { render } from 'src/test-utils';

import Promotional from '.';

describe('Promotional', () => {
  it('should render correctly', () => {
    const { asFragment } = render(
      <Promotional />);
    expect(asFragment()).toMatchSnapshot();
  });
});