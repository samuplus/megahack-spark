import styled from 'styled-components'

export const RemediesList = styled.ul`
  width: 100%;
`

export const RemediesListItem = styled.li`
  align-items: flex-end;
  border: 1px solid #D3DCE6;
  display: flex;
  padding: 8px 0;

  &:not(:first-of-type) {
    margin-top: 20px;
  }

  img {
    width: 30px;
  }

  p {
    color: #454444;
    font-size: 14px;
    font-weight: 600;
  }
    
  svg {
    color: #32325d;
    margin-right: 8px;
    width: 20px;
  }
`

export const RemedyName = styled.div`
  margin-left: 14px;
  margin-right: 8px;

  span {
    color: rgba(69, 68, 68, 0.7);
    font-size: 10px;
    font-weight: 600;
    margin-bottom: 10px;
  }

`