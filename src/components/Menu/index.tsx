import React from 'react'
import { Menu, LogoSymbol } from './style'

export default function MainMenu() {
    return (
        <Menu>
            <LogoSymbol source={require('../../assets/logo.svg')}/>
        </Menu>
    )
}