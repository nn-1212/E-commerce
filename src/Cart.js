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
    font-weight: 400;
    /* background-color: white; */
    /* border: 1px solid black; */
    cursor: pointer;

    border: ${(props)=> props.type === 'filled' && "none"};
    background-color: ${(props)=> props.type === 'filled' && "black"};
    color: ${(props)=> props.type === 'filled' && "white"}
    
`
const TopText = styled.div`
    text-decoration: underline;
`

const Text = styled.span`
    margin: 0 10px;
`

const Bottom = styled.div``

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
        <Bottom></Bottom>
      </Wrapper>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default Cart
