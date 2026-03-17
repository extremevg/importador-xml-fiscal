const fs = require('fs')
const path = require('path')

function salvarJson(pastaSaida, nomeArquivo, dados) {
  if (!fs.existsSync(pastaSaida)) {
    fs.mkdirSync(pastaSaida, { recursive: true })
  }

  const nomeFinal = nomeArquivo.replace('.xml', '.json')
  const caminhoFinal = path.join(pastaSaida, nomeFinal)

  fs.writeFileSync(caminhoFinal, JSON.stringify(dados, null, 2), 'utf8')

  return caminhoFinal
}

module.exports = {
  salvarJson
}