import React from 'react';
import { render } from 'components/organisms/Footer/node_modules/components/organisms/HeroBanner/node_modules/components/organisms/Advertisment/node_modules/src/test-utils';

import SearchBar from '.';

describe('SearchBar', () => {
  it('should render correctly', () => {
    const { asFragment } = render(
      <SearchBar />);
    expect(asFragment()).toMatchSnapshot();
  });
});