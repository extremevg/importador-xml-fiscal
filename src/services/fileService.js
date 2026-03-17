const fs = require('fs')
const path = require('path')

function listarArquivosXml(pasta) {
  const arquivos = fs.readdirSync(pasta)

  return arquivos
    .filter((arquivo) => arquivo.toLowerCase().endsWith('.xml'))
    .map((arquivo) => path.join(pasta, arquivo))
}

function lerArquivo(caminhoArquivo) {
  return fs.readFileSync(caminhoArquivo, 'utf8')
}

module.exports = {
  listarArquivosXml,
  lerArquivo
}