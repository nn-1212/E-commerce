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

const Bottom = styled.div``

const Info = styled.div``
const Product = styled.div``
const ProductDetail = styled.div``
const Img = styled.img``
const Detail = styled.div``
const ProductName = styled.div``
const ProductID = styled.div``
const ProductColor = styled.div``
const ProductSize = styled.div``

const Summary = styled.div``

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
                            <ProductName>白色澎洋裝</ProductName>
                            <ProductID><b>產品編號:</b></ProductID>
                            <ProductColor><b>顏色:</b></ProductColor>
                            <ProductSize><b>尺寸:</b></ProductSize>
                        </Detail>
                    </ProductDetail>
                </Product>
            </Info>
            <Summary></Summary>

        </Bottom>
      </Wrapper>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default Cart
