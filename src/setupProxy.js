const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    createProxyMiddleware("/login", {
      target: "https://apimocha.com/gocluster",
      changeOrigin: true,
    })
  );

  app.use(
    createProxyMiddleware("/register", {
      target: "https://apimocha.com/gocluster",
      changeOrigin: true,
    })
  );
};