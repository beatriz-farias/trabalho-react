import React from 'react';
import { InputGroup, InputBox, InputLabel } from './style';

type InputInfo = {
    InputName: string;
    PlaceholderTxt: string;
}

export default function InputGrp({InputName, PlaceholderTxt} : InputInfo) {
    return (
        <InputGroup>
            <InputLabel>{InputName}</InputLabel>
            <InputBox placeholder={PlaceholderTxt}></InputBox>
        </InputGroup>
    )
}