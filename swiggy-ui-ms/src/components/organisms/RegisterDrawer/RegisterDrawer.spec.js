import React from 'react';
import { render } from 'components/organisms/HeroHeader/node_modules/src/test-utils';

import RegisterDrawer from '.';

describe('RegisterDrawer', () => {
  it('should render correctly', () => {
    const { asFragment } = render(
      <RegisterDrawer />);
    expect(asFragment()).toMatchSnapshot();
  });
});