import React from 'react';
import { render } from 'src/test-utils';

import HeroHeader from '.';

describe('HeroHeader', () => {
  it('should render correctly', () => {
    const { asFragment } = render(
      <HeroHeader />);
    expect(asFragment()).toMatchSnapshot();
  });
});