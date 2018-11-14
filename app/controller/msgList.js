'use strict'

// controller 用于分发路由接口请求文件夹

const Controller = require('egg').Controller;
class msgListController extends Controller {
    async iqiyi() {
        const ctx = this.ctx;
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
    async index() {
        this.ctx.body = "Hello world egg start"
    }
}

module.exports = msgListController