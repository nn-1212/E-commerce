import React from 'react'
import styled from '@emotion/styled'
// import "../node_modules/bootstrap/dist/css/bootstrap-grid.min.css"

const Container = styled.div`
    height: 60px;
    background-color: green;

`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;


`

const Left = styled.div`
    flex:1
`
const Center = styled.div`
    flex:1

`
const Right = styled.div`
    flex:1
`



export default function Navbar() {
  return (
    
    <div>  

     <Container>
        <Wrapper>
            <Left>1</Left>
            <Center>2</Center>
            <Right>3</Right>
        </Wrapper>
            
        


     </Container>

     
      
    </div>
  )
}
