import React from 'react';
import { Container, Slogan, Subtitle, Categories, CtgSection } from './style'
import MainMenu from '../../components/Menu/index';
import Category  from '../../components/Category/index';
import Product from '../../components/Product/index';
import { categories } from '../../constants/categories';
import { products } from '../../constants/products';

function Home() {
    return (
        <Container>
            <MainMenu/>
            <Slogan>Peças para seu computador com preços que cabem no seu bolso</Slogan>
            <CtgSection>
                <Subtitle>Categorias</Subtitle>
                <Categories>
                    {
                        categories.map(category => 
                            <Category key={category.index} categoryName={category.name} categoryImg={category.img}/>
                        )
                    }
                </Categories>
            </CtgSection>
            <Subtitle>Últimas Ofertas</Subtitle>
            <Categories>
                {
                    products.map(product =>
                        <Product key={product.index} ProductName={product.name} ProductIndex={product.index} ProductPrice={product.price} ProductDelivery={product.delivery} />
                    )
                }
            </Categories>
        </Container>
    );
}

export default Home;