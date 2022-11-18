import React from 'react';
import { HeaderContainer, LogoImageSmall, LogoImageBigger, ParticipanteImage } from './styled';

export default function Header() {
    return(
        <HeaderContainer>
            <LogoImageSmall src={require('../../assets/imagens/logo-pequeno.png')} />
            <LogoImageBigger src={require('../../assets/imagens/logo.png')} />
            <ParticipanteImage src={require('../../assets/imagens/participante.png')} />

        </HeaderContainer>
    )
}