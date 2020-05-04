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

      <S.CardsWrapper>
        <S.PatientInfo>
          <S.PatientInfoTitle>Informações do Paciente</S.PatientInfoTitle>
          <S.PatientInfoContent>
            <h3>João Pedro de Souza </h3>

            <S.PatientInfoData>CPF: <span>064.565.093-98</span></S.PatientInfoData>
            <S.PatientInfoData column>Data de nascimento:
              <span>
                03/10/1995
              </span>
            </S.PatientInfoData>
            <S.PatientInfoData>Raça:
              <span>
                Pardo
              </span>
            </S.PatientInfoData>
            <S.PatientInfoData>Gênero:
              <span>
                M
              </span>
            </S.PatientInfoData>
            <S.PatientInfoData column>Telefone:
              <span>
                +55 (00) 0 0000-2222
              </span>
            </S.PatientInfoData>
            <S.PatientInfoData column>Endereço:
              <span>
                Rua José Maria, Conjunto H - 71320-202
              </span>
            </S.PatientInfoData>
          </S.PatientInfoContent>

          <S.PatientBottom>
            <h3>Alergias</h3>

            <S.PatientBottomBlock>
              <p>Bioaletrina</p>
              <span>(Bioallethrin)</span>
            </S.PatientBottomBlock>

            <S.PatientBottomBlock>
              <p>Abiraterona</p>
              <span>(Acetato de abiraterona)</span>
            </S.PatientBottomBlock>
          </S.PatientBottom>
        </S.PatientInfo>

      </S.CardsWrapper>
    </S.Container>



  </S.Content>
)

export default Profissionais
