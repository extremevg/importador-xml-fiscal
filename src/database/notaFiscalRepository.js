const db = require('./connection')

function criarTabela() {
  const sql = `
    CREATE TABLE IF NOT EXISTS notas_fiscais (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      arquivo TEXT,
      data_processamento TEXT,
      numero_nota TEXT,
      data_emissao TEXT,
      emitente TEXT,
      cnpj_emitente TEXT,
      destinatario TEXT,
      cnpj_destinatario TEXT,
      valor_nota TEXT
    )
  `

  return new Promise((resolve, reject) => {
    db.run(sql, (err) => {
      if (err) {
        reject(err)
      } else {
        resolve()
      }
    })
  })
}

function inserirNotaFiscal(nota) {
  const sql = `
    INSERT INTO notas_fiscais (
      arquivo,
      data_processamento,
      numero_nota,
      data_emissao,
      emitente,
      cnpj_emitente,
      destinatario,
      cnpj_destinatario,
      valor_nota
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `

  const valores = [
    nota.arquivo,
    nota.dataProcessamento,
    nota.numeroNota,
    nota.dataEmissao,
    nota.emitente,
    nota.cnpjEmitente,
    nota.destinatario,
    nota.cnpjDestinatario,
    nota.valorNota
  ]

  return new Promise((resolve, reject) => {
    db.run(sql, valores, function (err) {
      if (err) {
        reject(err)
      } else {
        resolve(this.lastID)
      }
    })
  })
}

function listarNotasFiscais() {
  const sql = `SELECT * FROM notas_fiscais ORDER BY id DESC`

  return new Promise((resolve, reject) => {
    db.all(sql, [], (err, rows) => {
      if (err) {
        reject(err)
      } else {
        resolve(rows)
      }
    })
  })
}

module.exports = {
  criarTabela,
  inserirNotaFiscal,
  listarNotasFiscais
}