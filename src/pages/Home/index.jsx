import React from 'react'

import Header from 'components/Header'
import MenuMobile from 'components/MenuMobile'
import CovidWarning from 'components/CovidWarning'
import TalkToDoctorCard from 'components/Cards/TalkToDoctorCard'
import RemediesCard from 'components/Cards/RemediesCard'
import ConsultationsCard from 'components/Cards/ConsultationsCard'

import * as S from './styles'

const Home = () => (
  <>
    <MenuMobile />
    <Header />

    <S.Content>
      <S.HomeContainer>
        <CovidWarning />

        <S.WelcomeMessage>
          <h2>Olá, João Pedro Souza.</h2>
          <p>
            Bem-vindo a Área do Paciente, onde você poderá ver seus agendamentos,
            histórico e resultados de exames. Todo nosso relacionamento poderá
            ser feito de maneira fácil e rápida por aqui.
          </p>
        </S.WelcomeMessage>

        <S.Cards>
          <S.CardsLine>
            <TalkToDoctorCard />
            <RemediesCard />
          </S.CardsLine>

          <S.ConsultationWrapper>
            <ConsultationsCard />
          </S.ConsultationWrapper>
        </S.Cards>

      </S.HomeContainer>
    </S.Content>
  </>
);

export default Home;
