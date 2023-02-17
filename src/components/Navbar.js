import React from 'react'
import styled from '@emotion/styled'
// import "../node_modules/bootstrap/dist/css/bootstrap-grid.min.css"

// import SearchIcon from '@mui/icons-material/Search';
import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import Badge from '@mui/material/Badge';
// import { MEDIA_QUERY_SM, MEDIA_QUERY_MD} from '../responsive'


const Container = styled.div`
    height: 60px;
    
`
const Wrapper = styled.div`
    padding:  0 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Left = styled.div`
    flex:1;
    display: flex; 
    align-items: center; 
    cursor: pointer;
`

const SearchBar = styled.div`
    font-weight: 200;

    @media screen and (max-width: 890px){
        display: none;
    }

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

    @media screen and (max-width: 890px){
        width: 20px;
    }

`

const Center = styled.div`
    flex:1;
    text-align: center;
 
`

const Logo = styled.h1`
    font-weight: bold;
    
    @media screen and (max-width: 890px){
        
    }
`


const Right = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media screen and (max-width: 890px){
        display: flex;        
    }

`

const Menu = styled.div`
    margin-right: 5px;
`

const MenuItem = styled.div`
    font-size: 14px; 
    cursor: pointer; 
    margin: 10px;

    @media screen and (max-width: 890px){
        margin-bottom: 5px;
        margin-top: 0;
    }
`
const MenuCart = styled.div`

`


export default function Navbar() {
  return (
     <Container>
        <Wrapper>
            <Left>
                <SearchBar placeholder='搜尋'>搜尋</SearchBar>
                <SearchContainer>
                    <Input />
                    <Search style={{color:"black", fontSize:24}}/>
                </SearchContainer>           
            </Left>
            <Center>
                <Logo>FIT YOURS.</Logo>

            </Center>
            <Right>
                <Menu>
                    <MenuItem>註冊</MenuItem>
                    <MenuItem>登入</MenuItem>
                </Menu>
                <MenuCart>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlined color="action" />
                    </Badge>
                </MenuCart>       
            </Right>
        </Wrapper>
     </Container>
  )
}
