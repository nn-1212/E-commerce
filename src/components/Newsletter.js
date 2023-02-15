import React from 'react'
import styled from '@emotion/styled'
import SendIcon from '@mui/icons-material/Send';

const Container = styled.div`
    height: 40vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`

const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
    margin-top: 5px;

`

const Desc = styled.div`
    font-size: 20px;
    margin-bottom: 10px;
     
`

const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    border: 1px solid gray ;

`

const Input = styled.input`
    border: none;
    flex: 8;
`

const Button = styled.button`
    flex: 1;
    border: none;
    background-color: lightgrey;
`



const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>電子報：接收最新優惠、資訊</Desc>
        <InputContainer>
            <Input placeholder="your e-mail"/>
            <Button>
                <SendIcon/>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter
