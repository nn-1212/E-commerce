import React from 'react'
import styled from '@emotion/styled'
import { ShoppingCartOutlined,FavoriteBorderOutlined } from '@mui/icons-material'


const Container = styled.div`
    flex:1;
    margin: 5px;
    height: 500px;
    min-width: 280px;
    position: relative;
`

const Img = styled.img`
    width: 100%;
    height: 90%;
    object-fit: cover;
    

`
 
const Info = styled.div`  
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
     
    
`

// const Circle = styled.div`
//     background-color: white;
//     border-radius: 50%;
//     padding: 10px;
//     margin: 10px;
//     opacity:0.7;
//     cursor: pointer;
// `

const Icon = styled.div`
    color: gray;
    margin: 3px;

    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    opacity: 0.7;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

`


const ProductItem = (props) => {
  return (
    <Container>    
      <Img src={props.item.img}/>
      <Info>
        <Icon>
            <ShoppingCartOutlined/>
        </Icon>
        <Icon>
            <FavoriteBorderOutlined/>
        </Icon>
      </Info>
    </Container>
  )
}

export default ProductItem
