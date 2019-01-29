const Service = require('egg').Service;

// 是用来操作数据库的文件存放的地方/或者请求数据的地方 业务逻辑层
// 代理服务器中，Controller 将用户的请求转发到其他服务器上，并将其他服务器的处理结果返回给用户
class msgListService extends Service {
    async iqiyi_movie() {
        // const ctx = this.ctx;
        // // 表示在数据库中查找  
        // return ctx.model.MsgListMovie.find()
        const ctx = this.ctx;
        let queryObj = ctx.query
        let pagesize = queryObj.pagesize
        let pageno = queryObj.pageno
        if (!pagesize) pagesize = 12
        if (!pageno) pageno = 1
        if (typeof pagesize === 'string') {
            pagesize = Number(pagesize)
        }
        if (typeof pageno === 'string') {
            pageno = Number(pageno)
        }
        return ctx.model.MsgListMovie.find().skip((pageno - 1) * pagesize).limit(pagesize)
    }
    async iqiyiTvlist() {
        const ctx = this.ctx;
        let queryObj = ctx.query
        let pagesize = queryObj.pagesize
        let pageno = queryObj.pageno
        if (!pagesize) pagesize = 10
        if (!pageno) pageno = 1
        if (typeof pagesize === 'string') {
            pagesize = Number(pagesize)
        }
        if (typeof pageno === 'string') {
            pageno = Number(pageno)
        }
        return ctx.model.IqiyiTvlist.find().skip((pageno - 1) * pagesize).limit(pagesize)
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
    async educlass() {
        const ctx = this.ctx;
        let queryObj = ctx.query
        let pagesize = queryObj.pagesize
        let pageno = queryObj.pageno
        if (!pagesize) pagesize = 10
        if (!pageno) pageno = 1
        if (typeof pagesize === 'string') {
            pagesize = Number(pagesize)
        }
        if (typeof pageno === 'string') {
            pageno = Number(pageno)
        }
        let searchLoc = 'Edu' + queryObj.className + queryObj.xueke
        if (!searchLoc) searchLoc = 'EduClass1Shuxue'
        switch (searchLoc) {
            case 'EduClass1Shuxue':
            case 'EduClass1Yingyu':
            case 'EduClass1Yuwen':
            case 'EduClass2Shuxue':
            case 'EduClass2Yingyu':
            case 'EduClass2Yuwen':
            case 'EduClass3Shuxue':
            case 'EduClass3Yingyu':
            case 'EduClass3Yuwen':
            case 'EduClass4Shuxue':
            case 'EduClass4Yingyu':
            case 'EduClass4Yuwen':
            case 'EduClass5Shuxue':
            case 'EduClass5Yingyu':
            case 'EduClass5Yuwen':
            case 'EduClass6Shuxue':
            case 'EduClass6Yingyu':
            case 'EduClass6Yuwen':
                return ctx.model.Educlass[searchLoc].find().skip((pageno - 1) * pagesize).limit(pagesize);
        }
        // return ctx.model.IqiyiTvlist.find().skip((pageno - 1) * pagesize).limit(pagesize)
        // 总的条数
        // return ctx.model.IqiyiTvlist.find()
    }
    async artdetail() {
        // 热点详情页
        // http://127.0.0.1:7001/artdetail?className=Class1&xueke=Shuxue&id=20180504/8565
        // const ctx = this.ctx;
        // let queryObj = ctx.query
        // let searchLoc = 'Edu' + queryObj.className + queryObj.xueke
        // if (!searchLoc) searchLoc = 'EduClass1Shuxue'
        // let sealine = queryObj.id
        // if (!sealine) sealine = "20180504/8565"
        // return ctx.model.Educlass[searchLoc].find({ "_id": sealine })
        // 班级详情页
        const ctx = this.ctx;
        let queryObj = ctx.query
        let sealine = queryObj.id
        if (!sealine) sealine = "20170818/8472"
        return ctx.model.EduClassMsg.find({ "_id": sealine })

    }
    async eduzixun() {
        const ctx = this.ctx;
        let queryObj = ctx.query
        let pagesize = queryObj.pagesize
        let pageno = queryObj.pageno
        if (!pagesize) pagesize = 10
        if (!pageno) pageno = 1
        if (typeof pagesize === 'string') {
            pagesize = Number(pagesize)
        }
        if (typeof pageno === 'string') {
            pageno = Number(pageno)
        }
        return ctx.model.EduZixun.find().skip((pageno - 1) * pagesize).limit(pagesize)
    }
    async edumsg() {
        // 热点详情页
        const ctx = this.ctx;
        let queryObj = ctx.query
        let sealine = queryObj.id
        if (!sealine) sealine = "201811/10825052"
        return ctx.model.EduZixun.find({ "_id": sealine })
    }
    async tuzhailist() {
        const ctx = this.ctx;
        let queryObj = ctx.query
        let pagesize = queryObj.pagesize
        let pageno = queryObj.pageno
        if (!pagesize) pagesize = 10
        if (!pageno) pageno = 1
        if (typeof pagesize === 'string') {
            pagesize = Number(pagesize)
        }
        if (typeof pageno === 'string') {
            pageno = Number(pageno)
        }
        return ctx.model.NianzhaiList.find().sort({ sortTime: -1 }).skip((pageno - 1) * pagesize).limit(pagesize)
    }
    async educlassmsg() {
        // 班级详情页
        const ctx = this.ctx;
        let queryObj = ctx.query
        let sealine = queryObj.id
        if (!sealine) sealine = "20170818/8472"
        return ctx.model.EduClassMsg.find({ "_id": sealine })
    }
    async tuzhaimsg() {
        // 图摘详情页
        const ctx = this.ctx;
        let queryObj = ctx.query
        let sealine = queryObj.id
        if (!sealine) sealine = "/qing-nian-tu-zhai-0831/"
        return ctx.model.NianzhaiListmsg.find({ "_id": sealine })
    }
    async kutulist() {
        // 酷图列表
        const ctx = this.ctx;
        let queryObj = ctx.query
        let pagesize = queryObj.pagesize
        let pageno = queryObj.pageno
        if (!pagesize) pagesize = 10
        if (!pageno) pageno = 1
        if (typeof pagesize === 'string') {
            pagesize = Number(pagesize)
        }
        if (typeof pageno === 'string') {
            pageno = Number(pageno)
        }
        return ctx.model.Kutu.find().skip((pageno - 1) * pagesize).limit(pagesize)
    }
}

module.exports = msgListService;