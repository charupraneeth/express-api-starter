const environment = process.env.NODE_ENV

const inProd = environment === 'production'

module.exports = { inProd }