import React from 'react'

import CalendarIcon from 'icons/Calendar'
import RemedyIcon from 'icons/Remedy'
import PaperIcon from 'icons/Paper'
import DrugstoreIcon from 'icons/Drugstore'
import HospitalIcon from 'icons/Hospital'

const items = [
  {
    icon: () => <CalendarIcon />,
    name: 'Consultas',
    link: '#consultas'
  },
  {
    icon: () => <RemedyIcon />,
    name: 'Medicamentos',
    link: '#medicamentos'
  },
  {
    icon: () => <PaperIcon />,
    name: 'Exames',
    link: '#exames'
  },
  {
    icon: () => <DrugstoreIcon />,
    name: 'Farmácias',
    link: '#farmácias'
  },
  {
    icon: () => <HospitalIcon />,
    name: 'Hospitais',
    link: '#hospitais'
  }
]

export default items
