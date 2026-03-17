const xml2js = require('xml2js')

async function converterXmlParaObjeto(xml) {
  const parser = new xml2js.Parser({
    explicitArray: false,
    mergeAttrs: true
  })

  return await parser.parseStringPromise(xml)
}

function extrairResumo(objetoXml, nomeArquivo) {
  const infNFe = objetoXml?.nfeProc?.NFe?.infNFe || {}

  return {
    arquivo: nomeArquivo,
    dataProcessamento: new Date().toISOString(),
    numeroNota: infNFe?.ide?.nNF || null,
    dataEmissao: infNFe?.ide?.dhEmi || null,
    emitente: infNFe?.emit?.xNome || null,
    cnpjEmitente: infNFe?.emit?.CNPJ || null,
    destinatario: infNFe?.dest?.xNome || null,
    cnpjDestinatario: infNFe?.dest?.CNPJ || null,
    valorNota: infNFe?.total?.ICMSTot?.vNF || null
  }
}

module.exports = {
  converterXmlParaObjeto,
  extrairResumo
}