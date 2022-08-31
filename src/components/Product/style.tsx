import styled from 'styled-components/native'
import { style } from '../../global/global'

export const CategoryGroup = styled.View`
padding: 2px;
width: 120px;
align-self:center;
`

export const ProductInfo = styled.Text`
margin-left: 5px;
font-size: 14px;
font-family: ${style.fonts.rbsb}
`

export const Name = styled.Text`
margin-top: 5px;
align-self:center;
font-size: 15px;
font-family: ${style.fonts.rbsb}
`

export const PdtName = styled.Text`
margin: 5px 0 5px 5px;
align-self:center;
font-size: 15px;
font-family: ${style.fonts.rbbd}
`

export const PdtBox = styled.View`
background-color:${style.colors.offWhite};
flex-direction: row;
padding-bottom: 0.25em
width: 100%;
align-self: flex-start;
padding: 5px 22px;
`

export const Img = styled.Image`
padding-top: 0.25vh;
height: 80px;
width: 80px;
align-self:center;
`