const path = require('path');
const glob = require('glob');


const entries = {};
const srcFiles = './src/ts/*.ts';
glob.sync(srcFiles).map(function (file) {
  const key = path.basename(file, '.ts');
  entries[key] = file;
});

module.exports = {
    // mode: 'production',
    mode: 'development',
    entry: entries,
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.ts']
    },
    output: {
        path: __dirname + '/dist/js',
        filename: '[name].js'
    }
};
