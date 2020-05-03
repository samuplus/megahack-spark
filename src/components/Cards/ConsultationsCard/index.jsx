import React from 'react'

import Calendar from 'icons/Calendar'
import GenericCard from 'components/Cards/GenericCard'

const ConsultationsCard = () => (
  <GenericCard
    customClass="consultations-card"
    title="Consultas"
    icon={() => <Calendar />}
    text="Você ainda não possui consultas marcadas"
    buttonText="marcar uma consulta"
  />
)

export default ConsultationsCard
