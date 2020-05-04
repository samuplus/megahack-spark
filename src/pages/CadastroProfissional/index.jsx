/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react'
import Web3 from 'web3'
import Fortmatic from 'fortmatic'
import {
  Formik,
  Form
} from 'formik'

import history from 'common/browser-history'

import Input from 'components/Input'
import Button from 'components/Button'

import { createContract } from 'ethereum/mhdContract'
import { createIssuer } from 'ethereum/MyHeathData'

import * as S from './styles'

const fortmaticKey = 'pk_test_89EAB55125C6D022'
const contractAddress = '0x58e43fdcfcdbadb71533b678648f4913171e1425'

const CadastroProfissional = () => {
  const [userAddress, setUserAddress] = useState(null)

  useEffect(() => {
    getAccounts()
  }, [])

  const formInitialValues = {
    name: '',
    crm: '',
    phone: '',
    institutionName: '',
    pais: 'BR',

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

  const onSubmit = async (values) => {
    const data = {
      userAddress,
      ...values
    }

    const dataToSend = {
      userAddress,
      institutionName: data.institutionName,
      pais: data.pais
    }

    const contract = createContract(contractAddress)
    createIssuer({ contract, dataToSend, goTo: () => history.push('/dashboard') })
  }

  return (
    <S.Content>
      <S.CadastroContainer>
        <S.FormWrapper>
          <Formik initialValues={formInitialValues} onSubmit={onSubmit}>
            {({ isSubmitting }) => (
              <Form>
                <Input name="name" type="text" label="Nome completo:" />
                <Input name="crm" type="text" label="CRM:" />
                <Input name="institutionName" type="text" label="Nome do hospital:" />
                <Input name="phone" type="text" label="Telefone do hospital:" />

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

export default CadastroProfissional
