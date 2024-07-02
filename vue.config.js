const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    public: 'https://taskm2.onrender.com', 
  },
})
