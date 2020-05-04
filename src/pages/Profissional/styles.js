import styled from 'styled-components'

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
