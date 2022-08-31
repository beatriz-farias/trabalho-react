import styled from 'styled-components/native'
import { style } from '../../global/global'

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