import React from 'react'

import Header from 'components/Header'
import SearchIcon from 'icons/Search'
import LaudoIcon from 'icons/Laudo'
import TrashIcon from 'icons/Trash'
import ImagePlaceholderIcon from 'icons/ImagePlaceholder'

import * as S from './styles'

const name = 'Dr. Bruno H'

const SearchField = ({ placeholder = '' }) => (
  <S.SearchField>
    <SearchIcon />
    <input type="text" placeholder={placeholder} />
  </S.SearchField>
)

const Profissionais = () => (
  <S.Content>
    <Header userName={name} />
    <S.Container>
      <S.Title>Olá, {name}</S.Title>

      <SearchField placeholder="Digite aqui o nome do paciente ou CPF para realizar uma nova busca" />

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

        <S.ExamsBlock>
          <h3>Exames</h3>

          <S.ExamsSearchWrapper>
            <SearchField placeholder="Digite o nome do exame que deseja solicitar" />
          </S.ExamsSearchWrapper>
          <S.ExamesTable>
            <tr>
              <td>Data</td>
              <td>Exames</td>
              <td>Laudo</td>
              <td>Imagens</td>
              <td>{' '}</td>
            </tr>
            {[0, 0, 0].map(() => (
              <tr>
                <td>12/04/2020</td>
                <td>Radiografias Digitais - Tórax</td>
                <td><LaudoIcon /></td>
                <td><ImagePlaceholderIcon /></td>
                <td><TrashIcon /></td>
              </tr>
            ))}
          </S.ExamesTable>
        </S.ExamsBlock>
      </S.CardsWrapper>
    </S.Container>



  </S.Content>
)

export default Profissionais
