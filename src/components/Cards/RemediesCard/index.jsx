import React from 'react'

import RemedyIcon from 'icons/Remedy'
import GenericCard from 'components/Cards/GenericCard'

const RemediesCard = () => (
  <GenericCard
    title="Medicamentos"
    icon={() => <RemedyIcon />}
    text="Você ainda não possui médicamentos
    receitados"
    buttonText="Solicitar medicamento"
  />
)

export default RemediesCard
