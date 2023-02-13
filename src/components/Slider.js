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

`

const ImgContainer = styled.div`

`

const InfoContainer = styled.div`
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
`


const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
        <ArrowBackIosNewOutlined/>
      </Arrow>
        <Wrapper>
            <SlideContainer>
                <ImgContainer></ImgContainer>
                <ImgContainer></ImgContainer>
            </SlideContainer>

        </Wrapper>
       <Arrow direction="right">
        <ArrowForwardIosOutlined/>
       </Arrow> 
    </Container>
  )
}

export default Slider
