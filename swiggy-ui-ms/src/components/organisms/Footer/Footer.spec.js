import React from 'react';
import { render } from 'components/organisms/HeroBanner/node_modules/components/organisms/Advertisment/node_modules/src/test-utils';

import Footer from '.';

describe('Footer', () => {
  it('should render correctly', () => {
    const { asFragment } = render(
      <Footer />);
    expect(asFragment()).toMatchSnapshot();
  });
});