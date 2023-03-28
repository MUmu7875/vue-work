const path = require('path') // 引用path模块
const HtmlWebpackPlugin = require("html-webpack-plugin")
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {  // 这里是commrnt.js语法
 // 入口文件
 entry:["./src/main.js","./src/blocklyTools.js"],
 // 打包后的出口文件
 output:{
     // 输出的路径  是绝对路径(导入path模块) 这里是用node来做的
     path:path.resolve(__dirname,'build'),
     // 输出的文件名称
     filename:'build.js',
 },
 mode:"development",
 module: {
     rules: [
       { test: /\.vue$/, use: 'vue-loader' },
       { test: /\.css$/, use: ['style-loader','css-loader'] },
       {
           // 处理图片资源
         test: /\.jpg|png|gif$/,
         // 只使用一个loader处理，写法如下：
         // 下载 url-loader 和 file-loader
         loader:'url-loader',
         // loader的配置可以通过option来配置
         options: {
           // 图片大小小于12kb，就会base64处理
           // 通常我们只会对8-12kb以下的图片进行base64处理
           // 优点：减少请求数量（减轻服务器压力）
           // 缺点：图片体积会更大（文件请求速度更慢）
           limit: 12 * 1024
         }
       },
     ],
 },
 plugins:[
       new VueLoaderPlugin(),
       new HtmlWebpackPlugin({
           template: path.resolve(__dirname, './public/index.html')
       })
 ],
}

