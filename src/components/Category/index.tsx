import React from 'react'
import { CategoryGroup, Img, Name } from './style'
import { categories } from '../../constants/categories'

type CategoryInfo = {
    categoryName: string;
    categoryImg: string;
}

export default function Category({ categoryName, categoryImg }: CategoryInfo) {
    return (
        <CategoryGroup>
            <Img source={require(`../../assets/${categoryImg}.svg`)} alt='Placa-Mãe'></Img>
            <Name>{categoryName}</Name>    
        </CategoryGroup>
    )
}