const functions = require('@google-cloud/functions-framework')

// Register an HTTP function with the Functions Framework that will be executed
// when you make an HTTP request to the deployed function's endpoint.
/*
functions.http('asocialGCF', (req, res) => {
  res.send('Bonjour Daniel')
})
*/

function asocialGCF(req, res) {
  res.send('Bonjour Daniel ' + new Date().toISOString())
}

module.exports = {  asocialGCF }
