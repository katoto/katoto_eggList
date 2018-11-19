const Service = require('egg').Service;

// 是用来操作数据库的文件存放的地方/或者请求数据的地方 业务逻辑层
// 代理服务器中，Controller 将用户的请求转发到其他服务器上，并将其他服务器的处理结果返回给用户
class msgListService extends Service {
    async iqiyi_movie() {
        const ctx = this.ctx;
        // 表示在数据库中查找  
        return ctx.model.MsgListMovie.find()
    }
    async iqiyi_music() {
        const ctx = this.ctx;
        return ctx.model.MsgListMusic.find()
    }
    async iqiyi_tvMsg() {
        const ctx = this.ctx;
        const queryObj = ctx.query
        let result = null;
        if (queryObj.tvid) {
            if (!queryObj.pageno) queryObj.pageno = 1
            result = await this.ctx.curl(`http://cache.video.iqiyi.com/jp/avlist/${queryObj.tvid}/${queryObj.pageno}/50/?albumId=${queryObj.tvid}&pageNum=50&pageNo=${queryObj.pageno}`, { dataType: 'text' });
            result = result.data.replace('var tvInfoJs=', ' ')
        }
        return JSON.parse(result)
    }
}

module.exports = msgListService;