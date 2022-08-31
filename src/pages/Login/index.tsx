import React from 'react'
import { Container, LoginContainer, Menu, LogoSymbol, Slogan, InputGroup, InputBox, InputLabel, MainBtn, MainBtnText } from './style'
import MainMenu from '../../components/Menu';
import Button from '../../components/Button';
import InputGrp from '../../components/InputGroup';
import { inputBoxes } from '../../constants/inputBoxes';

function Login() {
    return (
        <Container>
            <MainMenu/>
            <Slogan>Peças para seu computador com preços que cabem no seu bolso</Slogan>
            <LoginContainer>
            {
                inputBoxes.map(input => 
                    <InputGrp key={input.index} InputName={input.name} PlaceholderTxt={input.content}/>
                )
            }
            </LoginContainer>
            <Button value={'Continuar'}/>
        </Container>
    );
}

export default Login;