import React from 'react';
import { Container, Content, Fechar, Img, Props, P, StyleImg, Color, Alinhamento } from './styles';
import * as S from "./styles"

export default function Modal(props:any) {
  return (
    <Container data-testid="test-modal">
      <Content>
        <Img>
          <StyleImg src={props.personagemAtual.image} />          
        </Img>
        <Props>
          <P>Nome:<Color>{props.personagemAtual.name}</Color></P>
          <P>Casa:<Color>{props.personagemAtual.house}</Color></P>
          <P>Espécie:<Color>{props.personagemAtual.species}</Color></P>
          <P>Data de Nasc:<Color>{props.personagemAtual.dateOfBirth}</Color></P>
          <P>Gênero:<Color>{props.personagemAtual.gender}</Color></P>
          <P>Patronus:<Color>{props.personagemAtual.patronus}</Color></P>
          <P>varinha:<Color></Color></P>
          <Alinhamento>
          <P>- Madeira<Color>{props.personagemAtual.wand.wood}</Color></P>
          <P>- Núcleo<Color>{props.personagemAtual.wand.core}</Color></P>
          <P>- Comprimnto<Color>{props.personagemAtual.wand.length}</Color></P>
          </Alinhamento>
          <P>Ancestralidade:<Color>{props.personagemAtual.ancestry}</Color></P>
          <P>Ator:<Color>{props.personagemAtual.actor}</Color></P>
        </Props>
        <Fechar onClick={props.handleClose}>X</Fechar>
      </Content>
    </Container>
  )
}