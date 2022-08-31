import React from 'react'
import { MainBtn, MainBtnText } from './style'

type BotaoInfo = {
    value: string;
}

function Button ({ value } : BotaoInfo) {
    return (
        <MainBtn>
            <MainBtnText>{value}</MainBtnText>
        </MainBtn>
    )
}

export default Button