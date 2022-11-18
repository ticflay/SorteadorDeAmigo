import React from 'react';
import Card from '../../components/Card';
import Header from '../../components/Header';
import { HomeContainer } from './styled';


export default function Home() {
    return (
        <HomeContainer>
            <Header />
            <Card />
        </HomeContainer>
    )
}