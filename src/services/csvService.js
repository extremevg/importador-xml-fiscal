const fs = require('fs')
const path = require('path')

function escaparValor(valor) {
  if (valor === null || valor === undefined) {
    return ''
  }

  const texto = String(valor).replace(/"/g, '""')
  return `"${texto}"`
}

function gerarCsv(dados) {
  if (!dados || dados.length === 0) {
    return ''
  }

  const cabecalho = [
    'arquivo',
    'dataProcessamento',
    'numeroNota',
    'dataEmissao',
    'emitente',
    'cnpjEmitente',
    'destinatario',
    'cnpjDestinatario',
    'valorNota'
  ]

  const linhas = dados.map((item) => [
    escaparValor(item.arquivo),
    escaparValor(item.dataProcessamento),
    escaparValor(item.numeroNota),
    escaparValor(item.dataEmissao),
    escaparValor(item.emitente),
    escaparValor(item.cnpjEmitente),
    escaparValor(item.destinatario),
    escaparValor(item.cnpjDestinatario),
    escaparValor(item.valorNota)
  ].join(';'))

  return [cabecalho.join(';'), ...linhas].join('\n')
}

function salvarCsv(pastaSaida, nomeArquivo, conteudoCsv) {
  if (!fs.existsSync(pastaSaida)) {
    fs.mkdirSync(pastaSaida, { recursive: true })
  }

  const caminhoFinal = path.join(pastaSaida, nomeArquivo)
  fs.writeFileSync(caminhoFinal, conteudoCsv, 'utf8')

  return caminhoFinal
}

module.exports = {
  gerarCsv,
  salvarCsv
}