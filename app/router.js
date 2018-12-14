// 是用来分配接口路由的文件
module.exports = app => {
    const { router, controller } = app;
    router.get('/', controller.msgList.index);
    router.get('/iqiyi', controller.msgList.iqiyi);
    router.get('/iqiyiTvlist', controller.msgList.iqiyiTvlist);
    router.get('/iqiyiTvMsg', controller.msgList.iqiyiTvMsg);
    router.get('/educlassmsg', controller.msgList.educlassmsg)
};