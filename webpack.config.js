
const path = require("path")
const autoprefixer = require("autoprefixer")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
require("@babel/polyfill");

const MODE = process.env.WEBPACK_ENV;
const ENTRY_FILE = path.resolve(__dirname,"./src/assets/js/main.js");
const OUTPUT_DIR = path.join(__dirname,"./src/static")

const config = {
    entry : ["@babel/polyfill",ENTRY_FILE],
    mode:MODE,
    module:{
        rules:[{
            test:/\.js$/,
            use:{
                    loader:"babel-loader"
                }
            },
            {
                test:/\.scss$/,
                use:[{
                    loader:MiniCssExtractPlugin.loader
                },
                {
                    loader:"css-loader"
                },
                {
                    loader:"postcss-loader",
                    options:{
                        postcssOptions:{
                            plugins(){
                                return [autoprefixer({browsers:"cover 99.5%"})]
                            }
                        }
                    }
                },
                {
                        loader:"sass-loader"
                }]
            }
            
        ]
    },
        output:{
            path:OUTPUT_DIR,
            filename:"[name].js"
        },
        plugins:[new MiniCssExtractPlugin({
            filename:"styles.css"
        })]
    }

    module.exports = config;