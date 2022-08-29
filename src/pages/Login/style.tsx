import styled from 'styled-components/native'
import { style } from '../../global/global'

export const Menu = styled.View`
background-color:${style.colors.blue};
`

export const LogoSymbol = styled.Image`
height: 64px;
width: 257.89px;
margin: 12px 24px;
`

export const Container = styled.View`
background-color:${style.colors.offWhite};
flex: 1;
`

export const LoginContainer = styled.View`
background-color:${style.colors.blue};
border-radius: 20px;
margin: 0 22px;
`

export const Slogan = styled.Text`
margin: 7vh 22px;
font-size: 20px;
font-family: ${style.fonts.rbbd}
`

export const InputGroup = styled.View`
padding: 5px;
margin: 5px 0;
`

export const InputLabel = styled.Text`
margin: 0.05vh;
font-size: 18px;
padding: 10px 5px;
font-family: ${style.fonts.rbreg}
`

export const InputBox = styled.TextInput`
background-color:${style.colors.offWhite}
height: 42px;
align-self: stretch
margin: 5px;
padding: 5px;
border-radius: 10px;
font-size: 16px;
t
font-family: ${style.fonts.rblight}
`

export const MainBtn = styled.TouchableOpacity`
height: 40px;
width: 247px;
margin: 22px;
border-radius: 15px;
background-color:${style.colors.mainGreen};
align-items: center;
align-self: center;
justify-content: center;
`

export const MainBtnText = styled.Text`
align-self: center
font-size: 18px;
font-family: ${style.fonts.rbsb}
color: ${style.colors.offWhite};
`