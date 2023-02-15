import React from 'react'
import styled from '@emotion/styled'

import Navbar from './components/Navbar'
import Announcement from './components/Announcement'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'


const Container = styled.div`
    padding: 20px;
`

const Wrapper = styled.div`
    margin-top: 30px;
`
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`
const TOP = styled.div`
    display: flex;
    justify-content: space-between;
`

const TopButton = styled.button`
    padding: 15px 30px ;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer; 

    /* border: ${(props)=> props.type === 'filled' && "none"};
    background-color: ${(props)=> props.type === 'filled' && "black"};
    color: ${(props)=> props.type === 'filled' && "white"}  */

    
    
`
const TopText = styled.div`
    text-decoration: underline;
`

const Text = styled.span`
    margin: 0 10px;
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`

const Info = styled.div`
    flex:3;
`
const Product = styled.div`
    display: flex;
    justify-content: space-between;
`
const ProductDetail = styled.div`
    display: flex;
    flex:2;
`
const Img = styled.img`
    width: 100px;
    height: 150px;
`
const Detail = styled.div`
    padding:20px 50px;
    display: flex;
    flex-direction: column;
    justify-content:space-around;
    
   
`
const ProductName = styled.span``
const ProductID = styled.span``
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
`
const ProductSize = styled.span``


const ProductPrice = styled.div`
    flex:1
`

const Summary = styled.div`
    flex:1;
`

const Cart = () => {
  return (
    <Container>
      <Announcement/>
      <Navbar/>
      <Wrapper>
        <Title>購物車</Title>
        <TOP>
            <TopButton >繼續購物</TopButton>
            <TopText>
                <Text>購物籃(2)</Text>
                <Text>追蹤清單(0)</Text>
            </TopText>
            <TopButton type="filled">結帳</TopButton>
        </TOP>
        <Bottom>
            <Info>
                <Product>
                    <ProductDetail>
                        <Img src="https://images.unsplash.com/photo-1674822876913-c717477e98eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"/>
                        <Detail>
                            <ProductName><b>產品名稱:</b>白色澎洋裝</ProductName>
                            <ProductID><b>產品編號:</b>99991999</ProductID>
                            <ProductColor><b>顏色:</b></ProductColor>
                            <ProductSize><b>尺寸:</b>S</ProductSize>
                        </Detail>
                    </ProductDetail>
                    <ProductPrice><b>價錢:</b>1800</ProductPrice>
                </Product>
            </Info>
            <Summary>summary</Summary>
        </Bottom>
      </Wrapper>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default Cart
