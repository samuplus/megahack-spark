import React from 'react'
import UniversalRouter from 'universal-router'

import Home from 'pages/Home'
import Cadastro from 'pages/Cadastro'
import CadastroProfissional from 'pages/CadastroProfissional'
import Profissional from 'pages/Profissional'

const routes = {
  path: '/',
  async action({ next }) {
    const children = await next()
    return children
  },
  children: [
    {
      path: '',
      async action() {
        return <Cadastro />
      }
    },
    {
      path: '/cadastro-profissional',
      async action() {
        return <CadastroProfissional />
      }
    },
    {
      path: '/home',
      async action() {
        return <Home />
      }
    },
    {
      path: '/dashboard',
      async action() {
        return <Profissional />
      }
    }
  ]
}

export const basename = ''

const router = new UniversalRouter(routes, {
  baseUrl: basename
})

export default router
