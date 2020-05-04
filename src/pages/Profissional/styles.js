import styled, { css } from 'styled-components'

import { default as ContainerBase } from 'components/Container'

export const Content = styled.section`
  background: #F7F7FA;

`

export const Container = styled(ContainerBase)`
`

export const Title = styled.h2`
  color: #32325D;
  font-weight: 600;
  font-size: 32px;
  margin: 40px 0 30px 0;
  text-align: center;
`

export const SearchField = styled.div`
  align-items: center;
  background-color: white;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.24), 0px 0px 2px rgba(0, 0, 0, 0.12);
  border-radius: 15px;
  display: flex;
  height: 45px;
  margin-bottom: 60px;
  padding: 0 16px;

  svg {
    color: rgba(0, 0, 0, 0.54);
    height: 18px;
    width: 18px;
  }

  input {
    border: none;
    flex: 1;
    margin-left: 24px;
    padding: 8px 0;
    outline: none;
  }
`

export const CardsWrapper = styled.div`
  display: flex;
`

export const PatientInfo = styled.div`
  background-color: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  width: 410px;
`

export const PatientInfoTitle = styled.h3`
  border-bottom: 1px solid #454444;
  color: #32325D;
  font-weight: 600;
  font-size: 28px;
  padding: 12px 0;
  text-align: center;
`

export const PatientInfoContent = styled.div`
  border-bottom: 1px solid #454444;
  padding: 25px 20px;

  h3 {
    color: #1773BE;
    font-weight: 600;
    font-size: 28px;
    margin-bottom: 15px;
    text-align: center;
  }
`

export const PatientInfoData = styled.p`
  color: #454444;
  font-size: 18px;
  margin-bottom: 12px;
  text-align: center;

  ${(props) => props.column && css`
    display: flex;
    flex-flow: column;
  `}

  span {
    color: #2b7fc4;
    margin-left: 6px;
  }
`

export const PatientBottom = styled.div`
  margin-bottom: 18px;
  padding: 16px 0; 

  h3 {
    color: #1773BE;
    font-size: 28px;
    text-align: center;
  }
`

export const PatientBottomBlock = styled.div`
  padding: 0 25px;

  &:not(:last-of-type) {
    margin-bottom: 20px;
  }

  p {
    color: rgba(0, 0, 0, 0.87);
    font-size: 16px;
  }

  span {
    color: rgba(0, 0, 0, 0.6);
    font-size: 14px;
  }
`

export const ExamsBlock = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 12px 0;
  margin-left: 35px;
  flex: 1;

  h3 {
    font-weight: 600;
    font-size: 28px;
    color: #32325D;
    padding: 0 32px;
  }
`

export const ExamsSearchWrapper = styled.div`
  padding: 0 80px;
  margin-top: 16px;
  margin-bottom: 38px;
`

export const ExamesTable = styled.table`
  width: 100%;
  padding: 0 30px;

  tr {
    height: 40px;

    &:first-of-type {
      td {
        border: none;
      }
    }

    &:last-of-type {
      td {
        border-bottom: 1px solid #D3DCE6;
      }
    }

    td {
      color: #454444;
      border-top: 1px solid #D3DCE6;
      font-weight: 600;
      font-size: 14px;
    }
  }

  svg {
    color: #1773be;
    cursor: pointer;
    height: 20px;
    width: 20px;
  }
`
