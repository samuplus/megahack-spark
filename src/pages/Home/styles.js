import styled from 'styled-components'

import colors from 'common/colors'
import breakpoints from 'common/breakpoints'

import Container from 'components/Container'

export const Content = styled.section`
  background-color: ${colors.backgroundContent};
`

export const HomeContainer = styled(Container)`
  padding-top: 20px; 

  @media (${breakpoints.LARGE}) {
    padding-top: 40px; 
  }
`

export const WelcomeMessage = styled.div`
  margin-bottom: 56px;
  margin-top: 45px;

  @media (${breakpoints.LARGE}) {
    padding: 0 150px;
  }

  h2 {
    color: ${colors.blueDark};
    font-size: 32px;
    margin-bottom: 24px;
    text-align: center; 
  }

  p {
    color: #454444;
    font-size: 16px;
    text-align: center;
  }
`

export const Cards = styled.article`
  padding-bottom: 25px;

  @media (${breakpoints.LARGE}) {
    padding-bottom: 50px;
  }
`

export const CardsLine = styled.div`
  margin-bottom: 25px;

  @media (${breakpoints.LARGE}) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
  }

  .remedies-card {
    margin-top: 25px;

    @media (${breakpoints.LARGE}) {
      display: flex;
      justify-content: space-between;
      margin-top: 0;
    }
  }

  .talk-to-doctor-card,
  .remedies-card {
    @media (${breakpoints.LARGE}) {
      flex: 0 0 auto;
      width: 48%;
    }
  }
`
