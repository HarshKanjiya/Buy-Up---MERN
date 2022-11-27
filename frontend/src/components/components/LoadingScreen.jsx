import styled from '@emotion/styled'
import React from 'react'

const LoadingScreen = () => {
  return (
    <Wrapper>
    <Container>
    <lottie-player src="https://lottie.host/972318a7-f1f2-484d-8b5f-ddfd0645c57b/ar4GNAAB0C.json"  background="transparent"  speed="1"  loop  autoplay></lottie-player>
    </Container>
    </Wrapper>
  )
}

export default LoadingScreen

const Wrapper = styled.div`
width: 100%;
height: 100vh;
display: grid;
place-content: center;
overflow:hidden;
`
const Container = styled.div`
height: 100px;
width: 100px;
`