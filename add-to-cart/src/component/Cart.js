import React from 'react'
import { Card, Avatar, Typography, Row, Col, Input, Badge, Button,Affix } from 'antd';
import {  MinusOutlined, PlusOutlined,  ShoppingCartOutlined } from '@ant-design/icons';
import data from './data.json'
import { useDispatch, useSelector } from 'react-redux';
import { incr,decr,cleareCart} from '../featurs/cartSlice'


const { Meta } = Card;
const {Title,Text} = Typography

export default function Cart() {
    const itemCount = useSelector((state)=>state.cart.itemCount)
    const totleAmount = useSelector((state)=>state.cart.totleAmount)
    const count = useSelector((state)=>state.cart.itemLst)
    const dispatch = useDispatch()
  return (
    <div style={{backgroundColor : "#c2c3c5"}}>
        
        <Affix offsetTop={0}>
            <div
            style={{
                backgroundColor: '#c2c3c5',
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                // marginLeft: "5%",
                marginRight: "5%",
                borderBottom :'0.5px solid #9c9c9c' ,
                
            }}
            >
            <Title style={{ marginLeft: "5%",}}>Add to cart Page</Title>
            <div
                style={{
                display: "flex",
                justifyContent: "space-around",
                paddingTop: 10,
                marginRight: 50
                }}
            >
                <Badge count={itemCount}>
                <ShoppingCartOutlined style={{ fontSize: "40px" }} />
                </Badge>
                <Title level={3} style={{ paddingLeft: "10px" }}>
                Total Amount : {totleAmount} ₹
                </Title>
            </div>
            </div>
      </Affix>
        
       <div>
        <Row style={{ width:'90%' ,margin:'auto' }}>
        {
            data.data.map((item)=>{
                return(
                <Col lg={6} sm={12} xs={24}>
                    <Card hoverable style={{
                        // width: 280,
                        height: 480,
                        margin: 25
                        }}
                        cover={
                        <img alt="example" src="4.jpg"  height='200px' />
                        }
                        actions={[
                            <PlusOutlined style={{ fontSize: '25px' }} onClick={()=>{dispatch(incr({price:item.price , name:item.name , id:item.id})) }}/>,
                            <Input value={count[item.id]} defaultValue="0"/>,
                            <MinusOutlined style={{ fontSize: '25px' }} onClick={()=>dispatch(decr({price:item.price , name:item.name , id:item.id}))}/>
                        ]}
                    >
                        
                        <Meta 
                        title={item.name}
                        description={item.dec}
                        />
                        <Title level={5} style={{paddingTop:'15px'}}>price = {item.price} ₹</Title>
                    </Card>
                    </Col>
                )
            })   
        }
        </Row>
        <Button type="primary" size='large' style={{marginTop:20}} onClick={()=>dispatch(cleareCart())}>Clear Cart</Button>
        </div>
       
        
    </div>
  )
}
