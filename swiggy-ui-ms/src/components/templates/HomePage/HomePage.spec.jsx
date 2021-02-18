import React from 'react';
import { render, withTestRouter } from '../../../test-utils';

import HomePage from '.';

describe('HomePage', () => {
  it('should render correctly', () => {
    const { asFragment } = render(withTestRouter(<HomePage />));
    expect(asFragment()).toMatchSnapshot();
  });
});
