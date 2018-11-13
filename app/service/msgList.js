const Service = require('egg').Service;

// 是用来操作数据库的文件存放的地方
class msgListService extends Service {
    async iqiyi_movie() {
        const ctx = this.ctx;
        // 表示在数据库中查找
        return ctx.model.MsgList_movie.find()
    }
    async iqiyi_music() {
        const ctx = this.ctx;
        return ctx.model.MsgList_music.find()
    }
}

module.exports = msgListService;