import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
   flex:1;
   justify-content: space-between;
   margin: 5px;
   height: 70vh;
   position: relative;

   @media screen and (max-width: 820px){
        height: 30vh;
    }

`
const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
     
`

const Info = styled.div`
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
`

const Title = styled.h1`
    color: white;
`

const Button = styled.button`
    opacity: 0.7;
    border: none;
    padding: 10px;
    cursor: pointer;
`

const ShopItem = (props) => {
  return (
    
        <Container>
            <Img src={props.item.img}></Img>
            <Info>
                <Title>{props.item.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
        </Container>
  )
}

export default ShopItem
