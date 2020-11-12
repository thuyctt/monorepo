// const withTypescript = require('@zeit/next-typescript');
// const withTM = require('@weco/next-plugin-transpile-modules');
 
// module.exports = withTypescript(
//   withTM({
//     transpileModules: ['shared']
//   })
// );
// "@weco/next-plugin-transpile-modules": "^2.2.1",
// const withTM = require('next-transpile-modules');
// const withTM = require('next-transpile-modules')(['somemodule', 'and-another']); 
const withTM = require('next-transpile-modules')(['shared', 'design']);
module.exports = withTM;