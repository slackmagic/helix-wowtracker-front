const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api/userstore',
    createProxyMiddleware({
      target: 'https://home.stunbox.ovh',
      changeOrigin: true,
    }),
  );

  app.use(
    '/api/wow-tracker',
    createProxyMiddleware({
      target: 'http://127.0.0.1:8000',
      //changeOrigin: true,
    }),
  );
};