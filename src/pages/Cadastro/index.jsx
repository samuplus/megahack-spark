/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react'
import Web3 from 'web3'
import Fortmatic from 'fortmatic'
import {
  Formik,
  Form
} from 'formik'

import history from 'common/browser-history'

import HeaderLogout from 'components/HeaderLogout'
import Input from 'components/Input'
import Button from 'components/Button'

import mhdAbi from 'ethereum/mhdAbi'
import { createContract } from 'ethereum/mhdContract'
import { createPatient } from 'ethereum/MyHeathData'

import * as S from './styles'

// const fortmaticKey = process.env.REACT_APP_FORMATIC_TEST

const fortmaticKey = 'pk_test_89EAB55125C6D022'
const contractAddress = '0x58e43fdcfcdbadb71533b678648f4913171e1425'

const Cadastro = () => {
  const [userAddress, setUserAddress] = useState(null)

  useEffect(() => {
    getAccounts()
  }, [])

  const formInitialValues = {
    cpf: '',
    phone: '',
    birthdate: '',
    ethnicity: '',
    gender: '',
    city: '',
    cep: '',
    country: '0x5242'
  }

  const getAccounts = async () => {
    try {
      const fm = new Fortmatic(fortmaticKey)
      const web3 = new Web3(fm.getProvider())

      const address = await web3.eth.getAccounts()
      setUserAddress(address[0])
    } catch (error) {
      console.error(error)
    }
  }

  const onSubmit = (values) => {
    const dataToSend = {
      userAddress,
      dateOfBirth: values.birthdate,
      genderOfBirth: values.gender,
      cityOfBirth: values.city,
      countryOfBirth: values.country,
      _ethnicity: values.ethnicity
    }

    console.log({ dataToSend });

    const contract = createContract(contractAddress)
    createPatient({ contract, dataToSend, goTo: () => history.push('/home') })
  }


  return (
    <S.Content>
      <HeaderLogout />

      <S.CadastroContainer>
        <S.Title>Vamos começar a cuidar da sua saúde?</S.Title>

        <S.FormWrapper>
          <Formik initialValues={formInitialValues} onSubmit={onSubmit}>
            {({ isSubmitting }) => (
              <Form>
                <Input name="name" type="text" label="Nome completo:" />
                <Input name="cpf" type="text" label="CPF:" />
                <Input name="phone" type="text" label="Telefone:" />
                <Input name="birthdate" type="text" label="Data de nascimento:" />
                <Input name="ethnicity" type="text" label="Raça:" />
                <Input name="gender" type="text" label="Gênero:" />
                <Input name="city" type="text" label="Cidade:" />
                <Input name="cep" type="text" label="CEP:" />
                <Input name="country" type="text" label="Country:" />

                <S.FormButtonWrapper>
                  <Button theme="secondary" type="submit" disabled={isSubmitting}>
                    Finalizar cadastro
                  </Button>
                </S.FormButtonWrapper>
              </Form>
            )}
          </Formik>
        </S.FormWrapper>
      </S.CadastroContainer>
    </S.Content>
  )
}

export default Cadastro
