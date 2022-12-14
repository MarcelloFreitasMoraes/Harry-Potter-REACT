import React from "react";
import * as S from "../../styles/styles.modal";
import { imgPhoto } from "../utils/helpers";

export default function Modal(props: any) {
  return (
    <S.Container data-testid="test-modal">
      <S.Content>
        <S.Img>
          <S.StyleImg
            src={
              props.personagemAtual.image !== ""
                ? props.personagemAtual.image
                : imgPhoto(props.personagemAtual.name)
            }
          />
        </S.Img>
        <S.Main>
          <S.Text>
            Nome:{" "}
            <S.Color>{props.personagemAtual.name ? props.personagemAtual.name : "Desconhecido"}</S.Color>
          </S.Text>
          <S.Text>
            Casa:{" "}
            <S.Color>{props.personagemAtual.house ? props.personagemAtual.house : "Desconhecido"}</S.Color>
          </S.Text>
          <S.Text>
            Espécie:{" "}
            <S.Color>{props.personagemAtual.species ? props.personagemAtual.species  : "Desconhecido"}</S.Color>
          </S.Text>
          <S.Text>
            Data de Nasc:{" "}
            <S.Color>
              {props.personagemAtual.dateOfBirth ? props.personagemAtual.dateOfBirth : "Desconhecido"}
            </S.Color>
          </S.Text>
          <S.Text>
            Gênero:{" "}
            <S.Color>{props.personagemAtual.gender ? props.personagemAtual.gender : "Desconhecido"}</S.Color>
          </S.Text>
          <S.Text>
            Patronus:{" "}
            <S.Color>
              {props.personagemAtual.patronus ? props.personagemAtual.patronus : "Desconhecido"}
            </S.Color>
          </S.Text>
          <S.Text>
            Varinha: <S.Color></S.Color>
          </S.Text>
          <S.Alignment>
            <S.Text>
              - Madeira:{" "}
              <S.Color>
                {props.personagemAtual.wand.wood ? props.personagemAtual.wand.wood : "Desconhecido"}
              </S.Color>
            </S.Text>
            <S.Text>
              - Núcleo:{" "}
              <S.Color>
                {props.personagemAtual.wand.core ? props.personagemAtual.wand.core : "Desconhecido"}
              </S.Color>
            </S.Text>
            <S.Text>
              - Comprimento:{" "}
              <S.Color>
                {props.personagemAtual.wand.length ? props.personagemAtual.wand.length : "Desconhecido"}
              </S.Color>
            </S.Text>
          </S.Alignment>
          <S.Text>
            Ancestralidade:{" "}
            <S.Color>
              {props.personagemAtual.ancestry ? props.personagemAtual.ancestry : "Desconhecido"}
            </S.Color>
          </S.Text>
          <S.Text>
            Ator:{" "}
            <S.Color>{props.personagemAtual.actor ? props.personagemAtual.actor : "Desconhecido"}</S.Color>
          </S.Text>
        </S.Main>
        <S.Closed onClick={props.handleClose}>X</S.Closed>
      </S.Content>
    </S.Container>
  );
}
