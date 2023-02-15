import React from 'react'
import styled from '@emotion/styled'

import Navbar from './components/Navbar'
import Announcement from './components/Announcement'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'


const Container = styled.div`

`

const Wrapper = styled.div``
const ImgContainer = styled.div``
const Img = styled.img``
const InfoContainer = styled.div``
const Title = styled.h1``
const Desc = styled.p``
const Price = styled.span``

const ProductInfo = () => {
  return (
    <Container>
      <Announcement/>
      <Navbar/>
      <Wrapper>
        <ImgContainer>
            <Img src="https://images.unsplash.com/photo-1675332911384-b55fc27f54ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4MDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"/>
        </ImgContainer>
        <InfoContainer>
            <Title>休閒牛仔褲</Title>
            <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime incidunt, vitae libero ex dolor expedita, ab quam rerum cum, et possimus odit. Id quis ipsa, repudiandae quia quaerat maiores aperiam?</Desc>
            <Price> TWD 1280</Price>

        </InfoContainer>
      </Wrapper>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default ProductInfo
