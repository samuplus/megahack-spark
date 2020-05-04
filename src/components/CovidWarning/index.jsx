import React from 'react'

import InformationIcon from 'icons/Information'
import CloseIcon from 'icons/Close'

import * as S from './styles'

const CovidWarning = () => (
  <S.Content>
    <InformationIcon />

    <div>
      <S.Title>
        Não marque uma consulta médica se tiver febre (acima de 37,8 graus) ou tosse recente.

      </S.Title>
      <S.Subtitle>
        Fique em casa e evite o contato próximo com outras pessoas por pelo menos 7 dias. As pessoas com quem você vive precisam se auto-isolar por 14 dias.
      </S.Subtitle>
    </div>

    <S.CloseButton>
      <CloseIcon />
    </S.CloseButton>
  </S.Content>
)

export default CovidWarning
