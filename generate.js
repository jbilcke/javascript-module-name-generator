
const A = [
  '',
  '',
  'pure',
  'simple',
  'reverse',
  '',
  ''
]
const B = [
  '',
  '',
  'reactive', 
  'immutable',
  'persistent',
  'postmodern',
  'modern',
  'slick',
  'stateless',
  '',
  ''
]
const C = [
  '',
  'async',
  'isomorphic',
  '',
  ''
]
const D = [
  'login',
  'translation',
  'i18n',
  'security',
  'babel',
  'test',
  'web',
  'webpack',
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
  'angular',
  'aurelia',
  'server',
  'ractive',
  'template'
]
const E = [
  'view',
  'controller',
  'middleware',
  'plugin',
  'component',
  'container',
  'renderer',
  'connector',
  'builder',
  'compiler',
  'router',
  'prefixer',
  'reloader'
]

const F = [
  '',
  'module',
  '',
  'engine',
  'dispatcher',
  'linter',
  'validator',
  '',
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
    get(E),
    get(F)
  ].filter(function(x){ return x !== ''}).join('-')
}

