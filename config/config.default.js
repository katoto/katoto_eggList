"use strict";

module.exports = (appInfo) => {
  const config = (exports = {});
  config.keys = appInfo.name + "_1542077984904_8263";
  config.view = {
    mapping: {
      ".html": "ejs",
    },
  };
  config.middleware = [];

  config.mongoose = {
    url: process.env.EGG_MONGODB_URL || "mongodb://81.69.15.167:27017/admin",
    options: {},
    model: {
      loadModel: true,
    },
  };
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    domainWhiteList: ["http://localhost:7001"],
  };
  config.cors = {
    origin: "*",
    allowMethods: "GET, HEAD, PUT, POST, DELETE, PATCH, OPTIONS",
  };
  return config;
};
// config.cluster = {
//     // 设置服务端口  走默认7001 就xing
//     listen: {
//         port: 4561,
//         hostname: "127.0.0.1"
//     }
// }
