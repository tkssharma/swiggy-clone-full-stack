import React from 'react';
import LabelContext from './context';

function useLabels() {
  const context = React.useContext(LabelContext);
  if (!context) {
    throw new Error('useLabels must be used within a LabelProvider');
  }
  const [state, dispatch] = context;

  const setLabels = (labels) => dispatch({ type: 'SET_LABELS', labels });

  return {
    state,
    dispatch,
    setLabels,
  };
}

export default useLabels;
