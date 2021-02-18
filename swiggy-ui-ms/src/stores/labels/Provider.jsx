import React from 'react';
import labelReducer from './reducer';
import LabelContext from './context';

const Provider = (props) => {
    const [state, dispatch] = React.useReducer(labelReducer, {});
    const value = React.useMemo(() => [state, dispatch], [state]);
    return <LabelContext.Provider value={value} {...props} />
}

export default Provider;