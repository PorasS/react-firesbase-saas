const path = require('path');
const rules = [
    {
        test: /\.tsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader'
    }, {
        test: /\.css$/,
        use: [
            'style-loader',
            'css-loader'
        ]
    },
    {
        test: /\.svg$/,
        use: [
            {
                loader: "babel-loader"
            },
            {
                loader: "react-svg-loader",
                options: {
                    jsx: true // true outputs JSX tags
                }
            }
        ]
    }
]


module.exports = {
    target: 'web',
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: { rules },
    resolve: { extensions: ['.ts', '.tsx', '.js'] },
    devServer: {
        contentBase: './',
        port: 8182,
        historyApiFallback: true
    }

}