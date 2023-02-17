import React from 'react'
import styled from '@emotion/styled'

import {shopData} from '../data/shopData'
import ShopItem from './ShopItem'

const Container = styled.div`
    display: flex;
    padding: 20px;

    @media screen and (max-width: 390px){
        display: block;
        padding: 0;
        
    }
`


const Shop = () => {
  return (
    <div>
      <Container>
        {shopData.map((item)=>{
           return (
            <ShopItem item={item}/>
            )
        })}

      </Container>
    </div>
  )
}

export default Shop
