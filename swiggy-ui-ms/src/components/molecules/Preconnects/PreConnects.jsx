/**
 *
 * PreConnects
 *
 */
import React from 'react';

const PreConnects = ({ urlList = [] }) =>
  urlList.length
    ? urlList.map((item) => {
        return <link rel="preconnect" href={item} key={item} />;
      })
    : null;

export default PreConnects;
