/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react'
import {
  Formik,
  Form,
  Field,
  ErrorMessage
} from 'formik'

import * as S from './styles'

const Cadastro = () => (
  <S.Content>
    <S.CadastroContainer>
      <S.Title>Vamos começar a cuidar da sua saúde?</S.Title>

      <S.FormWrapper>
        <Formik initialValues={{ email: '', password: '' }} onSubmit={() => console.log('submit')}>
          {({ isSubmitting }) => (
            <Form>
              <S.FormField>
                <label htmlFor="name">Nome completo:</label>
                <Field type="text" name="name" />
                <ErrorMessage name="name" component="div" />
              </S.FormField>

              <S.FormField>
                <label htmlFor="cpf">CPF:</label>
                <Field type="text" name="cpf" />
                <ErrorMessage name="cpf" component="div" />
              </S.FormField>

              <S.FormField>
                <label htmlFor="phone">Telefone:</label>
                <Field type="text" name="phone" />
                <ErrorMessage name="phone" component="div" />
              </S.FormField>

              <S.FormField>
                <label htmlFor="birthday">Data de nascimento:</label>
                <Field type="text" name="birthday" />
                <ErrorMessage name="birthday" component="div" />
              </S.FormField>

              <S.FormField>
                <label htmlFor="human-race">Raça:</label>
                <Field type="text" name="human-race" />
                <ErrorMessage name="human-race" component="div" />
              </S.FormField>

              <S.FormField>
                <label htmlFor="gender">Gênero:</label>
                <Field as="select" name="gender">
                  <option value="m">Masculino</option>
                  <option value="f">Feminino</option>
                  <option value="N/A">Não especificado</option>
                </Field>
                <ErrorMessage name="gender" component="div" />
              </S.FormField>

              <S.FormField>
                <label htmlFor="cep">CEP:</label>
                <Field type="text" name="cep" />
                <ErrorMessage name="cep" component="div" />
              </S.FormField>

              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </S.FormWrapper>
    </S.CadastroContainer>
  </S.Content>
)

export default Cadastro
