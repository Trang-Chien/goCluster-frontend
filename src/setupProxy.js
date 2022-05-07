const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    createProxyMiddleware("/login", {
      target: "http://127.0.0.1:1999",
      changeOrigin: true,
    })
  );
};
