import styled from 'styled-components'

import colors from 'common/colors';
import CardBase from 'components/Cards'

export const Card = styled(CardBase)`
`

export const CardMessage = styled.h2`
  bottom: 0;
  background-color: ${colors.blue};
  color: white;
  font-size: 18px;
  height: 40px;
  left: 0;
  line-height: 20px;
  font-weight: normal;
  padding: 10px;
  position: absolute;
  width: 100%;
  z-index: 5;
`

export const CardTop = styled.div`
  display: flex;
  height: 220px;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
  }
`

export const CardBottom = styled.div`
  align-items: center;
  display: flex;
  flex-flow: column;
  padding: 20px 18px;

  p {
    color: #454444;
    font-weight: 600;
    margin-bottom: 20px;
  }

  button {
    width: 260px;
  }
`
