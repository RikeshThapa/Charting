import React from 'react';
import ReactDOM from 'react-dom';
import { Table, Row, Col } from 'antd';

import Horizontal_Stacked from './charts/components/Horizontal_Stacked';

import './App.css';
import 'antd/dist/antd.css';

const columns = [
  {
    title: '',
    dataIndex: 'tickettype_name_short',
  },
  {
    title: 'Act.',
    dataIndex: 'tickets_actual',
    sorter: {
      compare: (a, b) => a.tickets_actual - b.tickets_actual,
      multiple: 3,
    },
  },
  {
    title: 'Bdgt.',
    dataIndex: 'tickets_benchmark',
    sorter: {
      compare: (a, b) => a.tickets_benchmark - b.tickets_benchmark,
      multiple: 2,
    },
  },{
    //Actual vs Budgeted Tickets = Actual Tickets Sold - Budgeted Tickets Sold
    title: 'Act. Vs Bdgt.',
    dataIndex: 'actual_vs_budgeted',
    render: (i, row) => row.tickets_actual - row.tickets_benchmark,
    sorter: {
      compare: (a, b) => a.actual_vs_budgeted - b.actual_vs_budgeted,
      multiple: 1,
    },
  },
  
];

const data = [
  {
    "event_id":2785,
    "pricelocation_id":2075,
    "tickettype_id":475,
    "tickets_actual":78,
    "tickets_forecast":0,
    "tickets_benchmark":47.08111435,
    "event_datetime":"2020-04-10T19:10:00",
    "event_name":"WASHINGTON NATIONALS",
    "event_name_short":"NATIONALS",
    "event_name_abbr":"WSH",
    "pricelocation_name":"Y30",
    "pricelocation_name_abbr":"Y30",
    "tickettype_name":"GROUP",
    "tickettype_name_short":"GROUP"
 },
 {
    "event_id":2786,
    "pricelocation_id":2075,
    "tickettype_id":475,
    "tickets_actual":39,
    "tickets_forecast":38,
    "tickets_benchmark":41.23680695,
    "event_datetime":"2020-04-11T18:10:00",
    "event_name":"WASHINGTON NATIONALS",
    "event_name_short":"NATIONALS",
    "event_name_abbr":"WSH",
    "pricelocation_name":"Y30",
    "pricelocation_name_abbr":"Y30",
    "tickettype_name":"GROUP",
    "tickettype_name_short":"GROUP"
 },
 {
    "event_id":2787,
    "pricelocation_id":2075,
    "tickettype_id":475,
    "tickets_actual":78,
    "tickets_forecast":0,
    "tickets_benchmark":16.33642845,
    "event_datetime":"2020-04-12T13:10:00",
    "event_name":"WASHINGTON NATIONALS",
    "event_name_short":"NATIONALS",
    "event_name_abbr":"WSH",
    "pricelocation_name":"Y30",
    "pricelocation_name_abbr":"Y30",
    "tickettype_name":"GROUP",
    "tickettype_name_short":"GROUP"
 },
 {
    "event_id":2799,
    "pricelocation_id":2075,
    "tickettype_id":475,
    "tickets_actual":0,
    "tickets_forecast":77,
    "tickets_benchmark":73.14043438,
    "event_datetime":"2020-05-08T19:10:00",
    "event_name":"SAN DIEGO PADRES",
    "event_name_short":"PADRES",
    "event_name_abbr":"SD",
    "pricelocation_name":"Y30",
    "pricelocation_name_abbr":"Y30",
    "tickettype_name":"GROUP",
    "tickettype_name_short":"GROUP"
 },
 {
    "event_id":2800,
    "pricelocation_id":2075,
    "tickettype_id":475,
    "tickets_actual":0,
    "tickets_forecast":77,
    "tickets_benchmark":97.47008519,
    "event_datetime":"2020-05-09T18:10:00",
    "event_name":"SAN DIEGO PADRES",
    "event_name_short":"PADRES",
    "event_name_abbr":"SD",
    "pricelocation_name":"Y30",
    "pricelocation_name_abbr":"Y30",
    "tickettype_name":"GROUP",
    "tickettype_name_short":"GROUP"
 },
 {
    "event_id":2801,
    "pricelocation_id":2075,
    "tickettype_id":475,
    "tickets_actual":39,
    "tickets_forecast":36,
    "tickets_benchmark":23.65507091,
    "event_datetime":"2020-05-10T13:10:00",
    "event_name":"SAN DIEGO PADRES",
    "event_name_short":"PADRES",
    "event_name_abbr":"SD",
    "pricelocation_name":"Y30",
    "pricelocation_name_abbr":"Y30",
    "tickettype_name":"GROUP",
    "tickettype_name_short":"GROUP"
 },
 {
    "event_id":2813,
    "pricelocation_id":2075,
    "tickettype_id":475,
    "tickets_actual":0,
    "tickets_forecast":78,
    "tickets_benchmark":55.83394078,
    "event_datetime":"2020-06-06T19:10:00",
    "event_name":"COLORADO ROCKIES",
    "event_name_short":"ROCKIES",
    "event_name_abbr":"COL",
    "pricelocation_name":"Y30",
    "pricelocation_name_abbr":"Y30",
    "tickettype_name":"GROUP",
    "tickettype_name_short":"GROUP"
 },
 {
    "event_id":2814,
    "pricelocation_id":2075,
    "tickettype_id":475,
    "tickets_actual":78,
    "tickets_forecast":0,
    "tickets_benchmark":51.51413406,
    "event_datetime":"2020-06-07T13:10:00",
    "event_name":"COLORADO ROCKIES",
    "event_name_short":"ROCKIES",
    "event_name_abbr":"COL",
    "pricelocation_name":"Y30",
    "pricelocation_name_abbr":"Y30",
    "tickettype_name":"GROUP",
    "tickettype_name_short":"GROUP"
 },
 {
    "event_id":2815,
    "pricelocation_id":2075,
    "tickettype_id":475,
    "tickets_actual":0,
    "tickets_forecast":41,
    "tickets_benchmark":49.61032433,
    "event_datetime":"2020-06-15T19:10:00",
    "event_name":"ARIZONA DIAMONDBACKS",
    "event_name_short":"DIAMONDBACKS",
    "event_name_abbr":"ARI",
    "pricelocation_name":"Y30",
    "pricelocation_name_abbr":"Y30",
    "tickettype_name":"GROUP",
    "tickettype_name_short":"GROUP"
 },
 {
    "event_id":2847,
    "pricelocation_id":2075,
    "tickettype_id":475,
    "tickets_actual":0,
    "tickets_forecast":77,
    "tickets_benchmark":49.37150137,
    "event_datetime":"2020-08-26T19:10:00",
    "event_name":"LOS ANGELES ANGELS OF ANAHEIM",
    "event_name_short":"ANGELS",
    "event_name_abbr":"LAA",
    "pricelocation_name":"Y30",
    "pricelocation_name_abbr":"Y30",
    "tickettype_name":"GROUP",
    "tickettype_name_short":"GROUP"
 },
 {
    "event_id":2848,
    "pricelocation_id":2075,
    "tickettype_id":475,
    "tickets_actual":0,
    "tickets_forecast":77,
    "tickets_benchmark":49.37150137,
    "event_datetime":"2020-08-27T19:10:00",
    "event_name":"SAN DIEGO PADRES",
    "event_name_short":"PADRES",
    "event_name_abbr":"SD",
    "pricelocation_name":"Y30",
    "pricelocation_name_abbr":"Y30",
    "tickettype_name":"GROUP",
    "tickettype_name_short":"GROUP"
 },
 {
    "event_id":2849,
    "pricelocation_id":2075,
    "tickettype_id":475,
    "tickets_actual":0,
    "tickets_forecast":77,
    "tickets_benchmark":89.86836991,
    "event_datetime":"2020-08-28T19:10:00",
    "event_name":"SAN DIEGO PADRES",
    "event_name_short":"PADRES",
    "event_name_abbr":"SD",
    "pricelocation_name":"Y30",
    "pricelocation_name_abbr":"Y30",
    "tickettype_name":"GROUP",
    "tickettype_name_short":"GROUP"
 },
 {
    "event_id":2850,
    "pricelocation_id":2075,
    "tickettype_id":475,
    "tickets_actual":0,
    "tickets_forecast":77,
    "tickets_benchmark":128.9699566,
    "event_datetime":"2020-08-29T18:10:00",
    "event_name":"SAN DIEGO PADRES",
    "event_name_short":"PADRES",
    "event_name_abbr":"SD",
    "pricelocation_name":"Y30",
    "pricelocation_name_abbr":"Y30",
    "tickettype_name":"GROUP",
    "tickettype_name_short":"GROUP"
 },
 {
    "event_id":2851,
    "pricelocation_id":2075,
    "tickettype_id":475,
    "tickets_actual":0,
    "tickets_forecast":77,
    "tickets_benchmark":51.51414159,
    "event_datetime":"2020-08-30T13:10:00",
    "event_name":"SAN DIEGO PADRES",
    "event_name_short":"PADRES",
    "event_name_abbr":"SD",
    "pricelocation_name":"Y30",
    "pricelocation_name_abbr":"Y30",
    "tickettype_name":"GROUP",
    "tickettype_name_short":"GROUP"
 },
 {
    "event_id":2852,
    "pricelocation_id":2075,
    "tickettype_id":475,
    "tickets_actual":0,
    "tickets_forecast":77,
    "tickets_benchmark":107.0126903,
    "event_datetime":"2020-09-11T19:10:00",
    "event_name":"ARIZONA DIAMONDBACKS",
    "event_name_short":"DIAMONDBACKS",
    "event_name_abbr":"ARI",
    "pricelocation_name":"Y30",
    "pricelocation_name_abbr":"Y30",
    "tickettype_name":"GROUP",
    "tickettype_name_short":"GROUP"
 },
 {
    "event_id":2853,
    "pricelocation_id":2075,
    "tickettype_id":475,
    "tickets_actual":39,
    "tickets_forecast":38,
    "tickets_benchmark":124.0716369,
    "event_datetime":"2020-09-12T18:10:00",
    "event_name":"ARIZONA DIAMONDBACKS",
    "event_name_short":"DIAMONDBACKS",
    "event_name_abbr":"ARI",
    "pricelocation_name":"Y30",
    "pricelocation_name_abbr":"Y30",
    "tickettype_name":"GROUP",
    "tickettype_name_short":"GROUP"
 },
 {
    "event_id":2854,
    "pricelocation_id":2075,
    "tickettype_id":475,
    "tickets_actual":78,
    "tickets_forecast":0,
    "tickets_benchmark":65.53001741,
    "event_datetime":"2020-09-13T13:10:00",
    "event_name":"ARIZONA DIAMONDBACKS",
    "event_name_short":"DIAMONDBACKS",
    "event_name_abbr":"ARI",
    "pricelocation_name":"Y30",
    "pricelocation_name_abbr":"Y30",
    "tickettype_name":"GROUP",
    "tickettype_name_short":"GROUP"
 },
];

function onChange(pagination, filters, sorter, extra) {
  console.log('params', pagination, filters, sorter, extra);
}

function App() {
  return (
    <div className="App">
      <Row gutter={[16,16]}>
        <Col span={12}>
          <Table
            columns={columns}
            dataSource={data}
            onChange={onChange}
            onRow={(record, rowIndex) => {
              return {
                onClick: event => {}, // click row
              };
            }}
            onHeaderRow={column => {
              return {
                onClick: () => {}, // click header row
              };
            }} 
          />
        </Col>
        <Col span={12}>
          <Horizontal_Stacked />
        </Col>
      </Row>
    </div>
  );
}

export default App;
