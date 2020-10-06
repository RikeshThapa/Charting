import React from 'react';
import ReactDOM from 'react-dom';
import { Table, Row, Col } from 'antd';

import Horizontal_Stacked from './charts/components/Horizontal_Stacked';

import './App.css';
import 'antd/dist/antd.css';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Chinese Score',
    dataIndex: 'chinese',
    sorter: {
      compare: (a, b) => a.chinese - b.chinese,
      multiple: 3,
    },
  },
  {
    title: 'Math Score',
    dataIndex: 'math',
    sorter: {
      compare: (a, b) => a.math - b.math,
      multiple: 2,
    },
  },
  {
    title: 'English Score',
    dataIndex: 'english',
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    chinese: 98,
    math: 60,
    english: 70,
  },
  {
    key: '2',
    name: 'Jim Green',
    chinese: 98,
    math: 66,
    english: 89,
  },
  {
    key: '3',
    name: 'Joe Black',
    chinese: 98,
    math: 90,
    english: 70,
  },
  {
    key: '4',
    name: 'Jim Red',
    chinese: 88,
    math: 99,
    english: 89,
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
