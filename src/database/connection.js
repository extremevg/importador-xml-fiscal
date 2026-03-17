const path = require('path')
const sqlite3 = require('sqlite3').verbose()

const caminhoBanco = path.join(__dirname, '../../output/importador_xml_fiscal.db')

const db = new sqlite3.Database(caminhoBanco, (err) => {
  if (err) {
    console.error('Erro ao conectar no banco SQLite:', err.message)
  } else {
    console.log('Banco SQLite conectado com sucesso.')
  }
})

module.exports = db