const { dirname } = require('path');
const path = require('path');

module.exports={
    mode:'production',
    entry:path.resolve(__dirname, 'js/index.js'),
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
        use: ["style-loader", "css-loader"],
          },
        ],
      },
}