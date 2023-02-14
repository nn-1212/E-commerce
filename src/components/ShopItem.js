import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
    
`
const Img = styled.img`

`

const Title = styled.div`

`

const Button = styled.button`

`

const ShopItem = (props) => {
  return (
    <div>
        <Container>
            <Img src={props.item.img}></Img>
            <Title>{props.item.title}</Title>
            <Button></Button>
        </Container>
    </div>
  )
}

export default ShopItem
