import React from 'react';
import { render } from '@testing-library/react';

import Layout from '.';

describe('Layout', () => {
  it('should render correctly', () => {
    const { asFragment } = render(
      <Layout>
        <p>This is dummy page</p>
      </Layout>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
