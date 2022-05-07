const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    createProxyMiddleware("/login", {
      target: "https://apimocha.com/gocluster",
      changeOrigin: true,
    })
  );
};
