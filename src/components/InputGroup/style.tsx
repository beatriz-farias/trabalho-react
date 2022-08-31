import styled from 'styled-components/native'
import { style } from '../../global/global'

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