import { Button, Card, Col, Collapse, DatePicker, Descriptions, Divider, Image, Input, Modal, Row, Segmented, Space, TimePicker } from "antd"
import React, { useState } from "react"
import { SearchOutlined, DownOutlined, MinusOutlined, PlusOutlined,
  PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';

const { RangePicker } = TimePicker
const { TextArea } = Input
const detailItems = [
  {
    key: 1,
    label: 'Details amount',
    children: 
    <div>
      <Row justify="space-between">
        <Col>Subtotal</Col>
        <Col>$100.00</Col>
      </Row>
      <Row justify="space-between">
        <Col>Discount (50%)</Col>
        <Col>-$50.00</Col>
      </Row>
      <Row justify="space-between">
        <Col>Credit (1h)</Col>
        <Col>-$5.00</Col>
      </Row>
    </div>
  }
]
const pricingItems = [
  {key: 1, label: 'All day', children: <span><b>$40</b>/day</span>},
  {key: 2, label: 'Half day', children: <span><b>$20</b>/day</span>},
  {key: 3, label: 'Hourly', children: <span><b>$10</b>/hour</span>}
]

const BookModal: React.FC = (props) => {
  const [payment, setPayment] = useState('hourly')
  const [quantity, setQuantity] = useState(1)
  const [bookingNotes, setBookingNotes] = useState(false)
  const paymentList = [
    { label: 'Hourly', value: 'hourly' },
    { label: 'All Day', value: 'all_day' },
    { label: 'Half Day', value: 'half_day' }
  ]
  return (
    <Modal
      title="Event space"
      width={1000}
      centered
      open={props.modalBook}
      onCancel={() => props.setModalBook(false)}
      footer={null}
    >
      <p>Pyrmont, Sydney</p>
      <Row gutter={10}>
        <Col xl={12}>
          <Image src="images/img_modal1.png" />
          <Space style={{marginTop: '5px'}}>
            <Image src="images/img_modal1.png" />
            <Image src="images/img_modal1.png" />
            <Image src="images/img_modal1.png" />
            <Image src="images/img_modal1.png" />
            <Image src="images/img_modal1.png" />
          </Space>
          <h3>Description</h3>
          <p>One of our standout spaces is our spacious and well-lit room, designed to cater to teams or individuals who require a private and productive workspace. This room is equipped with comfortable chairs, adjustable desks, high-speed internet, and plenty of power...</p>
          <Button type="link" style={{padding: 0}}>Show more</Button>
          <Divider dashed style={{margin: '5px 0'}}/>
          <h3>Pricing</h3>
          <Descriptions items={pricingItems} />
          <Divider dashed style={{margin: '5px 0'}}/>
        </Col>
        <Col xl={12}>
          <Card size='small' bodyStyle={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#F3F4FA', minHeight: '550px'}} headStyle={{border: 'none', background: '#F3F4FA'}} title="Booking Details">
            <Segmented value={payment} onChange={(v) => setPayment(v)} options={paymentList} />
            <Input style={{marginTop: '10px'}} placeholder="North Strathfield" prefix={<SearchOutlined />} suffix={<DownOutlined />} />
            <Row style={{marginTop: '10px'}} justify="space-between">
              <Col>
                <DatePicker />
              </Col>
              <Col>
                <RangePicker disabled={payment !== 'hourly'} use12Hours format="h:mm a" />
              </Col>
            </Row>
            <Row style={{marginTop: '10px'}} justify="space-between">
              <Col>
                Quantity
              </Col>
              <Col>
                <Button size="small" onClick={() => setQuantity(quantity - 1)}><MinusOutlined /></Button>
                <span style={{margin: '0 10px'}}>{quantity}</span>
                <Button size="small" onClick={() => setQuantity(quantity + 1)}><PlusOutlined /></Button>
              </Col>
            </Row>
            <Divider dashed style={{margin: '5px 0'}}/>
            {bookingNotes ?
              <div style={{ marginBottom: '15px' }}>
                <Button onClick={() => setBookingNotes(!bookingNotes)} style={{color: 'red'}} type="link" size="small">
                  <MinusCircleOutlined /> Remove Booking Notes
                </Button>
                <TextArea rows={2} placeholder="Add note here..." />
              </div>
              :
              <div>
                <Button onClick={() => setBookingNotes(!bookingNotes)} type="link" size="small">
                  <PlusCircleOutlined /> Booking Notes
                </Button>
              </div>
            }

            <Card style={{marginTop: 'auto'}} size="small">
              <Collapse expandIconPosition="end" size="small" ghost items={detailItems} />
              <Divider style={{margin: '5px 0'}}/>
              <div style={{padding: '9px'}}>
                <Row justify="space-between">
                  <Col>GST</Col>
                  <Col>$4.55</Col>
                </Row>
                <Row justify="space-between">
                  <Col><span>Total</span></Col>
                  <Col><span>$44.55</span></Col>
                </Row>
              </div>
            </Card>

            <Button onClick={() => props.setModalBook(false)} type="primary" style={{marginTop: '10px'}}>Add to Cart</Button>
          </Card>
        </Col>
      </Row>
    </Modal>
  )
}

export default BookModal;
