/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react'
import {
  Formik,
  Form
} from 'formik'

import Checkbox from 'components/Checkbox'
import Input from 'components/Input'
import Button from 'components/Button'

import * as S from './styles'

const Cadastro = () => (
  <S.Content>
    <S.CadastroContainer>
      <S.Title>Vamos começar a cuidar da sua saúde?</S.Title>

      <S.FormWrapper>
        <Formik initialValues={{ email: '', password: '' }} onSubmit={() => console.log('submit')}>
          {({ isSubmitting }) => (
            <Form>
              <Input name="name" type="text" label="Nome completo:" />
              <Input name="cpf" type="text" label="CPF:" />
              <Input name="phone" type="text" label="Telefone:" />
              <Input name="birthdate" type="text" label="Data de nascimento:" />
              <Input name="human-race" type="text" label="Raça:" />
              <Input name="gender" type="text" label="Gênero:" />
              <Input name="cep" type="text" label="CEP:" />

              <Checkbox name="terms" label="Eu li e concordo com os termos de uso" />

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

export default Cadastro
