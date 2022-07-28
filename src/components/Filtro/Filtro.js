import React from "react";
import { ContainerFiltros } from "./Style";

export function Filtros(props) {
    return <ContainerFiltros>
        <input
            placeholder="Nome do Produto"
            value={props.nomeProdutos}
            onChange={(evento) => { props.setNomeProdutos(evento.target.value) }}
        />

        <input
            placeholder="Valor mínimo"
            value={props.valorMin}
            onChange={(evento) => { props.setValorMin(evento.target.value) }}
        />

        <input
            placeholder="Valor Máximo"
            value={props.valorMax}
            onChange={(evento) => { props.setValorMax(evento.target.value) }}
        />
        <span>
        <label for="Ordenar"> Ordenar por: </label>
        <select
        value={props.ordenar}
        onChange={(evento) => { props.setOrdenar(evento.target.value) }}
        >
        <option value={"Crescente"}> Crescente </option>
        <option value={"Decrescente"}> Decrescente </option>
        </select>
        </span>
    </ContainerFiltros>
}