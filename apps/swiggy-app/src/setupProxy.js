const { createProxyMiddleware } = require("http-proxy-middleware");

// http://localhost:3000/api/v1/users -

module.exports = function (app) {
  app.use(
    "/api/v1/users",
    createProxyMiddleware({
      target: "http://localhost:3001/api/v1/users",
      pathRewrite: {
        "/api/v1/users": "/",
      },
      secure: false,
      onProxyReq: (proxyReq, req, res) => {},
    })
  );

  app.use(
    "/api/v1/restaurants",
    createProxyMiddleware({
      target: "http://localhost:3002/api/v1/restaurants",
      pathRewrite: {
        "/api/v1/restaurants": "/",
      },
      secure: false,
      onProxyReq: (proxyReq, req, res) => {},
    })
  );

  app.use(
    "/api/v1/dishes",
    createProxyMiddleware({
      target: "http://localhost:3002/api/v1/dishes",
      pathRewrite: {
        "/api/v1/dishes": "/",
      },
      secure: false,
      onProxyReq: (proxyReq, req, res) => {},
    })
  );

  app.use(
    "/api/v1/cart",
    createProxyMiddleware({
      target: "http://localhost:3003/api/v1/cart",
      pathRewrite: {
        "/api/v1/cart": "/",
      },
      secure: false,
      onProxyReq: (proxyReq, req, res) => {},
    })
  );

  app.use(
    "/api/v1/payments",
    createProxyMiddleware({
      target: "http://localhost:3005/api/v1/payments",
      pathRewrite: {
        "/api/v1/payments": "/",
      },
      secure: false,
      onProxyReq: (proxyReq, req, res) => {},
    })
  );

  app.use(
    "/api/v1/orders",
    createProxyMiddleware({
      target: "http://localhost:3004/api/v1/orders",
      pathRewrite: {
        "/api/v1/orders": "/",
      },
      secure: false,
      onProxyReq: (proxyReq, req, res) => {},
    })
  );
};

/*
| app    | port |
| -------- | ------- |
| proxy  |  80    |
| user service | 3001     |
| restaurant service | 3002     |
| cart service | 3003     |
| order service | 3004    |
| payment service | 3005   |
| delivery service | 3006    |
| MQ Listener service | 3001     |

*/
