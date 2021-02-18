import React from 'react';
import { act } from '@testing-library/react';
import { render } from '../../../test-utils';
import { getCurrency } from '../../../graphQL/Queries/Currency';
import mockResponse from './Home.mock';

import Home from '.';

describe('Home', () => {
  it('should render loading state correctly', () => {
    const { asFragment } = render(<Home />, {
      wrapperProps: {
        mocks: [
          {
            request: {
              query: getCurrency,
            },
            result: {
              data: mockResponse,
            },
          },
        ],
      },
    });

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly once data is loaded', async () => {
    const { asFragment } = render(<Home />, {
      wrapperProps: {
        mocks: [
          {
            request: {
              query: getCurrency,
            },
            result: {
              data: mockResponse,
            },
          },
        ],
      },
    });

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    expect(asFragment()).toMatchSnapshot();
  });
});
