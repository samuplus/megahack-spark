import React from 'react'

import Calendar from 'icons/Calendar'
import Clock from 'icons/Clock'
import GenericCard from 'components/Cards/GenericCard'

import * as S from './styles'

const RenderConsultations = () => (
  <section>
    {[0, 0].map(item => (
      <S.ConsultationCard key={item}>
        <S.ConsultationCardContent>
          <S.ConsultationCardImage>
            <img src="images/consultation-illustration.svg" alt="" />
          </S.ConsultationCardImage>

          <S.ConsultationCardInfo>
            <h3>Clínico geral</h3>
            <h4>Dr. Drauzio Varell - CRM A054008</h4>

            <S.ConsultationCardDate>
              <div><Calendar /><span>23/11/2020</span></div>
              <div><Clock /><span>18:00</span></div>
            </S.ConsultationCardDate>
          </S.ConsultationCardInfo>
        </S.ConsultationCardContent>

        <S.ConsultationCardBottom>
          <a href="#!">Ver rota</a>
          <a href="#!">Informações</a>
        </S.ConsultationCardBottom>
      </S.ConsultationCard>
    ))}
  </section>
)

const ConsultationsCard = () => (
  <GenericCard
    customClass="consultations-card"
    title="Consultas"
    icon={() => <Calendar />}
    text="Você ainda não possui consultas marcadas"
    buttonText="marcar uma consulta"
    content={RenderConsultations}
  />
)

export default ConsultationsCard
