import React from 'react'
import styled from '@emotion/styled'
import {Facebook, Instagram, Twitter, AddLocationAlt, Phone, Mail } from '@mui/icons-material'


const Container = styled.div`
    display: flex;
`
const Left = styled.div`
    flex: 1;
    margin-left: 5px;
`
const Center = styled.div`
    flex: 1;
    padding-top:0;
    padding-left: 20px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`
const Right = styled.div`
    flex: 1;
    padding: 0 20px;
`

const Logo = styled.h1`
    margin: 0 10px;
    font-size: 40px;
`
const Desc = styled.p`
    margin: 5px 10px;
`
const SocialContainer = styled.div`
   display: flex;
`
const SocialIcon = styled.div`
    margin: 10px;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    border-radius: 50%;
    background-color: #${(props) => {return props.color}}
    
`

const Title = styled.h2`
    margin-top:0 ;
    margin-left:-55px ;
    
` 
const ListGroup = styled.ul`
    margin:0 ;
    padding: 0;
    list-style: none;
    
`
const ListItem = styled.li`
    margin: 10px 0;

`
const Title1 = styled.h2`
    margin-top: 0;
    margin-bottom: 15px;
`
const Contact = styled.div`
    margin: 10px 0;
    display: flex;
    padding: 5px 0;
`


const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>LAMA.</Logo>
            <Desc>hi,Lorem ipsum dolor sit  consectetur, adipisicing elit. At ipsum ullam ex voluptatem assumenda quae iste quasi tempore, reprehenderit quidem eum mollitia doloremque odit perspiciatis maxime cum magni enim nihil?</Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Twitter/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Links</Title>
            <ListGroup>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Wishes</ListItem>
            </ListGroup>
        </Center>
        <Right>
            <Title1>Contact</Title1>
            <Contact><AddLocationAlt style={{marginRight:"5px"}}/>101 台北市內湖區南港路11111號</Contact>
            <Contact><Phone style={{marginRight:"5px"}}/>+86 2 1234 5678</Contact>
            <Contact><Mail style={{marginRight:"5px"}}/>contact@lama.dev</Contact>
        </Right>
    </Container>
  )
}

export default Footer
