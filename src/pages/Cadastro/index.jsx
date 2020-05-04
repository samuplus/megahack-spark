/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react'
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

import * as S from './styles'

// const fortmaticKey = process.env.REACT_APP_FORMATIC_TEST

const fortmaticKey = 'pk_test_89EAB55125C6D022'
const contractAddress = '0x58e43fdcfcdbadb71533b678648f4913171e1425'
// let fromAddress = "0xf9aDCc38349E00A5544687b0fAbFdd844547C568"
const fromAddress = '0x97a85dac5c5e2c4816cc25a5593bfa9a283fbd52'
const patientAddress = '0xfdeFa2ED3ec4D089be066C4B9503B536ad4ce8Fc'

const Cadastro = () => {
  useEffect(() => {
    getAccounts()
  }, [])

  const formInitialValues = {
    cpf: '',
    phone: '',
    birthdate: '',
    humanrace: '',
    gender: '',
    cep: '',
    pais: '0x5242'
  }

  const getAccounts = async () => {
    try {
      const fm = new Fortmatic(fortmaticKey)
      const web3 = new Web3(fm.getProvider())

      const userAddress = await web3.eth.getAccounts()
      const contract = createContract(contractAddress)

      console.log({ contract })
    } catch (error) {
      console.error(error)
    }
  }

  const onSubmit = (values) => {
    const data = {
      // ethAccount,
      ...values
    }

    console.log({ data })

    return history.push('/home')
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
                <Input name="humanrace" type="text" label="Raça:" />
                <Input name="gender" type="text" label="Gênero:" />
                <Input name="cep" type="text" label="CEP:" />

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
