const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(png|gif|jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/,
                exclude: /node_modules/,
                use:[{
                    loader:'url-loader',
                    options:{
                        limit:100000
                    }
                }]
                // use:['file-loader'],
                // loader: 'url-loader?importLoaders=1&limit=100000'
            },
        ],
        loaders: [
            { 
              test: /\.js$/, 
              exclude: /node_modules/, 
              loader: 'babel-loader?presets[]=react,presets[]=es2015,presets[]=stage-0' 
            }
          ]
    },
    
    devServer: {
        contentBase: './public'
    }
};

