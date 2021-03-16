import React from 'react';
import { render } from 'components/organisms/HeroHeader/node_modules/src/test-utils';

import LoginDrawer from '.';

describe('LoginDrawer', () => {
  it('should render correctly', () => {
    const { asFragment } = render(
      <LoginDrawer />);
    expect(asFragment()).toMatchSnapshot();
  });
});