import React from 'react';
import { Menu } from 'antd';
// import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import CardProductComponent from '../../components/CardProductComponent/CardProductComponent';

const items = [
  {
    key: 'sub1',
    label: 'Collection',
    children: [
      {
        key: '1',
        label: 'Option 1',
      },
      {
        key: '2',
        label: 'Option 2',
      },
    ],
  },
  {
    key: 'sub2',
    label: 'Color',
    children: [
      {
        key: '3',
        label: 'Option 3',
      },
      {
        key: '4',
        label: 'Option 4',
      },
    ],
  },
  {
    key: 'sub3',
    label: 'Size',
    children: [
      {
        key: '5',
        label: 'Option 5',
      },
      {
        key: '6',
        label: 'Option 6',
      },
    ],
  },
  {
    key: 'sub4',
    label: 'Price',
    children: [
      {
        key: '7',
        label: '100.000đ - 300.000đ',
      },
      {
        key: '8',
        label: '300.000đ - 600.000đ',
      },
    ],
  },
];

const HomePage = () => {
  const onClick = (e) => {
    console.log('click ', e);
  };

  return (
    <div style={{ display: 'flex', padding: '20px' }}>
      <Menu
        onClick={onClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        items={items}
      />
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginLeft: '20px' }}>
        <CardProductComponent />
        <CardProductComponent />
        <CardProductComponent />
        <CardProductComponent />
        <CardProductComponent />
        <CardProductComponent />
        <CardProductComponent />
        <CardProductComponent />
        <CardProductComponent />
      </div>
    </div>
  );
};

export default HomePage;
