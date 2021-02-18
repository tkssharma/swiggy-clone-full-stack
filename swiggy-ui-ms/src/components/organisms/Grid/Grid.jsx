/* eslint-disable import/no-unresolved */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-console */
import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community';

class Grid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sideBar: 'columns',
      quickFilterText: null,
      model: false,
      modelObject: {},
      loading: false,
      rowData: [{
        id: "01",
        type: "India",
        title: "Test Title",
        start_date: "01/07/2020",
        role: "Se Lead",
        phase: "Cycle 0",
        track: "Infra",
        fte_count: 7
      }, {
        id: "01",
        type: "India",
        title: "Test Title",
        start_date: "01/07/2020",
        role: "Se Lead",
        phase: "Cycle 0",
        track: "Infra",
        fte_count: 7
      }],
      rowSelection: 'multiple',
      sortingOrder: ['desc', 'asc', null],
      defaultColDef: {
        resizable: true,
        sortable: true,
        filter: true,
        editable: true,
        floatingFilter: true,
      },
      columnDefs: [
        {
          checkboxSelection: true,
          headerName: 'id',
          headerCheckboxSelection: true,
          headerCheckboxSelectionFilteredOnly: true,
          sortable: false,
          filter: false,
          resizable: true,
          field: 'id',
          width: 40,

        },
        {
          headerName: 'Assignment Type',
          field: 'type',
          tooltipField: 'test',
          sortable: true,
          filter: 'agTextColumnFilter',
          filterParams: {
            buttons: ['reset', 'apply'],
          },
          resizable: true,
          editable: false,
          width: 150,
        },
        {
          headerName: 'Title',
          field: 'title',
          tooltipField: 'test',
          sortable: true,
          filter: 'agTextColumnFilter',
          resizable: true,
          editable: true,
          width: 150,
        },
        {
          headerName: 'State Date',
          field: 'start_date',
          tooltipField: 'test',
          sortable: true,
          filter: 'agTextColumnFilter',

          resizable: true,
          editable: false,
          width: 150,
        },
        {
          headerName: 'Role',
          field: 'role',
          tooltipField: 'test',
          sortable: true,
          filter: 'agTextColumnFilter',

          resizable: true,
          editable: false,
          width: 150,
        },
        {
          headerName: 'Phase',
          field: 'phase',
          tooltipField: 'test',
          sortable: true,
          filter: 'agTextColumnFilter',

          resizable: true,
          editable: false,
          width: 180,
        },
        {
          headerName: 'Track',
          field: 'track',
          tooltipField: 'test',
          sortable: true,
          filter: 'agTextColumnFilter',

          resizable: true,
          editable: false,
          width: 180,
        },
        {
          headerName: 'FTE Count',
          field: 'fte_count',
          tooltipField: 'test',
          sortable: true,
          filter: 'agTextColumnFilter',

          resizable: true,
          editable: false,
          width: 180,
        },
      ],
    };
  }

  /* Grid Events we're listening to */
  onGridReady = params => {
    this.api = params.api;
    this.columnApi = params.columnApi;
  };

  render() {
    return (
      <div style={{ width: '100%', height: '100%' }}>

        <div
          id="myGrid"
          style={{
            height: '500px',
            width: '100%',
          }}
          className="ag-theme-balham"
        >
          <AgGridReact
            enableBrowserTooltips
            allowContextMenuWithControlKey
            columnDefs={this.state.columnDefs}
            suppressRowClickSelection
            rowSelection
            animateRows
            sideBar={this.state.sideBar}
            floatingFilter
            onGridReady={this.onGridReady}
            pagination
            paginationPageSize={100}
            // icons={this.state.icons}
            rowData={this.state.rowData}
            enableRangeSelection
            defaultColDef={this.state.defaultColDef}
          />
        </div>
      </div>
    );
  }
}

export default Grid;
