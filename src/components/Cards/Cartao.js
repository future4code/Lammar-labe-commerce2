import React from "react";
import { ContainerCartao, ConteudoCartao, FooterCartao } from "./Style";



export function Cartoes (props) {

    return <ContainerCartao>
        <h2>
            <u> {props.dados.nome}</u>
        </h2>
        <ConteudoCartao>
            <img src={props.dados.imagem}/>
        </ConteudoCartao>
        <FooterCartao>
            <span> R$ {props.dados.valor} </span>
            <button> Adicionar ao Carrinho </button>
        </FooterCartao>
    </ContainerCartao>
}