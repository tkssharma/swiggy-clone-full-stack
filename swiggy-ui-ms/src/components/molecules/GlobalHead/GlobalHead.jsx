/**
 *
 * GlobalHead
 *
 */
import React from 'react';

import Favicon from '../Favicon';
import PreConnects from '../Preconnects';

const GlobalHead = () => {
  return (
    <>
      <title>Hiring Staffing</title>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      <PreConnects />
      <Favicon />
      <link href="https://cdnjs.cloudflare.com/ajax/libs/ag-grid/19.1.4/styles/ag-grid.css" rel="stylesheet" />
      <link href="https://cdnjs.cloudflare.com/ajax/libs/ag-grid/19.1.4/styles/ag-theme-balham.css" rel="stylesheet" />
      <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
    </>
  );
};

export default GlobalHead;
