import React from 'react';
import { render } from 'components/organisms/HeroHeader/node_modules/src/test-utils';

import Advertisment from '.';

describe('Advertisment', () => {
  it('should render correctly', () => {
    const { asFragment } = render(
      <Advertisment />);
    expect(asFragment()).toMatchSnapshot();
  });
});