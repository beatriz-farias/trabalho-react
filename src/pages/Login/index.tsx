import React from 'react'
import { Container, LoginContainer, Menu, LogoSymbol, Slogan, InputGroup, InputBox, InputLabel, MainBtn, MainBtnText } from './style'

function Login() {
    return (
        <Container>
            <Menu>
                <LogoSymbol source={require('../../assets/logo.svg')}/>
            </Menu>
            <Slogan>Peças para seu computador com preços que cabem no seu bolso</Slogan>
            <LoginContainer>
                <InputGroup>
                    <InputLabel>Nome</InputLabel>
                    <InputBox placeholder="Digite seu nome"></InputBox>
                </InputGroup>
                <InputGroup>
                    <InputLabel>Email</InputLabel>
                    <InputBox placeholder="Digite seu email"></InputBox>
                </InputGroup>
                <InputGroup>
                    <InputLabel>Senha</InputLabel>
                    <InputBox placeholder="Digite sua senha"></InputBox>
                </InputGroup>
            </LoginContainer>
            <MainBtn>
            <MainBtnText>Continuar</MainBtnText>
            </MainBtn>
        </Container>
    );
}

export default Login;