const generate = require('./generate');
module.exports = async function (req, res) {
  const output = generate();
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  const str = output;
  res.setHeader('Content-Length', Buffer.byteLength(str))
  res.end(str)
}
