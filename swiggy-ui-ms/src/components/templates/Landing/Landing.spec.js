import React from 'react';
import { render } from 'components/organisms/Footer/node_modules/components/organisms/HeroBanner/node_modules/components/organisms/Advertisment/node_modules/src/test-utils';

import Landing from '.';

describe('Landing', () => {
  it('should render correctly', () => {
    const { asFragment } = render(
      <Landing />);
    expect(asFragment()).toMatchSnapshot();
  });
});