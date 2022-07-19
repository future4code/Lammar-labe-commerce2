import React, { useState } from 'react';
import dadosDados from "./banco_de_dados/dados.json"
import { Cartoes } from './components/Cards/Cartao';
import { Filtros } from './components/Filtro/Filtro';
import { Cabecalho } from './components/Header/Cabecalho';
import { ContainerApp } from './style';


function App() {

  // VARIÁVEIS PARA CRIAR AS PROPS

  const [dados] = useState(dadosDados)
  const [nomeProdutos, setNomeProdutos] = useState("")
  const [valorMin, setValorMin] = useState("")
  const [valorMax, setValorMax] = useState("")
  const [ordenar, setOrdenar] = useState("Crescente")


  return (
    <>

      {/* CABEÇALHO DO SITE  */}
      <Cabecalho />

      {/* FILTROS DO SITE */}
      <Filtros
        nomeProdutos={nomeProdutos}
        setNomeProdutos={setNomeProdutos}
        valorMin={valorMin}
        setValorMin={setValorMin}
        valorMax={valorMax}
        setValorMax={setValorMax}
        ordenar={ordenar}
        setOrdenar={setOrdenar}

      />

      {/* CORPO DO SITE */}
      <ContainerApp>
        {dados
          .filter((dados) => {
            return dados.nome.includes(nomeProdutos)
          })
          .filter((dados) => {
            return dados.valor >= valorMin || valorMin === ""
          })
          .filter((dados) => {
            return dados.valor <= valorMax || valorMax === ""
          })
          .sort(() => {
            if (ordenar === "Crescente") {
              return 0
            } else {
              return -1
            }
          })
          .map(infos => {
            return <Cartoes key={infos.nome} dados={infos} />
          })}

      </ContainerApp>
    </>);
}

export default App;
