import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
    width: 100vw;
    height: 100vh;  
    display: flex;
    align-items: center;
    justify-content: center;
    background: url("https://images.unsplash.com/photo-1675767528183-628d7e46ae59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3MzJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60");
    object-fit: cover;
`
const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;  
   
    
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

const ButtonContailner = styled.div`
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
        background-color: ;
    }

`




const Register = () => {
  return (
    <Container>
      <Wrapper>
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
        <ButtonContailner>
        <Button>送出</Button>
        </ButtonContailner>
        
      </Wrapper>
    </Container>
  )
}

export default Register
