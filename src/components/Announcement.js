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
    margin-top: 25px;

    @media screen and (max-width: 390px){
        /* width: 100%; */
        height: 40px;
        margin-top: 55px;
        padding: 10px;
        text-align: center ;
      }
`


const Announcement = () => {
  return (
    <div>
        <Container>
            公告：今日滿兩千免運，加送下午茶杯盤組，數量有限，快來搶購！
        </Container>
    </div>
  )
}

export default Announcement
