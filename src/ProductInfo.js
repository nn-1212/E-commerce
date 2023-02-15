import React from 'react'
import styled from '@emotion/styled'

import Navbar from './components/Navbar'
import Announcement from './components/Announcement'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

import { Remove, Add } from '@mui/icons-material'

const Container = styled.div`

`

const Wrapper = styled.div`
    display: flex;
    padding: 50px;
    
`
const ImgContainer = styled.div`
    flex: 1;
`
const Img = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0 50px;
`
const Title = styled.h1`
    margin-top: 0;
`
const Desc = styled.p``
const Price = styled.span`
    font-weight: 300;
    font-size: 30px;
`


const FilterContainer = styled.div`
    margin: 20px 0;
`
const Filter = styled.div`
    display: flex;
    width: 140px;
    height: 40px;
    align-items: center;
    margin-top: 5px;
`
const FilterText = styled.p`
    margin-right: 10px;
    font-size: 15px;
`

const Color = styled.div`
    width: 20px;
    height: 20px;
    background-color: ${(props)=> props.color};
    border-radius: 50%;
    margin: 5px;
    cursor: pointer;
`

const Select = styled.select`
    width: 80px;
    height: 25px;
`
const Option = styled.option`
    
`
const AmountContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
` 
const Count = styled.div`
    display: flex;
` 
const Amount = styled.div` 
    border: 1px solid black;
    width: 80px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;

` 
const Button = styled.button`
    background-color: white;
    border: 3px solid teal;
    padding : 10px;
    cursor: pointer;
    font-weight: 500;

    &:hover {
        background-color: teal;
    }

    
` 


const ProductInfo = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Wrapper>
        <ImgContainer>
            <Img src="https://images.unsplash.com/photo-1675332911384-b55fc27f54ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4MDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"/>
        </ImgContainer>
        <InfoContainer>
            <Title>休閒牛仔褲</Title>
            <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime incidunt, vitae libero ex dolor expedita, ab quam rerum cum, et possimus odit. Id quis ipsa, repudiandae quia quaerat maiores aperiam?</Desc>
            <Price> TWD 1280</Price>
            <FilterContainer>
                <Filter>
                    <FilterText>color:</FilterText>
                        <Color color="lightblue"></Color>
                        <Color color="darkblue"></Color>
                        <Color color="grey"></Color>
                </Filter>
                <Filter>
                    <FilterText>size:</FilterText>
                    <Select>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <AmountContainer>
                <Count>
                    <Remove/>
                    <Amount>1</Amount>
                    <Add/>
                </Count>
                <Button>加入購物車</Button>
            </AmountContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default ProductInfo
