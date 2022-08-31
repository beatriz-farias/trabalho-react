import React from 'react'
import { CategoryGroup, PdtName, ProductInfo, PdtBox, Img } from './style'

type ProductInfo = {
    ProductName: string;
    ProductIndex: number;
    ProductPrice: string;
    ProductDelivery: string;
}

export default function Product({ ProductName, ProductIndex, ProductPrice, ProductDelivery } : ProductInfo) {
    return (
        <PdtBox>
            <Img source={require(`../../assets/produto${ProductIndex}.svg`)} alt={ProductName}></Img>
            <CategoryGroup>
                <PdtName>{ProductName}</PdtName>
                <ProductInfo>{`R$${ProductPrice}`}</ProductInfo>
                <ProductInfo>{ProductDelivery}</ProductInfo>
            </CategoryGroup>
        </PdtBox>
    )
}