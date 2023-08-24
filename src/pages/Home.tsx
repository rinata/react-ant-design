import React, { useState } from 'react';
import { Button, Card, Col, DatePicker, Divider, Image, Input, Layout, Menu, Radio, Row, Segmented, Select, Space, Tag, TimePicker } from 'antd';
import type { MenuProps } from 'antd';
import { HeartOutlined, BellOutlined, ShoppingCartOutlined, 
  CalendarOutlined, ApartmentOutlined, UnorderedListOutlined, 
  AppstoreOutlined, CreditCardOutlined, SearchOutlined, DownOutlined,
  PhoneFilled, MailFilled, CompassOutlined, ClockCircleOutlined, UserOutlined } from '@ant-design/icons';
import Search from 'antd/es/input/Search';
import Sider from 'antd/es/layout/Sider';
import BookModal from './BookModal.tsx';

const { Option } = Select;
const { Header, Content } = Layout;
const { RangePicker } = TimePicker

const items: MenuProps['items'] = [
  { key: 1, label: <HeartOutlined /> },
  { key: 2, label: <BellOutlined /> },
  { key: 3, label: <Button type="default"><ShoppingCartOutlined /> Cart</Button>  },
  { key: 4, label: <Button type="default"><ShoppingCartOutlined /> Sign In</Button> }
];

const rooms = [
  {
    key: 1,
    id: '1',
    name: 'Room 01',
    is_available: true,
    available: 'All day (9:00am - 6:00pm)',
    location: 'Pyrmont, Sydney',
    price: '$12',
    capacity: '20',
    image: 'images/img_place2.png'
  },
  {
    key: 2,
    id: '2',
    name: 'Room 02',
    is_available: false,
    available: 'Next available from 10:00am',
    location: 'Pyrmont, Sydney',
    price: '$12',
    capacity: '20',
    image: 'images/img_place3.png'
  },
  {
    key: 3,
    id: '3',
    name: 'Room 03',
    is_available: false,
    available: 'Next available from 10:00am',
    location: 'Pyrmont, Sydney',
    price: '$12',
    capacity: '20',
    image: 'images/img_place4.png'
  },
  {
    key: 4,
    id: '4',
    name: 'Room 04',
    is_available: true,
    available: 'All day (9:00am - 6:00pm)',
    location: 'Pyrmont, Sydney',
    price: '$12',
    capacity: '20',
    image: 'images/img_place5.png'
  },
  {
    key: 5,
    id: '5',
    name: 'Room 05',
    is_available: true,
    available: 'All day (9:00am - 6:00pm)',
    location: 'Pyrmont, Sydney',
    price: '$12',
    capacity: '20',
    image: 'images/img_place2.png'
  },
  {
    key: 6,
    id: '6',
    name: 'Room 06',
    is_available: false,
    available: 'Next available from 10:00am',
    location: 'Pyrmont, Sydney',
    price: '$12',
    capacity: '20',
    image: 'images/img_place3.png'
  },
  {
    key: 7,
    id: '7',
    name: 'Room 07',
    is_available: false,
    available: 'Next available from 10:00am',
    location: 'Pyrmont, Sydney',
    price: '$12',
    capacity: '20',
    image: 'images/img_place4.png'
  }
]

const Home: React.FC = () => {
  const [sort, setSort] = useState('unordered')
  const [formatHour, setFormatHour] = useState('am')
  const [payment, setPayment] = useState('hourly')
  const [modalBook, setModalBook] = useState(false)
  const [modalSelected, setModalSelected] = useState('')
  const paymentList = [
    { label: 'Hourly', value: 'hourly' },
    { label: 'All Day', value: 'all_day' },
    { label: 'Half Day', value: 'half_day' }
  ]
  const openModalBook = (modal, key) => {
    const selectedModal = rooms.find((v) => v.key === key)?.id
    setModalSelected(selectedModal ? selectedModal : '')
    setModalBook(true)
  }
  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          background: 'white'
        }}
      >
        <Image src="Logo.png" alt="logo hamlet" />
        <div className="demo-logo" />
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={items}
          style={{ marginLeft: 'auto' }}
        />
      </Header>
      <div style={{ display: 'flex', padding: '10px 50px', background: 'white', borderTop: '1px solid #0306201A' }}>
        <Space>
          <Button shape="round" type="default">
            <CalendarOutlined /> Meeting Room
          </Button>
          <Button shape="round" type="default">
            <ApartmentOutlined /> Desk Pass
          </Button>
          <Button shape="round" type="default">
            More
          </Button>
        </Space>
        <Space style={{ marginLeft: 'auto' }}>
          <Search placeholder="Search room or member..." allowClear style={{ width: 200 }} />

          <Select defaultValue="all">
            <Option value="all">Filter By: All</Option>
            <Option value="name">Filter By: Name</Option>
          </Select>

          <Radio.Group value={sort} onChange={(e) => setSort(e.target.value)} buttonStyle="solid">
            <Radio.Button value="unordered"><UnorderedListOutlined /></Radio.Button>
            <Radio.Button value="ordered"><AppstoreOutlined /></Radio.Button>
          </Radio.Group>
        </Space>
      </div>
      <Layout hasSider style={{ padding: '10px 50px' }}>
        <Content>
          <Card size="small">
            <div style={{display: 'flex'}}>
              <Segmented value={payment} onChange={(v) => setPayment(v)} options={paymentList} />

              {payment === "half_day" &&
                <Radio.Group style={{marginLeft: '20px'}} value={formatHour} onChange={(e) => setFormatHour(e.target.value)}>
                  <Radio.Button value="am">AM</Radio.Button>
                  <Radio.Button value="pm">PM</Radio.Button>
                </Radio.Group>
              }

              <Tag style={{ marginLeft: 'auto', alignSelf: 'center' }}>
                <CreditCardOutlined style={{ marginRight: '5px', color: '#1677FF' }} />
                <b>2 hrs</b>
              </Tag>
            </div>

            <Row style={{marginTop: '10px'}} gutter={10} justify="space-between">
              <Col span={14}>
                <Input placeholder="North Strathfield" prefix={<SearchOutlined />} suffix={<DownOutlined />} />
              </Col>
              <Col>
                <DatePicker />
              </Col>
              <Col>
                <RangePicker disabled={payment !== 'hourly'} use12Hours format="h:mm a" />
              </Col>
            </Row>
          </Card>
          <div style={{ margin: '16px 0' }}>
            Found {rooms.length} spaces
          </div>
          <div>
            <Row gutter={[12, 12]} >
              {rooms.map((room) =>
                <Col key={room.key} md={12} sm={24} xs={24}>
                  <Card size="small">
                    <Row gutter={15}>
                      <Col>
                        <Image src={room.image} alt="" />
                      </Col>
                      <Col span={16}>
                        <Row justify="space-between">
                          <Col>
                            <b>{room.name}</b>
                          </Col>
                          <Col>
                            {room.is_available ?
                              <Tag style={{margin: 0}} color="green">Available</Tag>
                              :
                              <Tag style={{margin: 0}} color="red">Occupied</Tag>
                            }
                          </Col>
                        </Row>
                        <p>
                          <ClockCircleOutlined /> {room.available}<br/>
                          <SearchOutlined /> {room.location}
                        </p>
                        <Row justify="space-between">
                          <Col>
                            <span style={{fontWeight: 'bold', fontSize: '18px', color: "#2F54EB"}}>{room.price}</span> <span>per hr</span>
                            <Divider type="vertical" />
                            <UserOutlined /> <b>{room.capacity}</b>
                          </Col>
                          <Col>
                            <Button disabled={!room.is_available} onClick={() => openModalBook(true, room.key)} type="primary" size="middle">Book</Button>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              )}
              <BookModal modalBook={modalBook} modalSelected={modalSelected} setModalBook={(e: boolean) => setModalBook(e)} />
            </Row>
          </div>
        </Content>

        <Sider width={500} breakpoint="md" collapsedWidth="0" style={{ background: 'transparent', padding: '0 0 0 20px' }}>
          <Card>
            <Row gutter={10}>
              <Col span={14}>
                <div>
                  <b>Bondi Junction, Sydney NSW</b><br/>
                  <span style={{color: '#9A9A9A'}}>33 Bondi Road, Bondi Junction NSW 2000</span>
                </div>
                <p>
                  <b>Open hours</b><br/>
                  <span>Mon to Fri 9am - 6pm</span><br/>
                  <span>After hours bookings <span style={{color: '#2F54EB'}}>Request here</span></span>
                </p>
                <p>
                  <PhoneFilled /> <span style={{color: '#2F54EB'}}>+61 02 924 577</span>
                </p>
                <p>
                  <MailFilled /> <span style={{color: '#2F54EB'}}>reception@space.com</span>
                </p>
                <p>
                  <CompassOutlined /> <span style={{color: '#2F54EB'}}>www.space.com</span>
                </p>
              </Col>
              <Col>
                <Image src='images/img_place1.png' alt='place1' />
              </Col>
              <Image src="images/img_map.png" alt="map" style={{width: '100%'}} />
            </Row>
          </Card>
        </Sider>
      </Layout>
    </Layout>
  );
};

export default Home;
