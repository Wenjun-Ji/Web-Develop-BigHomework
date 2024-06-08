// vue.config.js
module.exports = {
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                    loader: 'file-loader',
                    options: {
                        name: 'assets/images/[name].[hash:8].[ext]'
                    }
                }
            ]
        }
    }
};
