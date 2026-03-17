const path = require('path')

const { listarArquivosXml, lerArquivo } = require('./src/services/fileService')
const { converterXmlParaObjeto, extrairResumo } = require('./src/services/xmlService')
const { salvarJson } = require('./src/services/outputService')
const { gerarCsv, salvarCsv } = require('./src/services/csvService')
const logger = require('./src/utils/logger')

const PASTA_XML = path.join(__dirname, 'data')
const PASTA_SAIDA = path.join(__dirname, 'output')

async function executar() {
  try {
    logger.info('Iniciando processamento dos arquivos XML...')

    const arquivosXml = listarArquivosXml(PASTA_XML)

    if (arquivosXml.length === 0) {
      logger.info('Nenhum arquivo XML encontrado na pasta data.')
      return
    }

    const resumos = []

    for (const caminhoArquivo of arquivosXml) {
      const nomeArquivo = path.basename(caminhoArquivo)

      logger.info(`Processando arquivo: ${nomeArquivo}`)

      const xml = lerArquivo(caminhoArquivo)
      const objetoXml = await converterXmlParaObjeto(xml)
      const resumo = extrairResumo(objetoXml, nomeArquivo)

      resumos.push(resumo)

      const caminhoSaidaJson = salvarJson(PASTA_SAIDA, nomeArquivo, resumo)
      logger.info(`JSON gerado com sucesso: ${caminhoSaidaJson}`)
    }

    const conteudoCsv = gerarCsv(resumos)
    const caminhoCsv = salvarCsv(PASTA_SAIDA, 'resumo.csv', conteudoCsv)

    logger.info(`CSV gerado com sucesso: ${caminhoCsv}`)
    logger.info('Processamento finalizado com sucesso.')
  } catch (err) {
    logger.error(`Falha ao processar XML: ${err.message}`)
  }
}

executar()