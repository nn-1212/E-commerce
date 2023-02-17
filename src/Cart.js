import React from 'react'
import styled from '@emotion/styled'

import Navbar from './components/Navbar'
import Announcement from './components/Announcement'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

import { Remove, Add } from '@mui/icons-material'

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

    border: ${(props)=> props.type === 'filled' && "none"};
    background-color: ${(props)=> props.type === 'filled' && "black"};
    color: ${(props)=> props.type === 'filled' && "white"} ;

    @media screen and (max-width: 890px){
        display: ${(props)=> props.type === 'filled' && "none"};
        background-color: ${(props)=> props.type === 'filled' && "none"}
    }    
`
const TopText = styled.div`
    text-decoration: underline;

    @media screen and (max-width: 890px){
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    
`

const Text = styled.span`
    margin: 0 10px;

    @media screen and (max-width: 890px){
       padding: 5px 0;
    }
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

    @media screen and (max-width: 890px){
        display: block;
    }
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

    @media screen and (max-width: 890px){
        padding:0 10px 0 10px;

    }
    
   
`
const ProductName = styled.span``
const ProductID = styled.span``
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid black;
    background-color:${(props)=> props.color} ;
`
const ProductSize = styled.span``


const ProductPrice = styled.div`
    flex:1;
    display: flex;
    justify-content:flex-start ;
    align-items: center;

    @media screen and (max-width: 890px){
        display: block;
        padding: 30px 40px 30px;
    }
`

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-right: 15px;
`
const Amount = styled.div`
    margin: 10px;
`
const TotalPrice = styled.div``


const Summary = styled.div`
    flex:1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 15px 20px;
    height:50vh;

    @media screen and (max-width: 890px){
        width: 90%;
        margin: 25px 0 0 5px;
        padding-bottom: 0;
        height: 450px;
    }
`

const SummaryTitle =styled.h1`
    font-weight: 300;
`
const SummaryItem =styled.div`
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
    font-size: ${(props)=> props.total === "total" && "24px"};
    font-weight: ${(props)=> props.total === "total" && "500"};
`
const SummaryText =styled.span``
const SummaryPrice =styled.span``
const SummaryButton =styled.button`
    width: 100%;
    padding:10px;
    background-color: black;
    color: white;
    font-weight: 500;
    cursor: pointer;

    @media screen and (max-width: 890px){
        margin-top: 15px;
    }
    
`

const Hr = styled.hr`
    margin: 20px 20px 20px 0px;
`

const Cart = () => { 
  return (
    <Container>
      <Navbar/>
      <Announcement/>
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
                            <ProductColor color="white"></ProductColor>
                            <ProductSize><b>尺寸:</b>S</ProductSize>
                        </Detail>
                    </ProductDetail>
                    <ProductPrice>
                        <AmountContainer>
                            <Remove/>
                            <Amount>2</Amount>
                            <Add/>
                        </AmountContainer>
                        <TotalPrice>TWD 3600</TotalPrice>
                    </ProductPrice>
                </Product>
                <Hr/>
                <Product>
                    <ProductDetail>
                        <Img src="https://images.unsplash.com/photo-1674478969244-a8bbf5e06624?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM0fFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"/>
                        <Detail>
                            <ProductName><b>產品名稱:</b>粉紅泡泡外套</ProductName>
                            <ProductID><b>產品編號:</b>99991998</ProductID>
                            <ProductColor color="pink"></ProductColor>
                            <ProductSize><b>尺寸:</b>M</ProductSize>
                        </Detail>
                    </ProductDetail>
                    <ProductPrice>
                        <AmountContainer>
                            <Remove/>
                            <Amount>1</Amount>
                            <Add/>
                        </AmountContainer>
                        <TotalPrice>TWD 2200</TotalPrice>
                    </ProductPrice>
                </Product>
            </Info>
            <Summary>
                <SummaryTitle>YOUR ORDER</SummaryTitle>
                <SummaryItem>
                    <SummaryText> 小計</SummaryText>
                    <SummaryPrice>TWD 5800</SummaryPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryText>運費</SummaryText>
                    <SummaryPrice>TWD 180</SummaryPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryText>運費折扣</SummaryText>
                    <SummaryPrice>TWD 180</SummaryPrice>
                </SummaryItem>
                <SummaryItem total="total">
                    <SummaryText>合計</SummaryText>
                    <SummaryPrice>TWD 5800</SummaryPrice>
                </SummaryItem>
                <SummaryButton>結帳</SummaryButton>
            </Summary>
        </Bottom>
      </Wrapper>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default Cart

