function info(message) {
  console.log(`[INFO] ${message}`)
}

function error(message) {
  console.error(`[ERRO] ${message}`)
}

module.exports = {
  info,
  error
}