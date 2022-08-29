import React from 'react'
import { Container, Menu, LogoSymbol, Slogan, Subtitle, Categories, Category,  CtgSection, Name, PdtName, ProductInfo, PdtBox, Img } from './style'

function Home() {
    return (
        <Container>
            <Menu>
                <LogoSymbol source={require('../../assets/logo.svg')}/>
            </Menu>
            <Slogan>Peças para seu computador com preços que cabem no seu bolso</Slogan>
            <CtgSection>
            <Subtitle>Categorias</Subtitle>
                <Categories>
                    <Category>
                        <Img source={require('../../assets/placamae.svg')} alt='Placa-Mãe'></Img>
                        <Name>Placa-Mãe</Name>    
                    </Category>
                    <Category>
                        <Img source={require('../../assets/memoriaRam.svg')} alt='Memória RAM'></Img>
                        <Name>Memória RAM</Name>
                    </Category>
                    <Category>
                        <Img source={require('../../assets/hdInterno.svg')} alt='HD Interno'></Img>
                        <Name>HD Interno</Name>
                    </Category>
                    <Category>
                        <Img source={require('../../assets/placasdevideo.svg')} alt='Placa de Vídeo'></Img>
                        <Name>Placa de Vídeo</Name>
                    </Category>
                    <Category>
                        <Img source={require('../../assets/placaderede.svg')} alt='Placa de Rede'></Img>
                        <Name>Placa de Rede</Name>
                    </Category>
                </Categories>
            </CtgSection>
            <Subtitle>Últimas Ofertas</Subtitle>
            <Categories>
                <PdtBox>
                    <Img source={require('../../assets/produto1.svg')} alt='Placa Mãe H61 Ddr3'></Img>
                    <Category>
                        <PdtName>Placa Mãe H61 Ddr3</PdtName>
                        <ProductInfo>R$ 354,90</ProductInfo>
                        <ProductInfo>Frete Grátis</ProductInfo>
                    </Category>
                </PdtBox>
                <PdtBox>
                    <Img source={require('../../assets/produto2.svg')} alt='Pen Drive USB 16GB'></Img>
                    <Category>
                        <PdtName>Pen Drive USB 16GB</PdtName>
                        <ProductInfo>R$ 23,99</ProductInfo>
                        <ProductInfo>Frete: R$ 5,90</ProductInfo>
                    </Category>
                </PdtBox>
                <PdtBox>
                    <Img source={require('../../assets/produto3.svg')} alt='Memória Notebook 8GB'></Img>
                    <Category>
                        <PdtName>Memória Notebook 8GB</PdtName>
                        <ProductInfo>R$ 153,90</ProductInfo>
                        <ProductInfo>Frete Grátis</ProductInfo>
                    </Category>
                </PdtBox>
            </Categories>
        </Container>
    );
}

export default Home;