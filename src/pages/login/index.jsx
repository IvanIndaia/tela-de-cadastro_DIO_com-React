import React from 'react'
import { MdEmail, MdLock } from 'react-icons/md'
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { api } from '../../services/api';

import { Column,  Container, CriarText, EsqueciText, Row, SubTitleLogin, Title, TitleLogin, Wrapper} from './styles';

const schema = yup.object({
    email: yup.string().email('Email não é válido!').required('Campo obrigatório!'),
    password: yup.string().min(3, 'No minimo 3 caracteres!').required('Campo obrigatório!'),
  }).required();

const Login = () => {

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
        navigate('/feed')
    }

    const handleClickRegister = () => {
        navigate('/cadastro')
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
                <TitleLogin>Faça seu login</TitleLogin>
                <SubTitleLogin>Faça seu login e make the change._</SubTitleLogin>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="e-mail" leftIcon={<MdEmail />} />
                    <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="senha" type="password" leftIcon={<MdLock />} />
                    <Button title="Entrar" variant="secondary" type="submit"/>
                    {/* onClick={handleClickSignIn} */}
                </form>
                <Row>
                    <EsqueciText>Esqueci minha senha</EsqueciText>
                    <CriarText onClick={handleClickRegister}>Criar conta</CriarText>
                </Row>
            </Wrapper>
        </Column>
    </Container>

   </>)
}

export { Login }