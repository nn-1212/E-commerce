import React from 'react'
import styled from '@emotion/styled'
import { productData } from '../data/productData'
import  ProductItem  from './ProductItem'

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
`

const Products = () => {
  return (
    <Container>
       {productData.map((item)=>{
        return (
        <ProductItem item={item}/>
        )
       })
       }

    </Container>
  )
}

export default Products
