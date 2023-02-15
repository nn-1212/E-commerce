import React from 'react'
import styled from '@emotion/styled'

import Navbar from './components/Navbar'
import Announcement from './components/Announcement'
import Products from './components/Products'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'


const Container = styled.div`

`

const Title = styled.h1`
    margin: 20px;
`

const FilterContainer = styled.div`
    margin: 20px;
`

const Filter = styled.div`
    display: flex;
`

const FilterText = styled.span`
    font-size: 15px;
    font-weight: 400;
    margin-right: 5px;
`
const Select = styled.select`
`

const Option = styled.option``

  
const ProductList = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Sort:</FilterText>
          <Select>
            <Option>價格高至低</Option>
            <Option>價格低至高</Option>
            <Option>最新上架</Option>
            <Option>熱賣商品</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products/>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default ProductList
