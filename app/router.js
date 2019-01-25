// 是用来分配接口路由的文件
// 年级详情  artdetail
// 资讯详情 edumsg
module.exports = app => {
    const { router, controller } = app;
    router.get('/', controller.msgList.index);
    router.get('/iqiyi', controller.msgList.iqiyi);
    router.get('/iqiyiMovie', controller.msgList.iqiyiMovie);
    router.get('/iqiyiTvlist', controller.msgList.iqiyiTvlist);
    router.get('/iqiyiTvMsg', controller.msgList.iqiyiTvMsg);
    router.get('/educlassmsg', controller.msgList.educlassmsg)
    router.get('/artdetail', controller.msgList.artdetail)
    router.get('/eduZixun', controller.msgList.eduZixun)
    router.get('/edumsg', controller.msgList.edumsg)
    router.get('/tuzhailist', controller.msgList.tuzhailist)
    router.get('/tuzhaimsg', controller.msgList.tuzhaimsg)
    router.get('/kutulist', controller.msgList.kutulist)
};