
const path = require('path')

module.exports = {
    entry: './src/js/index.js',

    output:{
        path: path.resolve(__dirname, 'lib/js'),
        filename:'bash-mirror.js',
        library: {
            name: 'Bash',
            type: 'umd',
          }
    },
    mode : 'production'
}