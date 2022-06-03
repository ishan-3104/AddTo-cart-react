import React from 'react'
import { Card, Avatar, Typography, Row, Col, Input, Badge, Button } from 'antd';
import {  MinusOutlined, PlusOutlined,  ShoppingCartOutlined } from '@ant-design/icons';
import data from './data.json'
import { useDispatch, useSelector } from 'react-redux';
import { incr,decr,cleareCart} from '../featurs/cartSlice'

const { Meta } = Card;
const {Title,Text} = Typography

export default function Cart() {
    const itemCount = useSelector((state)=>state.cart.itemCount)
    const totleAmount = useSelector((state)=>state.cart.totleAmount)
    const dispatch = useDispatch()
  return (
    <div style={{backgroundColor : "#c2c3c5", height :' 750px'}}>
        <br/>
        
            <Title level={2}>Add to Cart
                <Badge count={itemCount}>
                    <ShoppingCartOutlined  style={{ fontSize: '40px' }}/>
                </Badge>
            </Title>
            <Title >{totleAmount}
            <Button type="primary" size='large' style={{marginTop:20}} onClick={()=>dispatch(cleareCart())}>Clear Cart</Button>
            </Title>
       
        <Row style={{ marginLeft: '20px' }}>
        {
            data.data.map((item)=>{
                return(
                <Col lg={6}>
                    <Card hoverable style={{
                        width: 300,
                        height: 500
                        }}
                        cover={
                        <img alt="example" src="4.jpg"  height='250px' />
                        }
                        actions={[
                            <PlusOutlined style={{ fontSize: '25px' }} onClick={()=>{dispatch(incr({price:item.price , name:item.name , id:item.id})) }}/>,
                            <Input />,
                            <MinusOutlined style={{ fontSize: '25px' }} onClick={()=>dispatch(decr({price:item.price , name:item.name , id:item.id}))}/>
                        ]}
                        >
                        
                        <Meta
                        title={item.name}
                        description={item.dec}
                        />
                        <Title level={5} style={{paddingTop:'20px'}}>price = {item.price} ₹</Title>
                    </Card>
                    </Col>
                )
            })   
        }
        </Row>
        
       
        
    </div>
  )
}
