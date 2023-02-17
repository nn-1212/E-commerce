import React, { useState } from 'react'
import styled from '@emotion/styled'
import { ArrowBackIosNewOutlined,ArrowForwardIosOutlined } from '@mui/icons-material';
import { sliderIndexItem } from '../data/slideData';


const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;

    @media screen and (max-width: 890px){
        display: none;
    }
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${(props)=> props.slideIndex * -100}vw);
    transition: all 1.5s ;
    
`

const SlideContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${(props)=>props.bg}
`

const ImgContainer = styled.div`
    flex: 1;
    height: 100%;
`

const Img = styled.img`
    height: 100%;
    width: 80%;
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
    right:${(props)=> {
        return (props.direction === "right" && "10px")
    }};
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`


const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)
    
    const handleClick = (direction)=>{
        if (direction === "left"){
            setSlideIndex((slideIndex)=> slideIndex > 0 ? slideIndex - 1 : 2)
        } else {
            setSlideIndex((slideIndex)=> slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }

  return (
    <Container>
      <Arrow direction="left" onClick={()=>handleClick("left")}>
        <ArrowBackIosNewOutlined/>
      </Arrow>
        <Wrapper slideIndex={slideIndex}>    
        {sliderIndexItem.map((item)=>
            (
                <SlideContainer bg={item.bg}>    
                    <ImgContainer>
                        <Img src={item.img}/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <Button>SHOP NOW</Button>
                    </InfoContainer>
                </SlideContainer>  )
            )}           
        </Wrapper>
      <Arrow direction="right" onClick={()=>handleClick("right")}>
        <ArrowForwardIosOutlined/>
      </Arrow> 
    </Container>
  )
}

export default Slider
