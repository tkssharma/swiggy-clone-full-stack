import React from 'react';
import { render } from '../../../test-utils';

import PreConnects from '.';

describe('PreConnects', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<PreConnects urlList={['/test']} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render null if urlList is not present', () => {
    const { asFragment } = render(<PreConnects />);
    expect(asFragment()).toMatchSnapshot();
  });
});
