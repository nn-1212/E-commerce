import React from 'react'
import styled from '@emotion/styled'
import {Facebook, Instagram, Twitter } from '@mui/icons-material'


const Container = styled.div`
    display: flex;
`
const Left = styled.div`
    flex: 1;
`
const Center = styled.div`
    flex: 1;
    padding: 20px;
`
const Right = styled.div`
    flex: 1;
    padding: 20px;
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
    background-color: #${(props)=> props.color}
    
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>LAMA.</Logo>
            <Desc>hi,Lorem ipsum dolor sit amet consectetur, adipisicing elit. At ipsum ullam ex voluptatem assumenda quae iste quasi tempore, reprehenderit quidem eum mollitia doloremque odit perspiciatis maxime cum magni enim nihil?</Desc>
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
        <Center></Center>
        <Right></Right>
    </Container>
  )
}

export default Footer
