import React from 'react'

import Header from 'components/Header'
import SearchIcon from 'icons/Search'

import * as S from './styles'

const name = 'Dr. Bruno H'

const Profissionais = () => (
  <S.Content>
    <Header userName={name} />
    <S.Container>
      <S.Title>Olá, {name}</S.Title>

      <S.SearchField>
        <SearchIcon />
        <input type="text" placeholder="Digite aqui o nome do paciente ou CPF para realizar uma nova busca" />
      </S.SearchField>


      <button onClick={() => console.log('busca')}>buscar paciente pelo cpf</button>

    </S.Container>

  </S.Content>
)

export default Profissionais
