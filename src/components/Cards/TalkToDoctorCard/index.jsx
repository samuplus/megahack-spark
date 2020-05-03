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
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Perferendis voluptatibus soluta rem quidem quia alias nihil facere omnis perspiciatis.
        Fuga, eligendi? Harum vero at minima?
      </p>

      <Button text="Falar com um médico" />

    </S.CardBottom>
  </S.Card>
)

export default TalkToDoctorCard
