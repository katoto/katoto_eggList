'use strict'

// controller 用于分发路由接口请求文件夹

const Controller = require('egg').Controller;
class msgListController extends Controller {
    async iqiyi() {
        const ctx = this.ctx;
        let movie = await ctx.service.msgList.iqiyi_movie()
        let data = {
            data: {
                movie
            },
            status: "100",
            message: "ok"
        }
        ctx.body = data
    }
    async iqiyiMovie() {
        // 请求爱奇艺电视剧列表
        const ctx = this.ctx;
        let movieMsg = await ctx.service.msgList.iqiyi_movie();
        let queryObj = ctx.query;
        let totalNum = await ctx.model.MsgListMovie.find({}).count();
        let pagesize = queryObj.pagesize;
        let pageno = queryObj.pageno;
        if (!pagesize) pagesize = 10;
        if (!pageno) pageno = 1;
        if (typeof pagesize === 'string') {
            pagesize = Number(pagesize);
        }
        if (typeof pageno === 'string') {
            pageno = Number(pageno);
        }
        let data = {
            data: {
                movieMsg,
                totalPages: Math.ceil(totalNum / pagesize),
                pagesize: pagesize,
                pageno: pageno,
            },
            status: "100",
            message: "ok"
        }
        ctx.body = data
    }
    async iqiyiTvlist() {
        // 请求爱奇艺电视剧列表
        const ctx = this.ctx;
        let tvMsg = await ctx.service.msgList.iqiyiTvlist();
        let queryObj = ctx.query;
        let totalNum = await ctx.model.IqiyiTvlist.find({}).count();
        let pagesize = queryObj.pagesize;
        let pageno = queryObj.pageno;
        if (!pagesize) pagesize = 10;
        if (!pageno) pageno = 1;
        if (typeof pagesize === 'string') {
            pagesize = Number(pagesize);
        }
        if (typeof pageno === 'string') {
            pageno = Number(pageno);
        }
        let data = {
            data: {
                tvMsg,
                totalPages: Math.ceil(totalNum / pagesize),
                pagesize: pagesize,
                pageno: pageno,
            },
            status: "100",
            message: "ok"
        }
        ctx.body = data
    }
    async edumsg() {
        // 请求edu 资讯详情列表
        const ctx = this.ctx;
        let msg = await ctx.service.msgList.edumsg();
        let data = {
            data: {
                msg: msg[0]
            },
            status: "100",
            message: "ok"
        }
        ctx.body = data
    }
    async artdetail() {
        // 请求edu 资讯详情列表
        const ctx = this.ctx;
        let msg = await ctx.service.msgList.artdetail();
        let data = {
            data: {
                msg: msg[0]
            },
            status: "100",
            message: "ok"
        }
        ctx.body = data
    }
    async eduZixun() {
        // 请求edu 资讯列表
        const ctx = this.ctx;
        let msg = await ctx.service.msgList.eduzixun();
        let queryObj = ctx.query;
        let totalNum = await ctx.model.EduZixun.find({}).count();
        let pagesize = queryObj.pagesize;
        let pageno = queryObj.pageno;
        if (!pagesize) pagesize = 10;
        if (!pageno) pageno = 1;
        if (typeof pagesize === 'string') {
            pagesize = Number(pagesize);
        }
        if (typeof pageno === 'string') {
            pageno = Number(pageno);
        }
        let data = {
            data: {
                msg,
                totalPages: Math.ceil(totalNum / pagesize),
                pagesize: pagesize,
                pageno: pageno,
            },
            status: "100",
            message: "ok"
        }
        ctx.body = data
    }
    async iqiyiTvMsg() {
        // 请求爱奇艺数据
        const ctx = this.ctx;
        let tvMsg = await ctx.service.msgList.iqiyi_tvMsg()
        let data = {
            data: {
                tvMsg,
                tvid: this.ctx.query.tvid
            },
            status: "100",
            message: "ok"
        }
        ctx.body = data
    }
    async index() {
        this.ctx.body = "Hello world egg start, hello world"
    }
    async educlassmsg() {
        // 请求edu 班级列表
        const ctx = this.ctx;
        let msg = await ctx.service.msgList.educlass();
        let queryObj = ctx.query;
        let searchLoc = 'Edu' + queryObj.className + queryObj.xueke
        if (!searchLoc) searchLoc = 'EduClass1Shuxue'
        let totalNum = await ctx.model.Educlass[searchLoc].find({}).count();
        let pagesize = queryObj.pagesize;
        let pageno = queryObj.pageno;
        if (!pagesize) pagesize = 10;
        if (!pageno) pageno = 1;
        if (typeof pagesize === 'string') {
            pagesize = Number(pagesize);
        }
        if (typeof pageno === 'string') {
            pageno = Number(pageno);
        }
        let data = {
            data: {
                msg,
                totalPages: Math.ceil(totalNum / pagesize),
                pagesize: pagesize,
                pageno: pageno,
            },
            status: "100",
            message: "ok"
        }
        ctx.body = data
    }
    async tuzhaimsg() {
        // 请求图摘 详情列表  https://qingniantuzhai.com/
        const ctx = this.ctx;
        let msg = await ctx.service.msgList.tuzhaimsg();
        let data = {
            data: {
                msg: msg[0]
            },
            status: "100",
            message: "ok"
        }
        ctx.body = data
    }
    async tuzhailist() {
        // 请求图摘 详情列表  https://qingniantuzhai.com/
        const ctx = this.ctx;
        let msg = await ctx.service.msgList.tuzhailist();
        let queryObj = ctx.query;
        // let totalNum = await ctx.model.NianzhaiList.find({}).count();
        let pagesize = queryObj.pagesize;
        let pageno = queryObj.pageno;
        if (!pagesize) pagesize = 10;
        if (!pageno) pageno = 1;
        if (typeof pagesize === 'string') {
            pagesize = Number(pagesize);
        }
        if (typeof pageno === 'string') {
            pageno = Number(pageno);
        }
        let data = {
            data: {
                msg,
                // totalPages: Math.ceil(totalNum / pagesize),
                pagesize: pagesize,
                pageno: pageno,
            },
            status: "100",
            message: "ok"
        }
        ctx.body = data
    }
    async kutulist() {
        // 请求酷图 详情列表 http://www.win4000.com/
        const ctx = this.ctx;
        let msg = await ctx.service.msgList.kutulist();
        let queryObj = ctx.query;
        let totalNum = await ctx.model.Kutu.find({}).count();
        let pagesize = queryObj.pagesize;
        let pageno = queryObj.pageno;
        if (!pagesize) pagesize = 10;
        if (!pageno) pageno = 1;
        if (typeof pagesize === 'string') {
            pagesize = Number(pagesize);
        }
        if (typeof pageno === 'string') {
            pageno = Number(pageno);
        }
        let data = {
            data: {
                msg,
                totalPages: Math.ceil(totalNum / pagesize),
                pagesize: pagesize,
                pageno: pageno,
            },
            status: "100",
            message: "ok"
        }
        ctx.body = data
    }
}

module.exports = msgListController