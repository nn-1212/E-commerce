import React from 'react'
import styled from '@emotion/styled'
// import "../node_modules/bootstrap/dist/css/bootstrap-grid.min.css"

// import SearchIcon from '@mui/icons-material/Search';
import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import Badge from '@mui/material/Badge';




const Container = styled.div`
    height: 60px;
    /* background-color: green; */   

`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background-color: aqua; */
`

const Left = styled.div`
    flex:1;
    display: flex; 
    align-items: center; 
    cursor: pointer;
`

const SearchBar = styled.div`
    font-weight: 200;

`

const SearchContainer = styled.div`
    border: 0.5px solid gray;
    display: flex;  
    align-items: center; 
    margin: 5px;
    


`

const Input = styled.input`
    border:none;
    margin: 5px;
    height: 20px;

`

const Center = styled.div`
    flex:1;
    text-align: center;
 
`

const Logo = styled.h1`
    font-weight: bold;
    
`


const Right = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: flex-end;

`

const MenuItem = styled.div`
    font-size: 14px; 
    cursor: pointer; 
    margin: 10px;
`



export default function Navbar() {
  return (
     <Container>
        <Wrapper>
            <Left>
                <SearchBar>搜尋</SearchBar>
                <SearchContainer>
                    <Input />
                    <Search style={{color:"black", fontSize:24}}/>
                </SearchContainer>           
            </Left>
            <Center>
                <Logo>LAMA.</Logo>

            </Center>
            <Right>
                <MenuItem>註冊</MenuItem>
                <MenuItem>登入</MenuItem>
                <MenuItem>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlined color="action" />
                    </Badge>
                    </MenuItem>       
            </Right>
        </Wrapper>
     </Container>
  )
}
