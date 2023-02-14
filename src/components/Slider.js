import React, { useState } from 'react'
import styled from '@emotion/styled'
import { ArrowBackIosNewOutlined,ArrowForwardIosOutlined } from '@mui/icons-material';
import { handleBreakpoints } from '@mui/system';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(0vw);
`

const SlideContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${(props)=>{
        return props.bg
    }}
`

const ImgContainer = styled.div`
    flex: 1;
    height: 100%;
    background-color: blanchedalmond;
`

const Img = styled.div`
    height: 80%;
`

const InfoContainer = styled.div`
    flex: 1; 
    padding: 50px;
`

const Title = styled.h1`
    font-size: 70px;
`
const Desc = styled.p`
    font-size: 20px;
    margin: 50px 0px;
    font-weight: 500;
    letter-spacing: 1px;
`
const Button = styled.button`
    padding: 10px;
    font-size: 15px;
    background-color: transparent;
    cursor: pointer;
`




const Arrow = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top:0;
    bottom: 0;
    margin: auto;
    left: ${(props)=>{
        return (props.direction === "left" && "10px")
    }};
    right:${(props)=>{
       return (props.direction === "right" && "10px")
    }};
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`


const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)
    
    const handleClick = (direction)=>{

    }

  return (
    <Container>
      <Arrow direction="left" onclick={handleClick}>
        <ArrowBackIosNewOutlined/>
      </Arrow>
        <Wrapper>    
            <SlideContainer bg="f5fafd">    
                <ImgContainer>
                    <Img src="https://images.unsplash.com/photo-1675953881447-84b86660f0e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"/>
                </ImgContainer>
                  <InfoContainer>
                    <Title>SUNMMER SALE</Title>
                    <Desc>夏日大折扣 上衣3折起、下身5折起</Desc>
                    <Button>SHOP NOW</Button>
                  </InfoContainer>
            </SlideContainer>  

            <SlideContainer bg="fcf1ed">    
                <ImgContainer>
                    <Img src="https://images.unsplash.com/photo-1675953881447-84b86660f0e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"/>
                </ImgContainer>
                  <InfoContainer>
                    <Title>SUNMMER SALE</Title>
                    <Desc>夏日大折扣 上衣3折起、下身5折起</Desc>
                    <Button>SHOP NOW</Button>
                  </InfoContainer>
            </SlideContainer>
       </Wrapper>
       <Arrow direction="right" onclick={handleClick}>
        <ArrowForwardIosOutlined/>
       </Arrow> 
    </Container>
  )
}

export default Slider
