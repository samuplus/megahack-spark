import React, { useEffect } from 'react'
import Web3 from 'web3'
import Fortmatic from 'fortmatic'

import Header from 'components/Header'

const fortmaticKey = process.env.REACT_APP_FORMATIC_TEST

const Home = () => {
  // useEffect(() => {
  //   getAccounts()
  // }, [])

  const getAccounts = async () => {
    try {

      debugger
      const fm = new Fortmatic(fortmaticKey)
      const web3 = new Web3(fm.getProvider())

      const response = await web3.eth.getAccounts()
      console.log({ response })
    } catch (error) {
      console.error(error)
    }
  }

  return <Header />
};

export default Home;
