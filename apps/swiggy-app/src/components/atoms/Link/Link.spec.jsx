import React from 'react';
import { render, withTestRouter } from '../../../test-utils';

import Link from '.';

describe('Link', () => {
  it('should render correctly', () => {
    const { asFragment } = render(withTestRouter(<Link href="/">This is dummy link</Link>));
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly with naked true', () => {
    const { asFragment } = render(
      withTestRouter(
        <Link href="/" naked>
          This is dummy link
        </Link>
      )
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
