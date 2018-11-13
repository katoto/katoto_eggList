'use strict'

// controller 用于分发路由接口请求文件夹

const Controller = require('egg').Controller;
class msgListController extends Controller {
    async iqiyi() {
        const ctx = this.ctx;
        // ctx.throw(412)
        // ctx.set('Access-Control-Allow-Origin', '*')
        let movie = await ctx.service.msgList.iqiyi_movie()
        let music = await ctx.service.msgList.iqiyi_music()
        let data = {
            data: {
                music,
                movie
            },
            status: "100",
            message: "ok"
        }
        ctx.body = data
    }
}

module.exports = msgListController