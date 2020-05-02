import styled from 'styled-components'

import Container from 'components/Container'
import colors from 'common/colors'

export const Header = styled.header`
  background-color: white;
  border-bottom: 1px solid #E2E5E6;
  padding: 10px 0;
`

export const HeaderContainer = styled(Container)`
  align-items: center;
  display: flex;
  justify-content: space-between;
`

export const HeaderLogo = styled.div`
  width: 45px; 
`

export const HeaderList = styled.ul`
  align-items: center;
  display: flex;
`
export const HeaderListItem = styled.li`
  align-items: center;
  color: ${colors.blue};
  display: flex;
  font-size: 16px;
  font-weight: 600;
  padding: 17px;

  svg {
    color: ${colors.blue};
    margin-right: 10px;
    max-height: 22px;
    width: 18px;
  }
`

export const HeaderSettings = styled.div`
  align-items: center;
  display: flex;
  margin-left: 108px;

  svg {
    color: ${colors.blue};
    margin-left: 20px;
  }
`

export const HeaderSettingsUser = styled.div`
  align-items: center;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  margin-left: 20px;

  p {
    color: ${colors.blue};
    margin-left: 15px;
    font-size: 16px;
    font-weight: 600;
  }
`

export const HeaderSettingsUserIcon = styled.div`
  align-items: center;
  background-color: #F4F5F4;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  height: 48px;
  width: 48px;

  svg {
    color: #C3CBCD;
    margin-left: 0;
  }
`
