import React from 'react';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { theme } from '../theme';

const AllTheProviders = ({ children, mocks = [] }) => {
  return (
    <MockedProvider mocks={mocks} addTypename={false}>
        {children}
    </MockedProvider>
  );
};

AllTheProviders.propTypes = {
  children: PropTypes.node.isRequired,
  mocks: PropTypes.arrayOf(PropTypes.shape({})),
};

AllTheProviders.defaultProps = {
  mocks: [],
};

const customRender = (ui, options) => {
  const { wrapperProps = {}, ...customOptions } = options || {};
  return render(ui, {
    wrapper: (props) => {
      return <AllTheProviders {...props} {...wrapperProps} />;
    },
    ...customOptions,
  });
};

// re-export everything
export * from '@testing-library/react';
export * from './withTestRouter';

// override render method
export { customRender as render };
