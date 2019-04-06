const path = require('path');

module.exports = {
    mode: 'production',
    entry: './client/main.js',
    output: {
        filename: 'code.js',
        path: path.resolve(__dirname, 'dist')
    }
};
