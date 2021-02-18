import React from 'react';
import { render } from '../../../test-utils';

import Favicon from '.';

describe('Favicon', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Favicon />);
    expect(asFragment()).toMatchSnapshot();
  });
});
