import React from 'react';
import { render } from 'components/organisms/Footer/node_modules/components/organisms/HeroBanner/node_modules/components/organisms/Advertisment/node_modules/src/test-utils';

import Feature from '.';

describe('Feature', () => {
  it('should render correctly', () => {
    const { asFragment } = render(
      <Feature />);
    expect(asFragment()).toMatchSnapshot();
  });
});