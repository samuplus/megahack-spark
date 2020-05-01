import React from 'react'
import UniversalRouter from 'universal-router'

import Home from 'pages/Home'

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
  ]
}

export const basename = ''

const router = new UniversalRouter(routes, {
  baseUrl: basename
})

export default router