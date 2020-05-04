import React from 'react'

import Button from 'components/Button'
import * as S from './styles'

const TalkToDoctorCard = () => (
  <S.Card className="talk-to-doctor-card">
    <S.CardTop>
      <img src="images/talk-to-doctor.svg" alt="" />
      <S.CardMessage>NÃO ESTÁ SE SENTINDO BEM?</S.CardMessage>
    </S.CardTop>

    <S.CardBottom>
      <p>
        Não espere os sintomas piorarem. Fale agora mesmo com a Anna, nosso assistente virtual, e ela te ajudará a encontrar o profissional ideal!
      </p>

      <Button>Falar com um médico</Button>

    </S.CardBottom>
  </S.Card>
)

export default TalkToDoctorCard
