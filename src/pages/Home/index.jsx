import React, { useEffect } from 'react'
import Web3 from 'web3'
import Fortmatic from 'fortmatic'

import Header from 'components/Header'
import MenuMobile from 'components/MenuMobile'
import CovidWarning from 'components/CovidWarning'
import TalkToDoctorCard from 'components/Cards/TalkToDoctorCard'
import RemediesCard from 'components/Cards/RemediesCard'
import ConsultationsCard from 'components/Cards/ConsultationsCard'

import * as S from './styles';
import { createContract } from './mhdContract';
import mhdAbi from './mhdAbi';

// const fortmaticKey = process.env.REACT_APP_FORMATIC_TEST

const Home = () => {
  useEffect(() => {
    getAccounts()
  }, [])

  const getAccounts = async () => {
    try {
      // debugger
      console.log(mhdAbi);
      const fm = new Fortmatic(fortmaticKey)
      const web3 = new Web3(fm.getProvider())

      const userAddress = await web3.eth.getAccounts()
      console.log({ userAddress })

      const contract = createContract(contractAddress);

      console.log('Getting patient details');
      const patientDetails = await contract.methods.getPatientDetails(patientAddress).call({ from: fromAddress });
      const dateOfBirth = patientDetails[0];
      const genderOfBirth = patientDetails[1];
      const cityOfBirth = patientDetails[2];
      const countryOfBirth = patientDetails[3];
      const ethnicity = patientDetails[4];

      console.log(dateOfBirth);
      console.log(genderOfBirth);
      console.log(cityOfBirth);
      console.log(countryOfBirth);
      console.log(ethnicity);
    } catch (error) {
      console.error(error)
    }
  }
  // return ('Hello Spark');

  return (
    <>
      <MenuMobile />
      <Header />

      <S.Content>
        <S.HomeContainer>
          <CovidWarning />

          <S.WelcomeMessage>
            <h2>Olá, João Pedro Souza.</h2>
            <p>
              Bem-vindo a Área do Paciente, onde você poderá ver seus agendamentos,
              histórico e resultados de exames. Todo nosso relacionamento poderá
              ser feito de maneira fácil e rápida por aqui.
            </p>
          </S.WelcomeMessage>

          <S.Cards>
            <S.CardsLine>
              <TalkToDoctorCard />
              <RemediesCard />
            </S.CardsLine>

            <ConsultationsCard />
          </S.Cards>

        </S.HomeContainer>
      </S.Content>
    </>
  )
};

export default Home;
