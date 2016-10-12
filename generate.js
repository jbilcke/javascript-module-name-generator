
const A = [
  '',
  'pure',
  'simple',
  ''
]
const B = [
  'reactive', 
  'immutable',
  'persistent',
  'modern',
  'slick',
  'stateless',
  'async',
  'promise',
  ''
]
const C = [
  'backend',
  'scala',
  'node',
  'react', 
  'redux',
  'saga',
  'mobx',
  'baobab',
  'play',
  'database',
  'stream',
  ''
]
const D = [
  'view',
  'controller',
  'middleware',
  'plugin',
  'component',
  'container',
  'renderer',
  'connector',
  'router'
]

const E = [
  '',
  'module',
  '',
  'engine',
  ''
]

function get(words) {
  return words[Math.floor(Math.random() * words.length)]
}

module.exports = function generate() {
  return [
    get(A),
    get(B),
    get(C),
    get(D),
    get(E)
  ].filter(function(x){ return x !== ''}).join('-')
}

