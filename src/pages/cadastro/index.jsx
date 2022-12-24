import React from 'react'
import { MdEmail, MdLock, MdAccountCircle } from 'react-icons/md'
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { api } from '../../services/api';

import { Column,  Container, CriarText, EsqueciText, Row, SubTitleLogin, SubTitleRegister, Title, TitleLogin, Wrapper} from './styles';

const schema = yup.object({
    email: yup.string().email('Email não é válido!').required('Campo obrigatório!'),
    password: yup.string().min(3, 'No minimo 3 caracteres!').required('Campo obrigatório!'),
  }).required();

const Cadastro = () => {

    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors }}  = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'
    });

    const onSubmit = async formData => {
        
        try {
            const  { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`)
            if (data.length === 1){
                navigate('/feed')
            }else {
                alert('E-mail ou Senha inválido')
            }
        } catch (error) {
            alert('Houve um erro: ', error)
        }
    }

    const handleClickSignIn = () => {
        navigate('/login')
    }

    return (<> 
    <Header />
    <Container>
        <Column>
            <Title>
                A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
            </Title>
        </Column>
        <Column> 
            <Wrapper>
                <TitleLogin>Comece agora grátis</TitleLogin>
                <SubTitleLogin>Crie sua conta e make the change._</SubTitleLogin>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input name="nome" errorMessage={errors?.email?.message} control={control} placeholder="Nome Completo" leftIcon={<MdAccountCircle />} />

                    <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="e-mail" leftIcon={<MdEmail />} />
                    
                    <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="senha" type="password" leftIcon={<MdLock />} />
                    
                    <Button title="Criar a minha conta" variant="secondary" type="submit"/>
                </form>
                <Column>
                    <SubTitleRegister>Ao clicar em "criar minha conta grátis", declaro que ceito as Políticas de Privacidade e os Termos de Uso da DIO.</SubTitleRegister><br />
                    <Row>
                        Já tenho conta.  <CriarText onClick={handleClickSignIn}> Fazer login</CriarText>
                    </Row>
                    
                </Column>
            </Wrapper>
        </Column>
    </Container>

   </>)
}

export { Cadastro }