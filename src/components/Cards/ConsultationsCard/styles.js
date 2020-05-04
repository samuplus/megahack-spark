import styled from 'styled-components'

import breakpoints from 'common/breakpoints'

export const ConsultationCard = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
`

export const ConsultationCardContent = styled.div`
  display: flex;
`

export const ConsultationCardImage = styled.div`
  display: none;
  margin-right: 32px;

  @media (${breakpoints.LARGE}) {
    display: block;
  }
`

export const ConsultationCardInfo = styled.div`
  padding: 12px;

  @media (${breakpoints.LARGE}) {
    padding-left: 0;
  }

  h3 {
    color: #32325D;
    font-weight: 600;
    font-size: 20px;
  }

  h4 {
    color: rgba(69, 68, 68, 0.6);
    font-weight: 600;
    font-size: 12px;
  }
`

export const ConsultationCardDate = styled.div`
  > div {
    align-items: center;
    display: flex;
    padding: 4px 0;

    svg {
      color: #1773be;
      height: 15px;
      margin-right: 8px;
      width: 15px;
    }

    span {
      color: #32325D;
      font-size: 14px;
      font-weight: 600;
    }
  }
`

export const ConsultationCardBottom = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.12);
  display: flex;
  justify-content: space-around;
  padding: 6px 8px;

  a {
    color: #1773BE;
    font-size: 16px;
    text-decoration: none;
  }
`