'use strict'

module.exports = appInfo => {
    const config = exports = {};
    config.keys = appInfo.name + '_1542077984904_8263';
    config.view = {
        mapping: {
            '.html': 'ejs'
        }
    };
    config.middleware = []

    config.mongoose = {
        url: process.env.EGG_MONGODB_URL || 'mongodb://47.96.234.59:27017/katoto',
        options: {
            server: {
                poolSize: 20,
                a: 123
            }
        }
    }
    config.cluster = {
        // 设置服务端口
        listen: {
            port: 4561,
            hostname: "127.0.0.1"
        }
    }
    return config

}