// 是用来分配接口路由的文件
module.exports = app => {
    const { router, controller } = app;
    // router.get('/', controller.home.index);
    router.get('/iqiyi', controller.msgList.iqiyi)
};
