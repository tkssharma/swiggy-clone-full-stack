import React, { Component } from 'react';

export default class CustomNoRowsOverlay extends Component {
  render() {
    return this.props.noRowsMessageFunc ? (
      <div
        className="ag-overlay-loading-center"
        style={{ backgroundColor: 'lightcoral', height: '9%' }}
      >
        <i className="icon-color-grid">
          {this.props.noRowsMessageFunc && this.props.noRowsMessageFunc()}
        </i>
      </div>
    ) : null;
  }
}
