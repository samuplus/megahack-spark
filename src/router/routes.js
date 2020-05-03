import React from 'react'
import UniversalRouter from 'universal-router'

import Home from 'pages/Home'
import Cadastro from 'pages/Cadastro'

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
        return <Home />
      }
    },
    {
      path: '/cadastro',
      async action() {
        return <Cadastro />
      }
    },
  ]
}

export const basename = ''

const router = new UniversalRouter(routes, {
  baseUrl: basename
})

export default router