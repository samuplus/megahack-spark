import React from 'react'

import RemedyIcon from 'icons/Remedy'
import ClockIcon from 'icons/Clock'

import GenericCard from 'components/Cards/GenericCard'

import * as S from './styles'

const list = [
  {
    qtd: 1,
    name: 'Loratadina 12 Comprimidos (10mg)',
    use: 'Uso oral',
    period: '8h'
  },
  {
    qtd: 1,
    name: 'Loratadina 12 Comprimidos (10mg)',
    use: 'Uso oral',
    period: '8h'
  },
  {
    qtd: 1,
    name: 'Loratadina 12 Comprimidos (10mg)',
    use: 'Uso oral',
    period: '8h'
  }
]

const RenderList = () => (
  <S.RemediesList>
    {list.map((item, i) => (
      <S.RemediesListItem key={i}>
        <img src="images/medicamento-generico.png" alt="" />

        <S.RemedyName>
          <span>{item.qtd} UNIDADE</span>
          <p>{item.name} - {item.use}</p>
        </S.RemedyName>

        <ClockIcon />
        <p>{item.period}</p>
      </S.RemediesListItem>
    ))}
  </S.RemediesList>
)

const RemediesCard = () => (
  <GenericCard
    customClass="remedies-card"
    title="Medicamentos"
    icon={() => <RemedyIcon />}
    text="Você ainda não possui médicamentos
    receitados"
    buttonText="Solicitar medicamento"
    content={RenderList}
  />
)

export default RemediesCard
