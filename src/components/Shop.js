import React from 'react'
import styled from '@emotion/styled'

import {shopData} from '../data/ShopData'
import ShopItem from './ShopItem'

const Container = styled.div`
    display: flex;
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
