import styled from 'styled-components'

import Container from 'components/Container'
import colors from 'common/colors'

export const Content = styled.section`
  background-color: ${colors.backgroundContent};
`

export const HomeContainer = styled(Container)`
  padding: 40px 0; 
`

export const WelcomeMessage = styled.div`
  margin-bottom: 56px;
  margin-top: 45px;
  padding: 0 150px;

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
  margin-bottom: 50px;

  > div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;

    .remedies-card {
      display: flex;
      justify-content: space-between;
    }

    .talk-to-doctor-card,
    .remedies-card {
      flex: 0 0 auto;
      width: 48%;
    }
  }
`
