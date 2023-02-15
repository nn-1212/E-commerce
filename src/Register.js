import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`

`
const Wrapper = styled.div``
const Title = styled.h1``
const Form = styled.form``
const Input = styled.input``
const Agreement = styled.span``
const Button = styled.button``




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
        <Button>送出</Button>
      </Wrapper>
    </Container>
  )
}

export default Register
