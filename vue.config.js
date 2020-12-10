module.exports = {
  runtimeCompiler: true,
  configureWebpack: {
    devtool: "source-map"
  },
  "transpileDependencies": [
    "vuetify"
  ],
  devServer: {
    // https: true,
    // key: fs.readFileSync('/var/www/app.drwatcher/ssl/proto/privkey.pem'),
    // cert: fs.readFileSync('/var/www/app.drwatcher/ssl/proto/fullchain.pem'),
    disableHostCheck: true,
    port: 8081,
    host: "0.0.0.0",
    public: '192.168.50.3:8081'
  }
}