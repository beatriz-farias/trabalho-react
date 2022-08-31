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
export const CtgSection = styled.View`
flex-direction: column;
background-color:${style.colors.blue};
margin: 10px;
padding: 5px;
border-radius: 20px;
`

export const Container = styled.View`
background-color:${style.colors.offWhite};
flex: 1;
`

export const Slogan = styled.Text`
margin: 3vh 10px 2vh 22px;
font-size: 20px;
font-family: ${style.fonts.rbbd}
`

export const Subtitle = styled.Text`
font-weight: semi-bold;
padding: 2vh 0 2vh 17px;
font-size: 20px;
font-family: ${style.fonts.rbbd}
`

export const Categories = styled.View`
flex-direction: row;
flex-flow: row-wrap;
justify-content: space-between;
`
export const CategoryGroup = styled.View`
margin: 2px;
width: 120px;
align-self:center;
`

export const ProductInfo = styled.Text`
margin-left: 5px;
font-size: 16px;
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
margin: 5px 22px;
`

export const Img = styled.Image`
padding-top: 0.25vh;
height: 80px;
width: 80px;
align-self:center;
`