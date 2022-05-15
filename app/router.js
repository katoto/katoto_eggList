// 是用来分配接口路由的文件
// 电影 iqiyiMovie
// 电视剧列表 iqiyiTvlist
// 电视剧详情 iqiyiTvMsg
// 小学年级列表 educlassmsg
// 小学年级详情 artdetail
// 每日资讯列表 eduZixun
// 每日资讯详情 edumsg
// 图摘列表 tuzhailist
// 图摘详情 tuzhaimsg
// 酷图列表& 详情 kutulist
// 打喷嚏列表 diagram
// 打喷嚏详情 diagrammsg
module.exports = (app) => {
  const { router, controller } = app;
  router.get("/", controller.msgList.index);
  router.get("/iqiyi", controller.msgList.iqiyi);
  router.get("/iqiyiMovie", controller.msgList.iqiyiMovie);
  router.get("/iqiyiTvlist", controller.msgList.iqiyiTvlist);
  router.get("/iqiyiTvMsg", controller.msgList.iqiyiTvMsg);
  router.get("/educlassmsg", controller.msgList.educlassmsg);
  router.get("/artdetail", controller.msgList.artdetail);
  router.get("/eduZixun", controller.msgList.eduZixun);
  router.get("/edumsg", controller.msgList.edumsg);
  router.get("/tuzhailist", controller.msgList.tuzhailist);
  router.get("/tuzhaimsg", controller.msgList.tuzhaimsg);
  router.get("/kutulist", controller.msgList.kutulist);
  router.get("/diagram", controller.msgList.diagram);
  router.get("/diagrammsg", controller.msgList.diagrammsg);
};
