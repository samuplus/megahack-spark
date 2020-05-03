import styled, { css } from 'styled-components'

import colors from 'common/colors'

export const Button = styled.button`
  background-color: ${colors.pink};
  border-radius: 15px; 
  color: white;
  cursor: pointer;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  font-size: 17px;
  font-weight: 600;
  padding: 11px 16px;
  outline: none;
  text-transform: uppercase;

  ${(props) =>
    props.theme === 'secondary' && css`
      background-color: ${colors.blue};
  `}
`
