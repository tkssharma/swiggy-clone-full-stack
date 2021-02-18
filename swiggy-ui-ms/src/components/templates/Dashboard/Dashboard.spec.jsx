import React from 'react';
import { render, withTestRouter } from '../../../test-utils';

import Dashboard from '.';

describe('Dashboard', () => {
  it('should render correctly', () => {
    const { asFragment } = render(withTestRouter(<Dashboard />));
    expect(asFragment()).toMatchSnapshot();
  });
});
