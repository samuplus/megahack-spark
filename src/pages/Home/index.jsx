import React, { useEffect } from 'react'
// import Web3 from 'web3'
// import Fortmatic from 'fortmatic'

import Header from 'components/Header'
import CovidWarning from 'components/CovidWarning'

import * as S from './styles';

// const fortmaticKey = process.env.REACT_APP_FORMATIC_TEST

const Home = () => {
  // useEffect(() => {
  //   getAccounts()
  // }, [])

  // const getAccounts = async () => {
  //   try {

  //     debugger
  //     const fm = new Fortmatic(fortmaticKey)
  //     const web3 = new Web3(fm.getProvider())

  //     const response = await web3.eth.getAccounts()
  //     console.log({ response })
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  return (
    <>
      <Header />

      <S.Content>
        <S.HomeContainer>
          <CovidWarning />

          <S.WelcomeMessage>
            <h2>Olá, João Pedro Souza.</h2>
            <p>
              Bem-vindo a Área do Paciente, onde você poderá ver seus agendamentos, histórico e resultados de exames. Todo nosso relacionamento poderá ser feito de maneira fácil e rápida por aqui.
            </p>
          </S.WelcomeMessage>

        </S.HomeContainer>
      </S.Content>
    </>
  )
};

export default Home;
