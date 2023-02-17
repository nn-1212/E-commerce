import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
    width: 100vw;
    height: 100vh;  
    display: flex;
    align-items: center;
    justify-content: center;
    background: url("https://images.unsplash.com/photo-1672585437394-97bb55665dad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8aG1lbnZRaFVteE18fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60");
    background-size: cover;
`
const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;  

    @media screen and (max-width: 890px){
        width: 75%;
        
    }
`
const Logo = styled.h1`
    display: flex;
    justify-content: center;
`
    

const Title = styled.h1`
    font-size: 25px;
    display: flex;
    justify-content: center;

`
const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items:center;

` 
const Input = styled.input`
    width: 60%;
    height: 20px;
    margin: 10px 0;
    padding: 5px;
    

` 
const Agreement = styled.span`
    font-size: 12px;
    margin: 5px 0;
`

const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 10px 15px;
    margin: 10px;
    cursor: pointer;
    

    &:hover{
        background-color: teal;
        transition: 0.2s;
    }

`




const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>FIT YOURS.</Logo>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
            <Input placeholder="姓名"/>
            <Input placeholder="暱稱"/>
            <Input placeholder="email"/>
            <Input placeholder="密碼"/>
            <Input placeholder="再次確認密碼"/>
            <Agreement>
                新增帳號前，再次確認<b>隱私政策</b>
            </Agreement>
        </Form>
        <ButtonContainer>
        <Button>送出</Button>
        </ButtonContainer>
        
      </Wrapper>
    </Container>
  )
}

export default Register
