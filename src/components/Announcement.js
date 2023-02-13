import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
    height: 30px;
    background-color: gray;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
`


const Announcement = () => {
  return (
    <div>
        <Container>
            公告：
        </Container>
    </div>
  )
}

export default Announcement
