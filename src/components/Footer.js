import React from 'react'
import styled from '@emotion/styled'


const Container = styled.div`

`
const Left = styled.div`
    flex: 1;
`
const Center = styled.div`
    flex: 1;
`
const Right = styled.div`
    flex: 1;
`

const Logo = styled.div``
const Desc = styled.div``
const SocialContainer = styled.div``
const SocialIcon = styled.div``

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>LAMA.</Logo>
            <Desc>hi,Lorem ipsum dolor sit amet consectetur, adipisicing elit. At ipsum ullam ex voluptatem assumenda quae iste quasi tempore, reprehenderit quidem eum mollitia doloremque odit perspiciatis maxime cum magni enim nihil?</Desc>
            <SocialContainer>
                <SocialIcon>

                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center></Center>
        <Right></Right>
    </Container>
  )
}

export default Footer
