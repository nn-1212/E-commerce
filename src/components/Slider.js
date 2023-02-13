import React from 'react'
import styled from '@emotion/styled'
import { ArrowBackIosNewOutlined,ArrowForwardIosOutlined } from '@mui/icons-material';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
`

const Wrapper = styled.div`
    height: 100%;
`

const SlideContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
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
`

const Title = styled.h1``
const Desc = styled.p``
const Button = styled.button``




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
`


const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
        <ArrowBackIosNewOutlined/>
      </Arrow>
        <Wrapper>    
            <SlideContainer>    
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
       <Arrow direction="right">
        <ArrowForwardIosOutlined/>
       </Arrow> 
    </Container>
  )
}

export default Slider
