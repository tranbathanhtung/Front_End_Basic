module.exports = {
  entry :'./assets/js/index.js',

  output:{
    filename:"bundle.js"
  },
  module: {
    rules: [
    {  test: /\.css$/,
       use: ['style-loader','css-loader']
    }
    ]
  }
}
