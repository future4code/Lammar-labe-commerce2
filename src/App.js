import React, { useState } from 'react';
import { Cartoes } from './components/Cards/Cartao';
import { Filtros } from './components/Filtro/Filtro';
import { Cabecalho } from './components/Header/Cabecalho';
import { ContainerApp } from './style';
import Challenger from './imagens/challenger.jpg'
import Atlantis from './imagens/Atlantis.jpg'
import Columbia from './imagens/Columbia.jpg'
import Enterprise from './imagens/enterprise.jpg'
import Millennium from './imagens/Millennium Falcon.jpg'
import StarFox from './imagens/fox.jpg'


function App() {

  // VARIÁVEIS PARA CRIAR AS PROPS
  const mock = [
    {
      nome: "Challenger",
      valor: 1000000,
      imagem: Challenger
    },

    {
      nome: "Atlantis",
      valor: 10000000,
      imagem: Atlantis
    },

    {
      nome: "Columbia",
      valor: 15000000,
      imagem: Columbia
    },

    {
      nome: "Millennium Falcon",
      valor: 25000000,
      imagem: Millennium
    },

    {
      nome: "Enterprise",
      valor: 35000000,
      imagem: Enterprise
    },

    {
      nome: "StarFox",
      valor: 64000000,
      imagem: StarFox
    }
  ]


  const [dados] = useState(mock)
  const [nomeProdutos, setNomeProdutos] = useState("")
  const [valorMin, setValorMin] = useState("")
  const [valorMax, setValorMax] = useState("")
  const [ordenar, setOrdenar] = useState("Crescente")


  return (
    <body>

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
    </body>);
}

export default App;
